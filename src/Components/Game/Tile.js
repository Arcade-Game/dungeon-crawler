import React, {useState, useEffect} from 'react';
import {monsterImages, heroImages} from '../Game/CombatView/imageVariables';
import Chest from '../Animations/Chest';
import {withRouter} from 'react-router-dom';
import Lava from '../Animations/Lava/Lava';
import Quicksand from '../Animations/Quicksand/Quicksand';
import Lookout from './Lookout/Lookout';



const Tile = (props) => {
    const {charX, charY, viewRowCols, type, viewHeightWidth, grid, getMonsterFn, x, y, exploreTileFn, tileClassName, isFight, gridX, gridY, setNewLava, mist, hidden, pushable, itemObject, item} = props

    // const [monType, setMonType] = useState('')
    useEffect(() => {

    }, [isFight])

    let tileStyle = null
    let cName = "char-view"
    let mName = ''
    exploreTileFn(x, y)

    switch(type){
        case "wall":
            tileStyle = {background: "black", border: "none"}
            break;
        case "chest":
            cName = "char-view-chest"
            break;
        case "exit":
            cName = "char-view-exit-tile"
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
        case "hidden-door":
            cName = "char-view-hidden-door"
            break;
        case "uneven":
            cName ="char-view-uneven"
            break;
        case "platform":
            cName = "char-view-platform"
            break;
        case "cliff":
            cName = "char-view-cliff"
            break;
        case "teleporter-1":
            cName = "char-view-teleporter-1"
            break;
        case "gold-pile":
            cName = "char-view-gold-pile"
            break;
    }

    let newMonster =''
    if(grid[y][x].monsterType){
        newMonster = grid[y][x].monsterType
        mName = `char-view-${grid[y][x].monsterType.toLowerCase()}`
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
                    gridX === 4 && gridY === 4 ? <div className="hero-div"></div> : null}    
                {
                    type === 'monster' ? <div className={`${mName}`}></div>  
                    : type === "chest" ? <Chest /> 
                    : type === 'quicksand' ? <Quicksand />
                    : type === "exit" ? <div className="char-view-exit"></div>
                    : type === 'lava' ? <Lava /> 
                    : type === 'lookout' ? <Lookout />
                    : type === "push-bridge" 
                    || type === "push-bridge-lava-bridge" 
                    || type === "push-bridge-lava1" 
                    || type === "push-bridge-lava2" ? <div className="push-bridge"></div> 
                    : null
                }
                {pushable ? <div className="char-view-pushable"></div> : null}
                {itemObject === 'door-key' ? <div className="char-view-door-key"></div> : null}
                {hidden ? <div className="hidden">HIDDEN</div> : null}
                {mist ? <div className="mist-div"></div> : null}
                {itemObject === 'broken-teleporter' ? <div className="char-view-broken-teleporter"></div> : null}
            </div>
    )
}

export default withRouter(Tile);