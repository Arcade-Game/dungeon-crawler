import React, {useState, useEffect} from 'react';
import {monsterImages, heroImages} from '../Game/CombatView/imageVariables';
import Chest from '../Animations/Chest';
import {withRouter} from 'react-router-dom';
import Lava from '../Animations/Lava/Lava';
import Quicksand from '../Animations/Quicksand/Quicksand';



const Tile = (props) => {
    const {charX, charY, viewRowCols, type, viewHeightWidth, grid, getMonsterFn, x, y, exploreTileFn, tileClassName, isFight, gridX, gridY, setNewLava} = props

    // const [monType, setMonType] = useState('')
    useEffect(() => {

    }, [isFight])

    let tileStyle = null
    let cName = "char-view"
    exploreTileFn(x, y)

    switch(type){
        case "wall":
            tileStyle = {background: "black"}
            break;
        case "chest":
            cName = "char-view-chest"
            break;
        case "exit":
            tileStyle = {background: "red", color: "white"}
            break;
        case "pushable":
            cName = "char-view-pushable"
            break;
        case "water":
            cName ="char-view-water"
            break;
        case "push-bridge":
            cName = "char-view-push-bridge"
            break;
        case "quicksand":
            cName = "char-view-quicksand"
            break;
        case "lava":
            cName = "char-view-lava"
            break;
        case "push-bridge-lava2":
            cName = "char-view-push-lava2"
            setNewLava(x,y)
            break;
        case "push-bridge-lava1":
            cName = "char-view-push-lava1"
            setNewLava(x,y)
            break;
        case "push-bridge-lava-bridge":
            cName = "char-view-push-lava-bridge"
            setNewLava(x,y)
            break;

    }

    let newMonster =''
    if(grid[y][x].monsterType){
        newMonster = grid[y][x].monsterType
        cName = `char-view-${grid[y][x].monsterType.toLowerCase()}`
    }
        
    return (
            <div className={cName} style={tileStyle}>
                {
                !isFight ? (<div className="monster-data-hidden">
                    <div className="monster-picture-hidden"></div>
                    <h3>{newMonster}</h3>
                    <div className="monster-stats-hidden"></div>
                </div>) : null
                }
                {gridX === 4 && gridY === 4 ? <div className="hero-div"></div> : null} 
                {
                    type === "chest" ? <Chest /> 
                    : type === 'quicksand' ? <Quicksand />
                    : type === "exit" ? <h2>{"EXIT"}</h2> 
                    : type === 'lava' ? <Lava /> 
                    : type === "push-bridge" 
                    || type === "push-bridge-lava-bridge" 
                    || type === "push-bridge-lava1" 
                    || type === "push-bridge-lava2" ? <div className="push-bridge"></div> 
                    : null
                }
            </div>
    )
}

export default withRouter(Tile);