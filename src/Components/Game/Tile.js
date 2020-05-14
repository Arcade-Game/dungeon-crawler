import React, {useState, useEffect} from 'react';
import {monsterImages, heroImages} from '../Game/CombatView/imageVariables';
import Chest from '../Animations/Chest';
import {withRouter} from 'react-router-dom';
import Lava from '../Animations/Lava/Lava';
import Quicksand from '../Animations/Quicksand/Quicksand';
import Lookout from './Lookout/Lookout';
import {TweenMax, SteppedEase} from 'gsap';
import './hero.scss';



const Tile = (props) => {
    const {charX, charY, viewRowCols, type, viewHeightWidth, grid, getMonsterFn, x, y, exploreTileFn, tileClassName, isFight, gridX, gridY, setNewLava, mist, hidden, pushable, itemObject, item, elevation, direction, heroGuy, monsterType, monsterInfoToggle, setMonsterInfoToggle, keyToggle} = props;

    

    // const [monType, setMonType] = useState('')
    useEffect(() => {

    }, [isFight])
    // console.log(heroGuy)

    let animate = ['0%', '12.5%', '25%', '37.5%', '50%', '62.5%', '75%', '87.5%', '100%']
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
        case "monster":
            cName = 'char-view-monster'
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
            tileStyle = {background: "black", border: "none"}
            break;
        case "cliff":
            tileStyle = {background: "black", border: "none"}
            break;
        case "teleporter-1":
            cName = "char-view-teleporter-1"
            break;
        case "gold-pile":
            cName = "char-view-gold-pile"
            break;
        case "locked-door":
            tileStyle = {background: "black", border: "none"}
            break;
    }

    let newMonster =''
    if(grid[y][x].monsterType){
        newMonster = grid[y][x].monsterType
        mName = `char-view-${grid[y][x].monsterType.toLowerCase()}`
    }


    const getMonType = (x,y) => {
        return grid[y][x]
    }

    console.log("keyToggle", keyToggle)

    return (
            <>
                {
                    monsterInfoToggle ? (<div className="monster-data-hidden">
                        <div className="monster-picture-hidden"></div>
                        <h3>{newMonster}</h3>
                        <div className="monster-stats-hidden"></div>
                    </div>) : null
                    }
            <div className={elevation === 3 && type !== 'cliff' ? `${cName}-cliff` : elevation === 2 && type !== 'platform' ? `${cName}-platform` : cName} onClick={grid[y][x].monsterType ? (() => setMonsterInfoToggle(!monsterInfoToggle)) : null} style={tileStyle}>
            <div className="hover-info">{type !== 'monster' && keyToggle ? (type.charAt(0).toUpperCase() + type.slice(1)) : null}</div>
                
                
                {gridX === 4 && gridY === 4 ? <div className={`${heroGuy.gender}-${heroGuy.class_name.toLowerCase()}-${direction}`} style={{backgroundPositionX: `${animate[Math.floor(Math.random() * animate.length)]}`}}></div> : null}  
                  
                {
                    type === 'locked-door' ? <div className="char-view-locked-door" style={{color: "white"}}><div className="hover-info">{type !== 'monster' && keyToggle ? (type.charAt(0).toUpperCase() + type.slice(1)) : null}</div></div>
                    : type === 'cliff' ? <div className="char-view-cliff"><div className="hover-info">{type !== 'monster' && keyToggle ? (type.charAt(0).toUpperCase() + type.slice(1)) : null}</div></div> 
                    : type === 'platform' ? <div className="char-view-platform"><div className="hover-info">{type !== 'monster' && keyToggle ? (type.charAt(0).toUpperCase() + type.slice(1)) : null}</div></div>
                    : type === 'monster' ? <div className={`${mName}`} ></div>  
                    : type === "chest" ? <Chest /> 
                    : type === 'quicksand' ? <Quicksand />
                    : type === "exit" ? <div className="char-view-exit"><div className="hover-info">{type !== 'monster' && keyToggle ? (type.charAt(0).toUpperCase() + type.slice(1)) : null}</div></div>
                    : type === 'lava' ? <Lava /> 
                    : type === 'lookout' ? <Lookout />
                    : type === "push-bridge" 
                    || type === "push-bridge-lava-bridge" 
                    || type === "push-bridge-lava1" 
                    || type === "push-bridge-lava2" ? <div className="push-bridge"></div> 
                    : null
                }
                {pushable ? <div className="char-view-pushable" style={{color: "white"}}><div className="hover-info">{type !== 'monster' && keyToggle ? "Boulder (pushable)" : null}</div></div> : null}
                {itemObject === 'door-key' ? <div className="char-view-door-key"></div> : null}
                {hidden ? <div className="hidden">HIDDEN</div> : null}
                {mist ? <div className="mist-div"></div> : null}
                {itemObject === 'broken-teleporter' ? <div className="char-view-broken-teleporter"></div> : null}
            </div>
            </>
    )
}

export default withRouter(Tile);