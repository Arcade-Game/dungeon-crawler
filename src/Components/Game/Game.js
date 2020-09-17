import React, {useState, useEffect, useRef, useContext} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {TweenMax, Power3, TweenLite} from 'gsap';
import axios from 'axios';
import {GameContext} from '../../context/GameContext';

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
  const {grid, setGrid, heightWidth, charX, setCharX, charY, setCharY, viewRowCols, isFight, setIsFight, inventoryToggle,
  equipmentToggle, setInventoryToggle, setEquipmentToggle, newMoney, setNewMoney, keyToggle, setKeyToggle, monsterType, setMonsterType, monsterCoor, setMonsterCoor, characterHealth, setCharacterHealth, experience, setExperience, level, setLevel, XPforLevel, setXPforLevel, quicksandCounter, setQuicksandCounter, direction, setDirection} = useContext(GameContext)
  // const {mapArray, mapX, mapY} = levelOne
  // const {mapArray, mapX, mapY} = demoMap

  // State
  
    const [hero, setHero] = useState(props.hero), // Stores hero information.
            [heroStats, setHeroStats] = useState(props.stats),
            [equipment, setEquipment] = useState(props.equipment),
            [inventory, setInventory] = useState(props.inventory)

    // Refs

    let coinFade = useRef(''); // Animates gold coin when stepping on chests or gold piles.
    let newXP = useRef(''); // Will animate experience bar.

    // console.log("map array", mapArray)

    // useEffects
    
    useEffect(() => { // Sets character level and experience.
      let needXP = ((level*100)+((level-1)*.5))
      setXPforLevel(needXP)

    }, [experience, level])

    useEffect(() => { // Sets character health and monster types.
      setCharacterHealth(heroStats.health)
      let newGrid = [...grid]
      newGrid.forEach((e,i,a) => i > 8 && i < a.length-8 ? e.forEach((f,j,z) => { // Iterates over a copy of the grid, and if type is monster, calls getMonster, passing in the indexes, which updates state grid with a monster type.
        return (j > 8 && j < z.length-8 ? (newGrid[i][j].objType === 'monster' ? getMonster(j, i) : null) : null)
      }) : null)
    }, [])

    // Functions

  const move = ({keyCode}) => { // Checks for combat view.  If false, calls getKeyCode.
    return !isFight ? getKeyCode(keyCode) :  null
  }

  const getKeyCode = (keyCode) => { // Uses keyCode to determine movement direction, then calls functions to determine what to do with target tile.
    if (keyCode === 37 || keyCode === 65){ // Checks keyCode for direction.
      setDirection('left') // Sets sprite animation direction.
      if (grid[charY][charX-1].objType === "pushable"){
        pushObstacle(charX-1, charY, charX-2, charY, charX, charY, setCharX, setCharY, grid, setGrid)
      } else if (checkElevation(charX, charY, charX-1, charY)) {
        checkTile(charX-1, charY)
      } else {return}
    
    } else if (keyCode === 38 || keyCode === 87){ // Push Up
      setDirection('up')
      if (grid[charY-1][charX].objType === "pushable"){
        pushObstacle(charX, charY-1, charX, charY-2, charX, charY, setCharX, setCharY, grid, setGrid)
      } else if (checkElevation(charX, charY, charX, charY-1)) {
        checkTile(charX, charY-1)
      } else {return}

    } else if (keyCode === 39 || keyCode === 68){ // Push Right
      setDirection('right')
      if (grid[charY][charX+1].objType === "pushable"){
        pushObstacle(charX+1, charY, charX+2, charY, charX, charY, setCharX, setCharY, grid, setGrid)
      } else if (checkElevation(charX, charY, charX+1, charY)) {
        checkTile(charX+1, charY)
      } else {return}

    } else if (keyCode === 40 || keyCode === 83){ // Push Down
      setDirection('down')
      if (grid[charY+1][charX].objType === "pushable"){
        pushObstacle(charX, charY+1, charX, charY+2, charX, charY, setCharX, setCharY, grid, setGrid)
      } else if (checkElevation(charX, charY, charX, charY+1)) {
        checkTile(charX, charY+1)
      } else {return}
      
    } 
    else if (keyCode ===  66){
      inventoryToggleFn()
    } else if (keyCode === 72){
      equipmentToggleFn()
    }
  }
  
  const checkElevation = (x, y, x2, y2) => {
    const getMyElevation = () => {
      let elevation = grid[y][x].elevation
      if (grid[y][x].objType === "pushable") {
        elevation = elevation + 2
      }
      return elevation
    }
    let myElevation = getMyElevation()
    let newElevation = grid[y2][x2].elevation
    console.log("myElevation", myElevation, "newElevation", newElevation)
    return newElevation - myElevation < 2
  }

  const determineObject = (whatObject, x, y) => { // Determines if target tile has an object i.e. a key.
    let newGrid = [...grid]
    switch (whatObject) {
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
      case "teleporter-1": // Move into tile at the index specified in the teleporter object.
        setCharX(x)
        setCharY(y)
        teleport(x,y)
        break;
      case "gold-pile": // Move into target.  Call gold function.
        goldPile(x,y,grid[y][x].level)
        let newGrid = [...grid]
        newGrid[y][x] = {...newGrid[y][x], objType: null}
        setGrid(newGrid)
        setCharX(x)
        setCharY(y)
        break;
      case 'door-key':
        setCharX(x)
        setCharY(y)
        axios.get('/api/key').then(res => console.log(res.data))
        newGrid[y][x] = {...newGrid[y][x], objType: ''}
        break;
    }
  }

  const checkTile = (x, y) => { // Determines the outcome of stepping on target tile. 
    let whatTerrain = grid[y][x].tileType
    let whatObject = grid[y][x].objType
      switch(whatTerrain){
        case "quicksand": // Move into target and increment quicksand counter.
          walkQuicksand(x,y)
          setCharX(x)
          setCharY(y)
          break;
        case "lava": // Die.
          die()
          break;
        case "uneven": // Move into target.
          setCharX(x)
          setCharY(y)
          break;
        case "empty": // Move into target.
        if (whatObject){
          determineObject(whatObject, x, y)
        }
          setCharX(x)
          setCharY(y)
          setQuicksandCounter(0) // Resets quicksand accumulator.
          break;
        
        case "push-bridge": // Move into target.
          setQuicksandCounter(0)
          setCharX(x)
          setCharY(y)
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
        
        
        case "cliff": // Check for conditions which would allow character to move into target, and if satisfied, move into target.
          if(
            grid[charY][charX].pushable === true || grid[charY][charX].tileType === 'cliff'){
            setCharX(x)
            setCharY(y)
          }
          break;
        case "platform": // Move into target.
          setCharX(x)
          setCharY(y)
          break;
          case "broken-teleporter": // Move into target.
            setCharX(x)
            setCharY(y)
            break;
        
      }
  }

  const pushObstacle = (x,y,xx,yy, charX, charY, setCharX, setCharY, grid, setGrid) => { // Checks target tile (x, y) and the tile the pushable on target tile will be pushed to (xx, yy) to determine outcome.  Dependent on which of the four elevations character is on, and what the terrain types of (x,y) and (xx,yy) are.
    let newGrid = [...grid]
    let hero = grid[charY][charX]
    let boulder = grid[y][x]
    let pushTo = grid[yy][xx]

    if (hero.elevation < boulder.elevation){
      if (hero.objType !== "pushable" || pushTo.elevation > boulder.elevation){return}
      else if (boulder.elevation > pushTo.elevation){
        newGrid[yy][xx] = {...newGrid[yy][xx], objType: "pushable"}
        newGrid[y][x] = {...newGrid[y][x], objType: null}
        setCharX(x)
        setCharY(y)
      }
    } else if (hero.elevation === boulder.elevation){
      if (hero.objType === "pushable"){
        setCharX(x)
        setCharY(y)
      }
      if (hero.objType !== "pushable"){
        if (boulder.elevation < pushTo.elevation){return}
        else if (boulder.elevation === pushTo.elevation && pushTo.objType === "pushable"){return}
        else if (boulder.elevation > pushTo.elevation){
          if(grid[yy][xx].objType === 'chest'){
            newGrid[yy][xx] = {...newGrid[yy][xx], objType: 'pushable'}
            newGrid[y][x] = {...newGrid[y][x], objType: null}
            setCharX(x)
            setCharY(y)
          }
          if(grid[yy][xx].objType === 'monster'){
            newGrid[yy][xx] = {...newGrid[yy][xx], objType: "pushable",  monsterType: null}
            newGrid[y][x] = {...newGrid[y][x], objType: null}
            setCharX(x)
            setCharY(y)
            updateExperience(x, y, "crush")
          }
          if (pushTo.tileType === 'uneven'){
            newGrid[yy][xx] = {...newGrid[yy][xx], objType: "pushable"}
            newGrid[y][x] = {...newGrid[y][x], objType: null}
            setCharX(x)
            setCharY(y)
          }
          if (pushTo.tileType === 'water'){
            newGrid[yy][xx] = {...newGrid[yy][xx], tileType: 'push-bridge', objType: null}
            newGrid[y][x] = {...newGrid[y][x], objType: null}
          } else if (pushTo.tileType === 'quicksand'){
            newGrid[y][x] = {...newGrid[y][x], objType: null}
          } else if (pushTo.tileType === 'lava'){
            newGrid[yy][xx] = {...newGrid[yy][xx], tileType: 'push-bridge-lava2', objType: null}
            newGrid[y][x] = {...newGrid[y][x], objType: null}
            setCharX(x)
            setCharY(y)
          } else if (pushTo.objType === 'teleporter-1'){
            newGrid[newGrid[yy][xx].end[1]][newGrid[yy][xx].end[0]] = {...newGrid[newGrid[yy][xx].end[1]][newGrid[yy][xx].end[0]], objType: "pushable"}
            newGrid[yy][xx] = {...newGrid[yy][xx], objType: 'broken-teleporter', pushable: false}
            newGrid[y][x] = {...newGrid[y][x], pushable: false}
            setCharX(x)
            setCharY(y)
          } else if (pushTo.tileType === "empty" && grid[yy][xx].objType !== "pushable"){
            newGrid[yy][xx].objType = "pushable"
            newGrid[y][x] = {...newGrid[y][x], objType: null}
            setCharX(x)
            setCharY(y)
          } else {
            newGrid[yy][xx] = {...newGrid[yy][xx], objType: "pushable"}
            newGrid[y][x] = {...newGrid[y][x], objType: null}
            setCharX(x)
            setCharY(y)
          }
          
        }
        else if (boulder.elevation === pushTo.elevation){
          if(pushTo.tileType === 'uneven' || pushTo.objType === 'monster' || pushTo.objType === 'gold-pile' || pushTo.objType === 'chest'){return}
          if (pushTo.tileType === 'water'){
                  newGrid[yy][xx] = {...newGrid[yy][xx], tileType: 'push-bridge', objType: null}
                  newGrid[y][x] = {...newGrid[y][x], objType: null}
                } else if (pushTo.tileType === 'quicksand'){
                  newGrid[y][x] = {...newGrid[y][x], objType: null}
                } else if (pushTo.tileType === 'lava'){
                  newGrid[yy][xx] = {...newGrid[yy][xx], tileType: 'push-bridge-lava2', objType: null}
                  newGrid[y][x] = {...newGrid[y][x], objType: null}
                  setCharX(x)
                  setCharY(y)
                } else if (pushTo.objType === 'teleporter-1'){
                  newGrid[newGrid[yy][xx].end[1]][newGrid[yy][xx].end[0]] = {...newGrid[newGrid[yy][xx].end[1]][newGrid[yy][xx].end[0]], objType: null}
                  newGrid[yy][xx] = {...newGrid[yy][xx], tileType: 'broken-teleporter', pushable: false}
                  newGrid[y][x] = {...newGrid[y][x], pushable: false}
                  setCharX(x)
                  setCharY(y)
                } else if (pushTo.tileType === "empty" && grid[yy][xx].objType !== "pushable"){
                  newGrid[yy][xx].objType = "pushable"
                  newGrid[y][x] = {...newGrid[y][x], objType: null}
                  setCharX(x)
                  setCharY(y)
                } else {
                  newGrid[yy][xx] = {...newGrid[yy][xx], objType: "pushable"}
                  newGrid[y][x] = {...newGrid[y][x], objType: null}
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
    return grid[y][x].tileType === 'push-bridge-lava-bridge' ? grid[y][x].tileType = 'lava' :
      grid[y][x].tileType === 'push-bridge-lava1' ? grid[y][x].tileType = 'push-bridge-lava-bridge' :
      grid[y][x].tileType === 'push-bridge-lava2' ? grid[y][x].tileType = 'push-bridge-lava1' :
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
      newGrid[y][x] = {...newGrid[y][x], objType: null, monsterType: "", level: ''}
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
    newGrid[y][x] = {...newGrid[y][x], objType: null}
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
        <MiniMap grid={grid} mmX={grid[0].length} mmY={grid.length} isFight={isFight} charX={charX} charY={charY} isFight={isFight} />
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
