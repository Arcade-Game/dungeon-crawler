import React, {useEffect} from 'react';
import Chest from '../Animations/Chest';
import {withRouter} from 'react-router-dom';
import Lava from '../Animations/Lava/Lava';
import Quicksand from '../Animations/Quicksand/Quicksand';
import Lookout from './Lookout/Lookout';
import './hero.scss';

const Tile = (props) => {
    const {tileType, grid, x, y, exploreTileFn, isFight, gridX, gridY, setNewLava, mist, hidden, pushable, itemObject, elevation, direction, heroGuy, monsterInfoToggle, setMonsterInfoToggle, keyToggle} = props;

    useEffect(() => { // Re-renders when combat view is toggled.

    }, [isFight])

    let animate = ['0%', '12.5%', '25%', '37.5%', '50%', '62.5%', '75%', '87.5%', '100%'] // Used to randomize the sprite position for character sprite animation.
    let tileStyle = null // Variable for conditional tile styling.
    let cName = "char-view" // Variable for conditional classNames.
    let mName = '' // Variable for conditional monster names.
    exploreTileFn(x, y) // Calls explore tile, which reveals tiles on the minimap when they are rendered on the character grid.

    switch(tileType){ // Determines how to render each tile in the character view.  Changes cName, which is the variable used as the conditional className.  Most of the this could be easily done with simple template strings without the extra steps if there had been stricter naming conventions from the beginning.
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
    if(grid[y][x].monsterType){ // Sets className for monsters.
        newMonster = grid[y][x].monsterType
        mName = `char-view-${grid[y][x].monsterType.toLowerCase()}`
    }


    const getMonType = (x,y) => { // Will be used for retrieving monster info for an on hover or on click div that displays monster info.
        return grid[y][x]
    }

    return (
            <>
                {/* {
                    monsterInfoToggle ? (<div className="monster-data-hidden">
                        <div className="monster-picture-hidden"></div>
                        <h3>{newMonster}</h3>
                        <div className="monster-stats-hidden"></div>
                    </div>) : null
                    } */}
            <div className={elevation === 3 && tileType !== 'cliff' ? `${cName}-cliff` : elevation === 2 && tileType !== 'platform' ? `${cName}-platform` : cName} onClick={grid[y][x].monsterType ? (() => setMonsterInfoToggle(!monsterInfoToggle)) : null} style={tileStyle}>
            <div className="hover-info">{tileType !== 'monster' && keyToggle ? (tileType.charAt(0).toUpperCase() + tileType.slice(1)) : null}</div>
                
                
                {gridX === 4 && gridY === 4 ? <div className={`${heroGuy.gender}-${heroGuy.class_name.toLowerCase()}-${direction}`} style={{backgroundPositionX: `${animate[Math.floor(Math.random() * animate.length)]}`}}></div> : null}  
                  
                {
                    tileType === 'locked-door' ? <div className="char-view-locked-door" style={{color: "white"}}><div className="hover-info">{tileType !== 'monster' && keyToggle ? (tileType.charAt(0).toUpperCase() + tileType.slice(1)) : null}</div></div>
                    : tileType === 'cliff' ? <div className="char-view-cliff"><div className="hover-info">{tileType !== 'monster' && keyToggle ? (tileType.charAt(0).toUpperCase() + tileType.slice(1)) : null}</div></div> 
                    : tileType === 'platform' ? <div className="char-view-platform"><div className="hover-info">{tileType !== 'monster' && keyToggle ? (tileType.charAt(0).toUpperCase() + tileType.slice(1)) : null}</div></div>
                    : tileType === 'monster' ? <div className={`${mName}`} ></div>  
                    : tileType === "chest" ? <Chest /> 
                    : tileType === 'quicksand' ? <Quicksand />
                    : tileType === "exit" ? <div className="char-view-exit"><div className="hover-info">{tileType !== 'monster' && keyToggle ? (tileType.charAt(0).toUpperCase() + tileType.slice(1)) : null}</div></div>
                    : tileType === 'lava' ? <Lava /> 
                    : tileType === 'lookout' ? <Lookout />
                    : tileType === "push-bridge" 
                    || tileType === "push-bridge-lava-bridge" 
                    || tileType === "push-bridge-lava1" 
                    || tileType === "push-bridge-lava2" ? <div className="push-bridge"></div> 
                    : null
                }
                {pushable ? <div className="char-view-pushable" style={{color: "white"}}><div className="hover-info">{tileType !== 'monster' && keyToggle ? "Boulder (pushable)" : null}</div></div> : null}
                {itemObject === 'door-key' ? <div className="char-view-door-key"></div> : null}
                {hidden ? <div className="hidden">HIDDEN</div> : null}
                {mist ? <div className="mist-div"></div> : null}
                {itemObject === 'broken-teleporter' ? <div className="char-view-broken-teleporter"></div> : null}
            </div>
            </>
    )
}

export default withRouter(Tile);