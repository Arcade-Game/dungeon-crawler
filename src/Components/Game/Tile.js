import React, {useState, useEffect} from 'react';
import {monsterImages, heroImages} from '../Game/CombatView/imageVariables';
import Chest from '../Animations/Chest';
import {withRouter} from 'react-router-dom';


const Tile = (props) => {
    const {charX, charY, viewRowCols, type, viewHeightWidth, grid, getMonsterFn, x, y, exploreTileFn, tileClassName, isFight} = props

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
                {
                type === "chest" ? 
                        <Chest /> 
                    : type === "exit" ? <h2>{"EXIT"}</h2> : null
                }
            </div>
    )
}

export default withRouter(Tile);