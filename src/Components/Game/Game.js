import React, {useState, useEffect, useRef} from 'react';
import './Game.scss';
import './Map.scss';
import './monsters.scss';
import Map from './Map';
import {mapObject} from './Map Variables/mapObjects';
import Footer from '../Footer/Footer';
import axios from 'axios';
import Inventory from './Character/Inventory/Inventory';
import Equipment from "./Character/Inventory/Equipment";
import MiniMap from './MiniMap';
import CombatView from './CombatView/CombatView';
import CombatStats from '../CombatStats/CombatStats';
import {withRouter} from 'react-router-dom';
import { dungeonMusic, musicNumber } from './dungeonMusic';
import {pushObstacle} from './pushObstacle';
import {tutorial} from './Map Variables/tutorial';
import {puzzles, levelOne} from './Map Variables/puzzles';
import {connect} from 'react-redux';
import { updateInventory } from '../../Redux/reducers/heroReducer';
import {TweenMax, Power3} from 'gsap';
// import {setHonor, setLevel} from '../../Redux/reducers/titlesReducer';

const Game = (props) => {
  // const {mapArray, mapX, mapY} = mapObject
  const {mapArray, mapX, mapY} = tutorial
  // const {mapArray, mapX, mapY} = levelOne

  const [grid, setGrid] = useState([...mapArray]),
    [charX, setCharX] = useState(mapX),
    [charY, setCharY] = useState(mapY),
    [heightWidth, setHeightWidth] = useState(650),
    [viewRowCols, setViewRowCols] = useState(9),
    [inventoryToggle, setInventoryToggle] = useState(false),
    [equipmentToggle, setEquipmentToggle] = useState(false),
    [newMoney, setNewMoney] = useState(0),
    [isFight, setIsFight] = useState(false),
    [monsterType, setMonsterType] = useState(''),
    [monsterStats, setMonsterStats] = useState({}),
    [characterStats, setCharacterStats] = useState({}),
    [monsterCoor, setMonsterCoor] = useState([0,0]),
    [health, setHealth] = useState(100),
    [experience, setExperience] = useState(0),
    [level, setLevel] = useState(1),
    [quicksandCounter, setQuicksandCounter] = useState(0),
    [lavaRockCounter, setLavaRockCounter] = useState([{}]),
    [XPforLevel, setXPforLevel] = useState()

    let coinFade = useRef('');
    let newXP = useRef('');

  const {stats} = props;
    
    useEffect(() => {
      let needXP = ((level*100)+((level-1)*.5))
      setXPforLevel(needXP)

    }, [experience, level])

    useEffect(() => {
      let newGrid = [...grid]
      newGrid.forEach((e,i,a) => i > 8 && i < a.length-8 ? e.forEach((f,j,z) => {
        return (j > 8 && j < z.length-8 ? (newGrid[i][j].type === 'monster' ? getMonster(j, i) : null) : null)
      }) : null)
    }, [])
  
  const move = ({keyCode}) => {
    return !isFight ? getKeyCode(keyCode) :  null
  }


  const getKeyCode = (keyCode) => {
    if(keyCode === 37 || keyCode === 65){
      if(grid[charY][charX-1].itemObject){
        determineObject(charX-1, charY)
      } else if(grid[charY][charX-1].pushable){ // Push Left
        pushObstacle(charX-1, charY, charX-2, charY, charX, charY, setCharX, setCharY, grid, getType, setGrid)
      } else {checkTile(charX-1, charY)}
      
    } else if(keyCode === 38 || keyCode === 87){ // Push Up
      if(grid[charY-1][charX].itemObject){
        determineObject(charX, charY-1)
      } else
      if(grid[charY-1][charX].pushable){
        pushObstacle(charX, charY-1, charX, charY-2, charX, charY, setCharX, setCharY, grid, getType, setGrid)
      } else {checkTile(charX, charY-1)}
      
    } else if(keyCode === 39 || keyCode === 68){ // Push Right
      if(grid[charY][charX].itemObject){
        determineObject(charX+1, charY)
      } else
      if(grid[charY][charX+1].pushable){
        pushObstacle(charX+1, charY, charX+2, charY, charX, charY, setCharX, setCharY, grid, getType, setGrid)
      } else {checkTile(charX+1, charY)}
      
    } else if(keyCode === 40 || keyCode === 83){ // Push Down
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

  const determineObject = (x, y) => {
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
  
  const getType = (x, y) => {
    return grid[y][x].type 
  }

  const checkTile = (x, y) => {
    let whatType = getType(x, y)
      switch(whatType){
        case "empty":
          setCharX(x)
          setCharY(y)
          setQuicksandCounter(0)
          break;
        case "monster":
          fightMonster(x, y)
          setQuicksandCounter(0)
          break;
        case "chest":
          openChest(x, y, grid[y][x].level)
          setCharX(x)
          setCharY(y)
          setQuicksandCounter(0)
          break;
        case "exit":
          setQuicksandCounter(0)
          updateExperience(x,y,"complete")
          setCharX(x)
          setCharY(y)
          setGrid([...mapArray])
          props.history.push('/town')
          break;
        case "push-bridge":
          setQuicksandCounter(0)
          setCharX(x)
          setCharY(y)
          break;
        case "quicksand":
          walkQuicksand(x,y)
          setCharX(x)
          setCharY(y)
          break;
        case "lava":
          die()
          break;
        case "push-bridge-lava-bridge":
          setCharX(x)
          setCharY(y)
          break;
        case "lookout":
          seeLookout(x,y)
          setCharX(x)
          setCharY(y)
          break;
        case "hidden-door":
          setCharX(x)
          setCharY(y)
          findHidden(x, y)
          break;
        case "uneven":
          setCharX(x)
          setCharY(y)
          break;
        case "cliff":
          if(
            grid[charY][charX].pushable === true || grid[charY][charX].type === 'cliff'){
            setCharX(x)
            setCharY(y)
          }
          break;
        case "platform":
          setCharX(x)
          setCharY(y)
          break;
        case "teleporter-1":
          setCharX(x)
          setCharY(y)
          teleport(x,y)
          break;
        case "broken-teleporter":
          setCharX(x)
          setCharY(y)
          break;
        case "gold-pile":
          goldPile(x,y,grid[y][x].level)
          let newGrid = [...grid]
          newGrid[y][x] = {...newGrid[y][x], type: "empty"}
          setGrid(newGrid)
          setCharX(x)
          setCharY(y)
          break;
      }
  }


  const pushObstacle = (x,y,xx,yy, charX, charY, setCharX, setCharY, grid, getType, setGrid) => {
    let newGrid = [...grid]
    let hero = grid[charY][charX]
    let boulder = grid[y][x]
    let pushTo = grid[yy][xx]

    if (hero.elevation < boulder.elevation){
      console.log("CLIMP UP")
      if (hero.pushable !== true || pushTo.elevation > boulder.elevation){return}
      else if (boulder.elevation > pushTo.elevation){
        newGrid[yy][xx] = {...newGrid[yy][xx], pushable: true}
        newGrid[y][x] = {...newGrid[y][x], pushable: false}
        setCharX(x)
        setCharY(y)
      }
    } else if (hero.elevation === boulder.elevation){
      console.log('PUSH ME')
      if (hero.pushable === true){
        setCharX(x)
        setCharY(y)
      }
      if (hero.pushable !== true){
        console.log('NOT STANDING ON A ROCK')
        if (boulder.elevation < pushTo.elevation){return}
        else if (boulder.elevation === pushTo.elevation && pushTo.pushable === true){return}
        else if (boulder.elevation > pushTo.elevation){
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
          if(pushTo.type === 'uneven' || pushTo.type === 'monster'){return}
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
      console.log('JUMP DOWN')
      setCharX(x)
      setCharY(y)
    }
    setGrid(newGrid)
}


  const teleport = (x,y) => {
    setCharX(grid[y][x].end[0])
    setCharY(grid[y][x].end[1])
  }

  const findHidden = (x,y) => {
    console.log('DING')
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

  const walkQuicksand = (x,y) => {
    setQuicksandCounter(quicksandCounter + 1)
    return quicksandCounter === 3 ? die() : null
  }

  const setNewLava = (x,y) => {
    return grid[y][x].type === 'push-bridge-lava-bridge' ? grid[y][x].type = 'lava' :
      grid[y][x].type === 'push-bridge-lava1' ? grid[y][x].type = 'push-bridge-lava-bridge' :
      grid[y][x].type === 'push-bridge-lava2' ? grid[y][x].type = 'push-bridge-lava1' :
      null
  }
    
  const fightMonster = (x, y) => {
    setMonsterType(grid[y][x].monsterType)
    setMonsterCoor([x, y])
    setIsFight(true)
  }

  const clearMonster = (x, y) => {
    let newGrid = [...grid]
    updateExperience(x, y, "monster", grid[y][x].level)
    newGrid[y][x] = {...newGrid[y][x], type: "empty", monsterType: "", level: ''}
    setCharX(x)
    setCharY(y)
    setMonsterCoor([0,0])
    
    setGrid(newGrid)
  }

  const updateExperience = (x, y, type, monsterLevel) => {
    console.log("first", level, XPforLevel)
    let xpVar = XPforLevel
    switch(type){
      case "monster":
        console.log("ding")
        if(experience + (20 + (20 * (level - monsterLevel) * -.25)) > xpVar){
          xpVar = experience + (20 + (20 * (level - monsterLevel) * -.25)) - XPforLevel
          setExperience(xpVar)
          updateLevel(x, y)
        } else {
          setExperience(experience + (20 + (20 * (level - monsterLevel) * -.25)) > XPforLevel ? (experience + (20 + (20 * (level - monsterLevel) * -.25)) - XPforLevel) : experience + (20 + (20 * (level - monsterLevel) * -.25)))
        }
      break;
      case "crush":
        if(experience + 15 > xpVar){
          xpVar = experience+15 - XPforLevel
          setExperience(xpVar)
          updateLevel(x,y)
        } else {setExperience(experience+15)}
      break;
      case "complete":
        if(experience + 50 > xpVar){
          xpVar = experience+50 - XPforLevel
          setExperience(xpVar)
          updateLevel(x,y)
        } else {setExperience(experience + 50)}
      break;
    }

    // if(experience + (20 * (level - grid[y][x].level)) >= XPforLevel){
    //   updateLevel(x, y)}
      console.log("NEW", experience + (20 + (20 * (level - monsterLevel) * -.25)))
    
    let expRemaining = (XPforLevel - experience)
    console.log(level, XPforLevel, expRemaining)
  }

  const updateLevel = (x,y) => {
    setLevel(level + 1)
  }

  const moneyAnimation = () => {
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

  const openChest = (x, y, z) => {
    let newGrid = [...grid]
    newGrid[y][x] = {...newGrid[y][x], type: "empty"}
    setGrid(newGrid)
    axios.get(`/api/item`).then(res => {
      console.log("res.data", res.data)
      props.updateInventory(res.data)})
    goldPile(x,y,z)
  }

  const goldPile = (x, y, z) => { // NEED MINIMUMS SET AND CORRECT NUMBERS. Z STANDS FOR THE LEVEL OF CHEST/GOLD PILE.
    let num = z === 1 ? Math.floor(Math.random() * (8-1)) + 1 :
              z === 2 ? Math.floor(Math.random() * (22-7)) + 7 :
              z === 3 ? Math.floor(Math.random() * (35-15)) + 15 :
              z === 4 ? Math.floor(Math.random() * (100-30)) + 30 :
              z === 5 ? Math.floor(Math.random() * (250-100)) + 100 : null
    // console.log('GOLD', num)
    moneyAnimation()
    setNewMoney(num)
  }
  
  const seeLookout = (x,y) => {
      let x1 = x - 10
      let x2 = x + 10
      let y1 = y - 10
      let y2 = y + 10

      // console.log("COORS", x, y)
      // console.log("NEWCOORS", x1, x2, y1, y2)
      for(let i = x1; i <= x2; i++){
          for(let j = y1; j <= y2; j++){
            exploreTile(i,j)
          }
      }
  }

  const exploreTile = (x, y) => {
    let exploreGrid = [...grid]
    let newObject = {...exploreGrid[y][x], explored: true}
    exploreGrid[y][x] = newObject
    setGrid(exploreGrid)
  }

  const getMonster = (x, y) => {
    if(grid[y][x].monsterType){
      return grid[y][x].monsterType
    }
    axios.get(`/api/monster`).then(res => {
      let newGrid = [...grid]
      newGrid[y][x] = {...newGrid[y][x], monsterType: res.data.name}
      setGrid(newGrid)
    })
  }
  
  const inventoryToggleFn = () => {
    setInventoryToggle(!inventoryToggle)
  }

  const equipmentToggleFn = () => {
    setEquipmentToggle(!equipmentToggle)
  }

  // const stats = async()=> {
  //   const arr = {}
  //   await axios.get(`/api/monster-stats/${monsterType}`)
  //   .then((res) => {
  //       setMonsterStats(res.data)
  //       arr = res.data
  //   })
  //   .catch(err => console.log(err))
  //   console.log(arr)
  //   return arr
  // }

  const die = ()  => {
    props.history.push('/death')
  }
  // console.log("music", dungeonMusic[musicNumber])s
  // console.log('PROPS', props)
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
        />
        {
          isFight ? 
          <CombatView 
            monsterType={monsterType.toLowerCase()}
            toggleFight = {setIsFight}
            // getStats={stats}
            isFightFn={setIsFight}
            setGridFn = {setGrid}
            clearMonster = {clearMonster}
            monsterCoor = {monsterCoor}
          /> : null
        }
        <div className="coin-icon" ref={e => {coinFade = e}}></div>
        <Footer 
          newMoney={newMoney}
          setEquipmentToggle={equipmentToggleFn}
          setInventoryToggle={inventoryToggleFn}
          equipmentToggle={equipmentToggle}
          inventoryToggle={inventoryToggle}
          experience={experience}
          level={level}
          health={health}
        />
        {/* <Inventory 
          equipmentToggle={equipmentToggle}
          inventoryToggle={inventoryToggle}
          newMoney={newMoney}
        /> */}
      </div>
    </div>
  );
}
const mapStateToProps = reduxState => reduxState.hero
export default withRouter(connect(mapStateToProps, {updateInventory}, )(Game));
