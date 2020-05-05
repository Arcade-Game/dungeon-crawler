import React, {useState, useEffect} from 'react';


const Tile = (props) => {
    // console.log("type", props.type)
    const {charX, charY, viewRowCols, type, viewHeightWidth, grid, getMonsterFn, x, y, exploreTileFn, tileClassName} = props
    let tileStyle = null
    let cName = "char-view"
    // console.log("monsterType", grid[charY][charX])
    // console.log("xy", x, y)
    exploreTileFn(x, y)

        switch(type){
            case "wall":
                tileStyle = {background: "black"}
                break;
            case "chest":
                cName = "char-view-chest"
                break;
            case "monster":
                let monster = getMonsterFn(x, y)
        }
    
        if(grid[y][x].monsterType){
            // console.log("TYPE", grid[y][x])
            cName = `char-view-${grid[y][x].monsterType.toLowerCase()}`
        }
        

        // console.log("c.name", cName)
    
    return (
            <div className={cName} style={tileStyle}>

            </div>
    )
}

export default Tile;