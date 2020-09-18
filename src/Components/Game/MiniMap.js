import React, {useContext} from 'react';
import './MiniMap.scss';
import {GameContext} from '../../context/GameContext';

const MiniMap = ({mmX, mmY}) => {

    const {grid, charX, charY, isFight} = useContext(GameContext);

    let mappedGrid = grid.map((e,i,a) => i > 4 && i < a.length-5 ? e.map((f,j,z) => { // Iterates over map grid and renders a mini-map div in the mini-map grid for each tile, which is specific to the tile type.
        return j > 4 && j < z.length-5 ? (
            f.explored === true ? 
                <div key={j} className={
                    i === charY && j === charX ? 'mini-map-char' : 
                    `mini-map-${f.hidden ? 'wall' : f.mist ? 'mist' : f.objType === 'monster' ? f.objType : f.objType === 'chest' ? f.objType : f.elevation === 3 ? 'cliff' : f.elevation === 1 ? 'platform' : f.elevation === 10 ? 'wall' : f.tileType}`}>{f.objType === 'pushable' ? <div className="mini-map-pushable" /> : null}</div> : <div className="mini-map-unexplored"></div>
        ) : null
    }) : null)

    let miniStyle = { // Minimap grid basic styling.
        gridTemplateColumns: `repeat(${mmX-10}, 1fr)`,
        gridTemplateRows: `repeat(${mmY-10}, 1fr)`,
        overflow: "hidden"
    }

    console.log("mini map grid", grid)
    return (
        <>
        <div className="mini-map-leather">
            <div className="mini-map-container" style={miniStyle}>
                {mappedGrid}
                {/* <Map /> */}
            </div>
            
            
        </div>
        </>
    )
}

export default MiniMap;