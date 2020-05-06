import React, {useState, useEffect} from 'react';
import {monsterImages, heroImages} from '../Game/CombatView/imageVariables';


const Tile = (props) => {
    const {charX, charY, viewRowCols, type, viewHeightWidth, grid, getMonsterFn, x, y, exploreTileFn, tileClassName, isFight} = props

    // const [monType, setMonType] = useState('')

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
            </div>
    )
}

export default Tile;