import React, {useContext} from 'react';
import {MapEditorContext} from '../../context/MapEditorContext';

const MeTile = ( {f, i, j} ) => {
    const {isMouseDown, currentTile, currentMap, setCurrentMap} = useContext(MapEditorContext);

    // console.log("f", f)

    const handleTileClick = () => {
        console.log("ding")
        let newMap = [...currentMap]
        newMap[i][j] = {...newMap[i][j], ...currentTile.modifier}
        setCurrentMap(newMap)
    }

    return (
        <div className="me-tile-container" onClick={handleTileClick} onMouseOver={isMouseDown ? handleTileClick : null}>
            <div className={f.elevation === 10 ? 'wall' : f.elevation === 3 ? 'cliff' : f.elevation === 1 ? `platform` : 'ground'}> 
                {
                    f.tileType === "push-bridge-lava-bridge" 
                    || f.tileType === "push-bridge-lava1" 
                    || f.tileType === "push-bridge-lava2" ? <div className="lava"><div className="lava-rock-bridge"></div></div> : f.tileType === "push-bridge" ? <div className="water"><div className={f.tileType}></div></div> : f.tileType === "lava" ? <div className="lava" /> : f.tileType === "quicksand" ? <div className="quicksand"></div> : f.tileType !== 'empty' && <div className={f.tileType}></div>
                }
                  {
                      f.objType && (f.objType === 'chest' ? <div className="chest" /> : <div className={f.objType === 'monster' ? 'monster' : f.objType}></div>)
                  }
                {f.hidden ? <div className="hidden">HIDDEN</div> : null}
                {f.mist ? <div className="mist-div"></div> : null}
                {f.itemObject === 'broken-teleporter' ? <div className="char-view-broken-teleporter"></div> : null}
            </div>
        </div>
    )
}

export default MeTile;