import React, {useState, useEffect} from 'react';
import './Game.scss';
import './monsters.scss';
import Map from './Map';
import {mapObjects} from './mapObjects';
import Footer from '../Footer/Footer';
import axios from 'axios';
import Inventory from './Inventory/Inventory';
import Equipment from "./Inventory/Equipment";

const Game = (props) => {

  const [grid, setGrid] = useState(mapObjects),
    [charX, setCharX] = useState(16),
    [charY, setCharY] = useState(22),
    [heightWidth, setHeightWidth] = useState(700),
    [viewRowCols, setViewRowCols] = useState(9),
    [inventoryToggle, setInventoryToggle] = useState(false),
    [equipmentToggle, setEquipmentToggle] = useState(false)

  const checkWall = (x, y) => {
    return grid[y][x].type === 'wall' ? true : false
  }

  const checkTile = (x, y) => {
    switch(grid[y][x].type){
      case "chest":
        let newGrid = [...grid]
        newGrid[y][x] = {type: "empty"}
        setGrid(newGrid)
        openChest()
        break;
    }
  }

  const openChest = () => {
    axios.get(`/api/item`).then(res => console.log("res.data", res.data))
  }

  const getMonster = (x, y) => {
    if(grid[y][x].monsterType){
      return grid[y][x].monsterType
    }
    axios.get(`/api/monster`).then(res => {
      let newGrid = [...grid]
      newGrid[y][x] = {type: "monster", monsterType: res.data.name}
      // console.log("GETMONSTER", x, y, res.data.name)
      setGrid(newGrid)
    })
  }
  
  const getKeyCode = (keyCode) => {
    if(keyCode === 37){
      return checkWall(charX-1, charY) === false ? (setCharX(charX-1), checkTile(charX-1, charY)) : null
    } else if(keyCode === 38){
      return checkWall(charX, charY-1) === false ? (setCharY(charY-1), checkTile(charX, charY-1)) : null
    } else if(keyCode === 39){
      return checkWall(charX+1, charY) === false ? (setCharX(charX+1), checkTile(charX+1, charY)) : null
    } else if(keyCode === 40){
      return checkWall(charX, charY+1) === false ? (setCharY(charY+1), checkTile(charX, charY+1)) :  null
    }
  }

  const move = ({keyCode}) => {
    getKeyCode(keyCode)
  }
  
  const inventoryToggleFn = () => {
    setInventoryToggle(!inventoryToggle)
  }

  const equipmentToggleFn = () => {
    setEquipmentToggle(!equipmentToggle)
  }

    // console.log(charX, charY)
    // console.log("monster type", grid[charY][charX])
    return (
      <div className="wrapper" role="button" tabIndex="0" onKeyDown={e => move(e)}>
        <div className="Game">
          <Map charX={charX} charY={charY} heightWidth={heightWidth} viewRowCols={viewRowCols} grid={grid} getMonsterFn={getMonster} />
        <Footer setEquipmentToggle = {equipmentToggleFn}
                      setInventoryToggle = {inventoryToggleFn}
                            />
        <Inventory equipmentToggle = {equipmentToggle}
                            inventoryToggle = {inventoryToggle}
                            />
        </div>
      </div>
    );
}

export default Game;
