import React, {useState, useEffect} from 'react';
import {monsterImages, heroImages} from '../Game/CombatView/imageVariables';
import Spritesheet from 'react-responsive-spritesheet';
import Chest from '../Animations/Chest';


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
                    //    <Spritesheet
                    //     image={require('../pictures/glowingChest.png')}
                    //     widthFrame={300}
                    //     heightFrame={200}
                        
                    //     scale={1}
                    //     steps={5}
                    //     fps={5}
                    //     loop={true}
                    //     direction={'rewind'}
                    //     isResponsive={true}
                    //     style={{display: 'flex', justifyContent: 'flex-start', border: '1px solid yellow'}}

                    //     // startAt={1}
                    //     // backgroundSize={'100%'}
                    //     // backgroundPosition={`center`}
                    //     // scale={1}
                    //     // classname={"chest-spritesheet-element"}
                    //     // style={"display: flex"}
                    //     /> 
                    : null
                }
            </div>
    )
}

export default Tile;