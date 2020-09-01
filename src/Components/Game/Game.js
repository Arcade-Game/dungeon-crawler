import React, {useState, useEffect, useRef} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {TweenMax, Power3, TweenLite} from 'gsap';
import axios from 'axios';

// Styling

import './Game.scss';
import './Map.scss';
import './monsters.scss';

// Components

import Footer from '../Footer/Footer';
import CombatView from './CombatView/CombatView';
import CombatStats from '../CombatStats/CombatStats';
import MiniMap from './MiniMap';
import Map from './Map';

// Maps

import {mapObject} from './Map Variables/mapObjects';
import {puzzles} from './Map Variables/puzzles';
import {tutorial} from './Map Variables/tutorial';
// import {puzzles, levelOne, demoMap} from './Map Variables/puzzles';

// Reducers

import {deathCounter, saveHero } from '../../Redux/reducers/heroReducer';
import {setHonor, setLevel} from '../../Redux/reducers/titlesReducer';

//

import { dungeonMusic, musicNumber } from './dungeonMusic';
import {pushObstacle} from './pushObstacle';


const Game = (props) => {

  // Seed maps

  // const {mapArray, mapX, mapY} = mapObject
  const {mapArray, mapX, mapY} = tutorial
  // const {mapArray, mapX, mapY} = levelOne
  // const {mapArray, mapX, mapY} = demoMap

  // State
  
  const [grid, setGrid] = useState(mapArray), // Current map.

    [charX, setCharX] = useState(mapX),
    [charY, setCharY] = useState(mapY), // CharX and CharY set the index from which the character view takes the seed map and creates a 9x9 grid with the character in the middle. These indexes change with arrow keys or WASD key presses.

    [heightWidth, setHeightWidth] = useState(650), // Used to determine the size of the character grid in pixels.
    [viewRowCols, setViewRowCols] = useState(9), // Number of rows and columns in character grid.

    [inventoryToggle, setInventoryToggle] = useState(false), // Toggles inventory tab.
    [equipmentToggle, setEquipmentToggle] = useState(false), // Toggles equipment tab.
    [newMoney, setNewMoney] = useState(0), // Stores value of money accumulated and displays in the inventory tab.
    [keyToggle, setKeyToggle] = useState(false),

    [isFight, setIsFight] = useState(false), // Toggle for combat view.
    [monsterType, setMonsterType] = useState(''), // Stores type of monster to pass to relevant components when combat is triggered.
    [monsterCoor, setMonsterCoor] = useState([0,0]), // Stores coordinates of the monster to allow for movement after combat view toggles back to normal view.

    [characterHealth, setCharacterHealth] = useState(0),
    [experience, setExperience] = useState(0),
    [level, setLevel] = useState(1),
    [XPforLevel, setXPforLevel] = useState(), // How much experience is needed to level up.

    [quicksandCounter, setQuicksandCounter] = useState(0), // Tallies consecutive movement on quicksand tiles.  More than three in a row triggers death.

    [hero, setHero] = useState(props.hero), // Stores hero information.
    [heroStats, setHeroStats] = useState(props.stats),
    [equipment, setEquipment] = useState(props.equipment),
    [inventory, setInventory] = useState(props.inventory),

    [direction, setDirection] = useState('up') // Determines the direction character sprite is facing for animation purposes.

    // Refs

    let coinFade = useRef(''); // Animates gold coin when stepping on chests or gold piles.
    let newXP = useRef(''); // Will animate experience bar.

    console.log("map array", mapArray)

    // useEffects
    
    useEffect(() => { // Sets character level and experience.
      let needXP = ((level*100)+((level-1)*.5))
      setXPforLevel(needXP)

    }, [experience, level])

    useEffect(() => { // Sets character health and monster types.
      setCharacterHealth(heroStats.health)
      let newGrid = [...grid]
      newGrid.forEach((e,i,a) => i > 8 && i < a.length-8 ? e.forEach((f,j,z) => { // Iterates over a copy of the grid, and if type is monster, calls getMonster, passing in the indexes, which updates state grid with a monster type.
        return (j > 8 && j < z.length-8 ? (newGrid[i][j].type === 'monster' ? getMonster(j, i) : null) : null)
      }) : null)
    }, [])

    // Functions

  const move = ({keyCode}) => { // Checks for combat view.  If false, calls getKeyCode.
    return !isFight ? getKeyCode(keyCode) :  null
  }

  const getKeyCode = (keyCode) => { // Uses keyCode to determine movement direction, then calls functions to determine what to do with target tile.
    if(keyCode === 37 || keyCode === 65){ // Checks keyCode for direction.
      setDirection('left') // Sets sprite animation direction.
      if(grid[charY][charX-1].itemObject){ // Checks the target tile for an object.
        determineObject(charX-1, charY) // Determines what object is on target tile.
      } else if(grid[charY][charX-1].pushable){ // If target object is a pushable, pushes Left.
        pushObstacle(charX-1, charY, charX-2, charY, charX, charY, setCharX, setCharY, grid, getType, setGrid) // Passes in all of the relevant data for pushing an object, including the data that would be needed if I took the pushObstacle function out of Game.js.
      } else {checkTile(charX-1, charY)} // If target has no objects or pushables, checks tile for terrain type.
      
    } else if(keyCode === 38 || keyCode === 87){ // Push Up
      setDirection('up')
      if(grid[charY-1][charX].itemObject){
        determineObject(charX, charY-1)
      } else
      if(grid[charY-1][charX].pushable){
        pushObstacle(charX, charY-1, charX, charY-2, charX, charY, setCharX, setCharY, grid, getType, setGrid)
      } else {checkTile(charX, charY-1)}
      
    } else if(keyCode === 39 || keyCode === 68){ // Push Right
      setDirection('right')
      if(grid[charY][charX].itemObject){
        determineObject(charX+1, charY)
      } else
      if(grid[charY][charX+1].pushable){
        pushObstacle(charX+1, charY, charX+2, charY, charX, charY, setCharX, setCharY, grid, getType, setGrid)
      } else {checkTile(charX+1, charY)}
      
    } else if(keyCode === 40 || keyCode === 83){ // Push Down
      setDirection('down')
      if(grid[charY+1][charX].itemObject){
        determineObject(charX, charY+1)
      } else
      if(grid[charY+1][charX].pushable){
        pushObstacle(charX, charY+1, charX, charY+2, charX, charY, setCharX, setCharY, grid, getType, setGrid)
      } else {checkTile(charX, charY+1)}
      
    } 
    else if(keyCode ===  66){
      inventoryToggleFn()
    } else if(keyCode === 72){
      equipmentToggleFn()
    }
  }

  const determineObject = (x, y) => { // Determines if target tile has an object i.e. a key.
    let tileObject = grid[y][x].itemObject
    let newGrid = [...grid]
    switch (tileObject) {
      case 'door-key':
        setCharX(x)
        setCharY(y)
        axios.get('/api/key').then(res => console.log(res.data))
        newGrid[y][x] = {...newGrid[y][x], itemObject: ''}
      break;
    }
  }
  
  const getType = (x, y) => { // Returns terrain type of target tile.
    return grid[y][x].type 
  }

  const checkTile = (x, y) => { // Determines the outcome of stepping on target tile. 
    let whatType = getType(x, y)
      switch(whatType){
        case "empty": // Move into target.
          setCharX(x)
          setCharY(y)
          setQuicksandCounter(0) // Resets quicksand accumulator.
          break;
        case "monster": // Toggle combat view.
          fightMonster(x, y, grid[y][x].level)
          setQuicksandCounter(0)
          break;
        case "chest": // Move into target and call chest function.
          openChest(x, y, grid[y][x].level)
          setCharX(x)
          setCharY(y)
          setQuicksandCounter(0)
          break;
        case "exit": // Receive experience for completion, save game, and push to town view.
          setQuicksandCounter(0)
          updateExperience(x,y,"complete")
          setCharX(x)
          setCharY(y)
          // setGrid([...mapArray])
          saveGameLocal()
          props.history.push('/town')
          window.location.reload(false) // Reload in order to reset map.
          break;
        case "push-bridge": // Move into target.
          setQuicksandCounter(0)
          setCharX(x)
          setCharY(y)
          break;
        case "quicksand": // Move into target and increment quicksand counter.
          walkQuicksand(x,y)
          setCharX(x)
          setCharY(y)
          break;
        case "lava": // Die.
          die()
          break;
        case "push-bridge-lava-bridge": // Move into target.
          setCharX(x)
          setCharY(y)
          break;
        case "push-bridge-lava-bridge1": // Move into target.
          setCharX(x)
          setCharY(y)
        break;
        case "push-bridge-lava2": // Move into target.  The lava-push bridge is working on localhost but does not work when hosted.  Will have to debug.
          setCharX(x)
          setCharY(y)
        break;
        case "lookout": // Move into target. Extends visible tiles on the mini-map.
          seeLookout(x,y)
          setCharX(x)
          setCharY(y)
          break;
        case "hidden-door": // Move into target. Call findHidden which will search each tile that shares a side with target tile and if property "hidden" is true, changes "hidden" to false which reveals the tile, and then calls findHidden again passing in the indexes of the tile(s) which were hidden, so that all successive adjacent hidden tiles are revealed.
          setCharX(x)
          setCharY(y)
          findHidden(x, y)
          break;
        case "uneven": // Move into target.
          setCharX(x)
          setCharY(y)
          break;
        case "cliff": // Check for conditions which would allow character to move into target, and if satisfied, move into target.
          if(
            grid[charY][charX].pushable === true || grid[charY][charX].type === 'cliff'){
            setCharX(x)
            setCharY(y)
          }
          break;
        case "platform": // Move into target.
          setCharX(x)
          setCharY(y)
          break;
        case "teleporter-1": // Move into tile at the index specified in the teleporter object.
          setCharX(x)
          setCharY(y)
          teleport(x,y)
          break;
        case "broken-teleporter": // Move into target.
          setCharX(x)
          setCharY(y)
          break;
        case "gold-pile": // Move into target.  Call gold function.
          goldPile(x,y,grid[y][x].level)
          let newGrid = [...grid]
          newGrid[y][x] = {...newGrid[y][x], type: "empty"}
          setGrid(newGrid)
          setCharX(x)
          setCharY(y)
          break;
      }
  }

  const pushObstacle = (x,y,xx,yy, charX, charY, setCharX, setCharY, grid, getType, setGrid) => { // Checks target tile (x, y) and the tile the pushable on target tile will be pushed to (xx, yy) to determine outcome.  Dependent on which of the four elevations character is on, and what the terrain types of (x,y) and (xx,yy) are.
    let newGrid = [...grid]
    let hero = grid[charY][charX]
    let boulder = grid[y][x]
    let pushTo = grid[yy][xx]

    if (hero.elevation < boulder.elevation){
      if (hero.pushable !== true || pushTo.elevation > boulder.elevation){return}
      else if (boulder.elevation > pushTo.elevation){
        newGrid[yy][xx] = {...newGrid[yy][xx], pushable: true}
        newGrid[y][x] = {...newGrid[y][x], pushable: false}
        setCharX(x)
        setCharY(y)
      }
    } else if (hero.elevation === boulder.elevation){
      if (hero.pushable === true){
        setCharX(x)
        setCharY(y)
      }
      if (hero.pushable !== true){
        if (boulder.elevation < pushTo.elevation){return}
        else if (boulder.elevation === pushTo.elevation && pushTo.pushable === true){return}
        else if (boulder.elevation > pushTo.elevation){
          if(grid[yy][xx].type === 'chest'){
            newGrid[yy][xx] = {...newGrid[yy][xx], type: 'empty', pushable: 'true'}
            newGrid[y][x] = {...newGrid[y][x], pushable: false}
            setCharX(x)
            setCharY(y)
          }
          if(grid[yy][xx].type === 'monster'){
            newGrid[yy][xx] = {...newGrid[yy][xx], pushable: true, type: 'empty', monsterType: null}
            updateExperience(x, y, "crush")
          }
          if (pushTo.type === 'uneven'){
            newGrid[yy][xx] = {...newGrid[yy][xx], pushable: true}
            newGrid[y][x] = {...newGrid[y][x], pushable: false}
            setCharX(x)
            setCharY(y)
          }
          if (pushTo.type === 'water'){
            newGrid[yy][xx] = {...newGrid[yy][xx], type: 'push-bridge', pushable: false}
            newGrid[y][x] = {...newGrid[y][x], pushable: false}
          } else if (pushTo.type === 'quicksand'){
            newGrid[y][x] = {...newGrid[y][x], pushable: false}
          } else if (pushTo.type === 'lava'){
            newGrid[yy][xx] = {...newGrid[yy][xx], type: 'push-bridge-lava2', pushable: false}
            newGrid[y][x] = {...newGrid[y][x], pushable: false}
            setCharX(x)
            setCharY(y)
          } else if (pushTo.type === 'teleporter-1'){
            newGrid[newGrid[yy][xx].end[1]][newGrid[yy][xx].end[0]] = {...newGrid[newGrid[yy][xx].end[1]][newGrid[yy][xx].end[0]], pushable: true}
            newGrid[yy][xx] = {...newGrid[yy][xx], type: 'broken-teleporter', pushable: false}
            newGrid[y][x] = {...newGrid[y][x], pushable: false}
            setCharX(x)
            setCharY(y)
          } else if (pushTo.type === "empty" && grid[yy][xx].pushable !== true){
            newGrid[yy][xx].pushable = true
            newGrid[y][x] = {...newGrid[y][x], pushable: false}
            setCharX(x)
            setCharY(y)
          } else {
            newGrid[yy][xx] = {...newGrid[yy][xx], pushable: true}
            newGrid[y][x] = {...newGrid[y][x], pushable: false}
            setCharX(x)
            setCharY(y)
          }
          
        }
        else if (boulder.elevation === pushTo.elevation){
          if(pushTo.type === 'uneven' || pushTo.type === 'monster' || pushTo.type === 'gold-pile' || pushTo.type === 'chest'){return}
          if (pushTo.type === 'water'){
                  newGrid[yy][xx] = {...newGrid[yy][xx], type: 'push-bridge', pushable: false}
                  newGrid[y][x] = {...newGrid[y][x], pushable: false}
                } else if (pushTo.type === 'quicksand'){
                  newGrid[y][x] = {...newGrid[y][x], pushable: false}
                } else if (pushTo.type === 'lava'){
                  newGrid[yy][xx] = {...newGrid[yy][xx], type: 'push-bridge-lava2', pushable: false}
                  newGrid[y][x] = {...newGrid[y][x], pushable: false}
                  setCharX(x)
                  setCharY(y)
                } else if (pushTo.type === 'teleporter-1'){
                  newGrid[newGrid[yy][xx].end[1]][newGrid[yy][xx].end[0]] = {...newGrid[newGrid[yy][xx].end[1]][newGrid[yy][xx].end[0]], pushable: true}
                  newGrid[yy][xx] = {...newGrid[yy][xx], type: 'broken-teleporter', pushable: false}
                  newGrid[y][x] = {...newGrid[y][x], pushable: false}
                  setCharX(x)
                  setCharY(y)
                } else if (pushTo.type === "empty" && grid[yy][xx].pushable !== true){
                  newGrid[yy][xx].pushable = true
                  newGrid[y][x] = {...newGrid[y][x], pushable: false}
                  setCharX(x)
                  setCharY(y)
                } else {
                  newGrid[yy][xx] = {...newGrid[yy][xx], pushable: true}
                  newGrid[y][x] = {...newGrid[y][x], pushable: false}
                  setCharX(x)
                  setCharY(y)
                }
          
        }
      }
    } else if (hero.elevation > boulder.elevation){
      setCharX(x)
      setCharY(y)
    }
    setGrid(newGrid)
  }

  const teleport = (x,y) => { // Teleports character or pushable to index specified on teleporter object.
    setCharX(grid[y][x].end[0])
    setCharY(grid[y][x].end[1])
  }

  const findHidden = (x,y) => { // Recursively checks adjacent tiles for hidden property and if true, reveals those tiles. 
    let newGrid =[...grid]
    let north = y-1
    let east = x+1
    let south = y+1
    let west = x-1
    if(newGrid[north][x].hidden){
      newGrid[north][x] = {...newGrid[north][x], hidden: false}
      findHidden(x,north)
    }
    if(newGrid[y][east].hidden){
      newGrid[y][east] = {...newGrid[y][east], hidden: false}
      findHidden(east,y)
    }
    if(newGrid[south][x].hidden){
      newGrid[south][x] = {...newGrid[south][x], hidden: false}
      findHidden(x,south)
    }
    if(newGrid[y][west].hidden){
      newGrid[y][west] = {...newGrid[y][west], hidden: false}
      findHidden(west,y)
    }
    setGrid(newGrid)
  }

  const walkQuicksand = (x,y) => { // Increments quicksand counter and if counter reaches three, calls die function.
    setQuicksandCounter(quicksandCounter + 1)
    return quicksandCounter === 3 ? die() : null
  }

  const setNewLava = (x,y) => { // Sets lava bridge so that it disappears.  Is not working on hosted version, though it is locally.
    return grid[y][x].type === 'push-bridge-lava-bridge' ? grid[y][x].type = 'lava' :
      grid[y][x].type === 'push-bridge-lava1' ? grid[y][x].type = 'push-bridge-lava-bridge' :
      grid[y][x].type === 'push-bridge-lava2' ? grid[y][x].type = 'push-bridge-lava1' :
      null
  }
    
  const fightMonster = (x, y) => { // Toggles combat view.
    setMonsterType(grid[y][x].monsterType)
    setMonsterCoor([x, y])
    setIsFight(true)
  }

  const clearMonster = (x, y) => { // Clears killed monsters from the map and updates experience gained from combat.
    let newGrid = [...grid]
    console.log("monster level", grid[y][x].level)
    updateExperience(x, y, "monster", grid[y][x].level)
    setTimeout(() => {
      newGrid[y][x] = {...newGrid[y][x], type: grid[y][x].elevation === 3 ? 'cliff' : grid[y][x].elevation === 1 ? 'platform' : 'empty', monsterType: "", level: ''}
      setCharX(x)
      setCharY(y)
      setMonsterCoor([0,0])
      setGrid(newGrid)
    }, 10)
    
    
  }

  const updateExperience = (x, y, type, monsterLevel) => { // Updates experience and level dependent on activity. 
    // console.log("first", level, XPforLevel)
    let xpVar = XPforLevel
    switch(type){
      case "monster": // Gained from defeating monsters in combat.
        if(experience + (20 + (20 * ((level - monsterLevel) * -.25))) > xpVar){
          xpVar = experience + (20 + (20 * ((level - monsterLevel) * -.25))) - XPforLevel
          setExperience(xpVar)
          updateLevel(x, y)
        } else {
          setExperience(experience + (20 + (20 * ((level - monsterLevel) * -.25))) > XPforLevel ? (experience + (20 + (20 * ((level - monsterLevel) * -.25))) - XPforLevel) : experience + (20 + (20 * ((level - monsterLevel) * -.25))))
        }
      break;
      case "crush": // Gained from pushing pushables from cliffs onto monsters on elevation 1.
        if(experience + 15 > xpVar){
          xpVar = experience+15 - XPforLevel
          setExperience(xpVar)
          updateLevel(x,y)
        } else {setExperience(experience+15)}
      break;
      case "complete": // Gained from stepping on the "exit" tile.
        if(experience + 50 > xpVar){
          xpVar = experience+50 - XPforLevel
          setExperience(xpVar)
          updateLevel(x,y)
        } else {setExperience(experience + 50)}
      break;
    }

    // if(experience + (20 * (level - grid[y][x].level)) >= XPforLevel){
    //   updateLevel(x, y)}
    
    let expRemaining = (XPforLevel - experience)
    // console.log(level, XPforLevel, expRemaining)
  }

  const updateLevel = (x,y) => { // Increments level if experience threshold is reached.
    setLevel(level + 1)
  }

  const moneyAnimation = () => { // Animates gold coin when money is gathered.
    TweenMax.to(
      coinFade,
      .001,
      {
        opacity: 1,
        ease: Power3.easeOut,
      }
    )
    TweenMax.to(
      coinFade,
      3,
      {
        opacity: 0,
        ease: Power3.easeOut,
      }
    )
  }

  const openChest = (x, y, z) => { // Checks level of chest, and returns an item and a gold amount dependent on level. Clears chest from the map.
    let newGrid = [...grid]
    newGrid[y][x] = {...newGrid[y][x], type: newGrid[y][x].elevation === 3 ? 'cliff' : newGrid[y][x].elevation === 1 ? 'platform' : 'empty'}
    setTimeout(() => {
      setGrid(newGrid)
      axios.get(`/api/item`).then(res => {
        let index = inventory.findIndex(e => e === 0)
        let newInventory = [...inventory]
        if (index !== -1){
          newInventory[index] = res.data
          setInventory(newInventory)
         } 
      })
      goldPile(x,y,z)
    }, 50)
  }

  const goldPile = (x, y, z) => { // NEED MINIMUMS SET AND CORRECT NUMBERS. Z STANDS FOR THE LEVEL OF CHEST/GOLD PILE.
    let num = z === 1 ? Math.floor(Math.random() * (8-1)) + 1 :
              z === 2 ? Math.floor(Math.random() * (22-7)) + 7 :
              z === 3 ? Math.floor(Math.random() * (35-15)) + 15 :
              z === 4 ? Math.floor(Math.random() * (100-30)) + 30 :
              z === 5 ? Math.floor(Math.random() * (250-100)) + 100 : null
    moneyAnimation()
    setNewMoney(num)
  }
  
  const seeLookout = (x,y) => { // Makes visible a range of tiles on the minimap.
      let x1 = x - 10
      let x2 = x + 10
      let y1 = y - 10
      let y2 = y + 10

      for(let i = x1; i <= x2; i++){
          for(let j = y1; j <= y2; j++){
            exploreTile(i,j)
          }
      }
  }

  const exploreTile = (x, y) => { // Reveals tiles on the minimap.
    let exploreGrid = [...grid]
    let newObject = {...exploreGrid[y][x], explored: true}
    exploreGrid[y][x] = newObject
    setGrid(exploreGrid)
  }

  const getMonster = (x, y) => { // Fetches monstertypes from the database and sets them when a monster tile is rendered.
    if(grid[y][x].monsterType){
      return grid[y][x].monsterType
    }
    axios.get(`/api/monster`).then(res => {
      let newGrid = [...grid]
      newGrid[y][x] = {...newGrid[y][x], monsterType: res.data.name}
      setGrid(newGrid)
    })
  }
  
  const inventoryToggleFn = () => { // Toggles inventory.
    setInventoryToggle(!inventoryToggle)
  }

  const equipmentToggleFn = () => { // Toggles equipment.
    setEquipmentToggle(!equipmentToggle)
  }

  const updateSessionInventory = (inv, equ) => { // Updates session inventory and equipment.
    setInventory(inv);
    setEquipment(equ)
  }

  const handleKeyToggle = () => { // Toggles terrain key, which displays terrain types on hover if on.
    setKeyToggle(!keyToggle)
  }

  const die = ()  => { // Increments death counter (used in town view), saves game, and pushes to death view.
    props.deathCounter()
    saveGameLocal()
    props.history.push('/death')
  }

  const saveGameLocal  = async () => { // Saves game to local storage.
    props.saveHero({
      hero: {...hero},
      equipment: [...equipment],
      inventory: [...inventory],
      stats: {...heroStats}
    })
  }
  
  return (
    <div className="wrapper" role="button" tabIndex="0" onKeyDown={e => move(e)}>
      <audio src={`${dungeonMusic[musicNumber]}`} autoPlay />
      <div className="Game">
        <MiniMap grid={grid} mmX={grid[0].length} mmY={grid.length} isFight={isFight} charX={charX} charY={charY} />
        <Map 
          charX={charX} 
          charY={charY} 
          heightWidth={heightWidth}    
          viewRowCols={viewRowCols} 
          grid={grid} 
          getMonsterFn={getMonster}
          exploreTileFn={exploreTile}
          isFight={isFight} 
          setNewLava={setNewLava}
          direction={direction}
          heroGuy={hero}
          keyToggle={keyToggle}
        />
        {
          isFight ? 
          <CombatView 
            monsterType={monsterType.toLowerCase()}
            toggleFight = {setIsFight}
            isFightFn={setIsFight}
            setGridFn = {setGrid}
            clearMonster = {clearMonster}
            monsterCoor = {monsterCoor}
            characterHealth = {characterHealth}
            setCharacterHealthFn = {setCharacterHealth}
            level = {level}
            heroStats = {heroStats}
            equipment = {equipment}
            hero = {hero}
          /> : null
        }
        <div className="coin-icon" ref={e => {coinFade = e}}></div>
        <Footer 
          newMoney={newMoney}
          setEquipmentToggle={equipmentToggleFn}
          setInventoryToggle={inventoryToggleFn}
          setInventoryToggleState={setInventoryToggle}
          setEquipmentToggleState={setEquipmentToggle}
          equipmentToggle={equipmentToggle}
          inventoryToggle={inventoryToggle}
          inventory = {inventory}
          equipment = {equipment}
          updateSessionInventory = {updateSessionInventory}
          // wipeHeroState = {wipeHeroState}
          heroStats = {heroStats}
          hero = {hero}
          experience={experience}
          level={level}
          characterHealth = {characterHealth}
          newMoney={newMoney}
          isFight={isFight}
          setKeyToggleFn={handleKeyToggle}
        />
      </div>
    </div>
  );
}
const mapStateToProps = reduxState => reduxState.hero

export default withRouter(connect(mapStateToProps, {deathCounter, saveHero})(Game));
