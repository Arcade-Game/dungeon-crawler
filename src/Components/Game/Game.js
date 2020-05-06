import React, {useState, useEffect} from 'react';
import './Game.scss';
import './Map.scss';
import './monsters.scss';
import Map from './Map';
import {mapObjects} from './mapObjects';
import Footer from '../Footer/Footer';
import axios from 'axios';
import Inventory from './Inventory/Inventory';
import Equipment from "./Inventory/Equipment";
import MiniMap from './MiniMap';
import CombatView from './CombatView/CombatView';
import CombatStats from '../CombatStats/CombatStats';

const Game = (props) => {

  const [grid, setGrid] = useState(mapObjects),
    [charX, setCharX] = useState(16),
    [charY, setCharY] = useState(22),
    [heightWidth, setHeightWidth] = useState(700),
    [viewRowCols, setViewRowCols] = useState(9),
    [inventoryToggle, setInventoryToggle] = useState(false),
    [equipmentToggle, setEquipmentToggle] = useState(false),
    [newMoney, setNewMoney] = useState(0),
    [isFight, setIsFight] = useState(false),
    [monsterType, setMonsterType] = useState(''),
    [monsterStats, setMonsterStats] = useState({}),
    [characterStats, setCharacterStats] = useState({})
  
  const move = ({keyCode}) => {
    return !isFight ? getKeyCode(keyCode) :  null
  }

  const stats = ()=> {
    axios.get(`/api/character-stats/${'rogue'}`)
    .then(res => {
      setCharacterStats(res.data)
    })
    .catch(err => console.log(err))
    
    
      axios.get(`/api/monster-stats/${monsterType}`)
    .then(res => {
        setMonsterStats(res.data)
    })
    .catch(err => console.log(err))
    
}

  const getKeyCode = (keyCode) => {
    if(keyCode === 37 || keyCode === 65){
      checkTile(charX-1, charY)
    } else if(keyCode === 38 || keyCode === 87){
      checkTile(charX, charY-1)
    } else if(keyCode === 39 || keyCode === 68){
      checkTile(charX+1, charY)
    } else if(keyCode === 40 || keyCode === 83){
      checkTile(charX, charY+1)
    } else if(keyCode ===  66){
      inventoryToggleFn()
    } else if(keyCode === 72){
      equipmentToggleFn()
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
          break;
        case "monster":
          fightMonster(x, y)
          break;
        case "chest":
          openChest(x, y)
          setCharX(x)
          setCharY(y)
          break;
      }
  }
    
  const fightMonster = (x, y) => {
    setMonsterType(grid[y][x].monsterType)
    setIsFight(true)
  }

  const openChest = (x, y) => {
    let newGrid = [...grid]
    newGrid[y][x] = {type: "empty"}

    setGrid(newGrid)

    axios.get(`/api/item`).then(res => console.log("res.data", res.data))
    let num = Math.floor(Math.random() * 15)
    
    setNewMoney(num)
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
      newGrid[y][x] = {type: "monster", monsterType: res.data.name}
      setGrid(newGrid)
    })
  }
  
  const inventoryToggleFn = () => {
    setInventoryToggle(!inventoryToggle)
  }

  const equipmentToggleFn = () => {
    setEquipmentToggle(!equipmentToggle)
  }

  let mapClassName = ''

  return (
    <div className="wrapper" role="button" tabIndex="0" onKeyDown={e => move(e)}>
      <div className="Game">
        <MiniMap grid={grid} mmX={grid[0].length} mmY={grid.length} isFight={isFight} />
        <Map 
          charX={charX} 
          charY={charY} 
          heightWidth={heightWidth}    
          viewRowCols={viewRowCols} 
          grid={grid} 
          getMonsterFn={getMonster}
          exploreTileFn={exploreTile}
          isFight={isFight} 
        />
        {
          isFight ? 
          <CombatView 
            monsterType={monsterType.toLowerCase()}
            toggleFight = {setIsFight}
            characterStats={characterStats}
            monsterStats={monsterStats}
            getStats={stats}
          /> : null
        }
        
        <Footer 
          setEquipmentToggle={equipmentToggleFn}
          setInventoryToggle={inventoryToggleFn}
        />
        <Inventory 
          equipmentToggle={equipmentToggle}
          inventoryToggle={inventoryToggle}
          newMoney={newMoney}
        />
      </div>
    </div>
  );
}

export default Game;
