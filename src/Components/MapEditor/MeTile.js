import React, {useContext} from 'react';
import {MapEditorContext} from '../../context/MapEditorContext';
import {GiMonsterGrasp} from 'react-icons/gi';
import {RiEyeCloseLine} from 'react-icons/ri';
import {BsEyeFill} from 'react-icons/bs';



const MeTile = ( {f, i, j} ) => {
    const {isMouseDown, currentTile, currentMap, setCurrentMap, startingTile, setStartingTile} = useContext(MapEditorContext);

    // console.log("f", f)

    const handleTileClick = () => {
        if (currentTile.title === "start") {
            setStartingTile([i,j])
        } else {
            let tileMap = [...currentMap]
            tileMap[i][j] = {...tileMap[i][j], ...currentTile.modifier}
            setCurrentMap(tileMap)
        }
    }

    const handleStart = () => {
    }

    // console.log("currentMap", currentMap)
    return (
        <div className="me-tile-container" onClick={currentTile ? handleTileClick : null} onMouseOver={isMouseDown ? handleTileClick : null}>
            <div className={f.elevation === 10 ? 'wall' : f.elevation === 3 ? 'cliff' : f.elevation === 1 ? `platform` : 'ground'}> 
                {(i === startingTile[0] && j === startingTile[1]) && <div className="start"></div>}
                {
                    f.tileType === "push-bridge-lava-bridge" 
                    || f.tileType === "push-bridge-lava1" 
                    || f.tileType === "push-bridge-lava2" ? <div className="lava"><div className="lava-rock-bridge"></div></div> : f.tileType === "push-bridge" ? <div className="water"><div className={f.tileType}></div></div> : f.tileType === "lava" ? <div className="lava" /> : f.tileType === "quicksand" ? <div className="quicksand"></div> : f.tileType !== 'empty' && <div className={f.tileType}></div>
                }
                  {
                      f.objType && (f.objType === 'chest' ? <div className="chest" /> : f.objType === 'monster' ?<div className={'monster'}>
                          <GiMonsterGrasp   color={"firebrick"} />
                          <span>{f.level}</span>
                      </div> : <div className={f.objType}></div>)
                  }
                {f.hidden ? <div className="hidden"><RiEyeCloseLine color={"white"} /></div> : null}
                {f.objType === "hidden-door" ? <div className="hidden"><BsEyeFill color={"white"} /></div> : null}
                {f.mist ? <div className="mist-div"></div> : null}
                {f.itemObject === 'broken-teleporter' ? <div className="char-view-broken-teleporter"></div> : null}
            </div>
        </div>
    )
}

export default MeTile;