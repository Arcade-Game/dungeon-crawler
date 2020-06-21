import React from 'react';

const MiniMap = (props) => {

    const {grid, mmX, mmY, charX, charY} = props

    let mappedGrid = grid.map((e,i,a) => i > 4 && i < a.length-5 ? e.map((f,j, z) => { // Iterates over map grid and renders a mini-map div in the mini-map grid for each tile, which is specific to the tile type.
        return j > 4 && j < z.length-5 ? (
        f.explored === true ? <div className={i === charY && j === charX ? 'mini-map-char' : `mini-map-${f.hidden ? 'wall' : f.mist ? 'mist' : f.type === 'monster' ? f.type : f.type === 'chest' ? f.type : f.elevation === 3 && f.type !== 'cliff' || f.elevation === 2 && f.type !== 'platform' ? f.type-f.elevation : f.type}`}>{f.pushable === true ? <div className="mini-map-pushable" /> : null}</div> : <div className="mini-map-unexplored"></div>
        ) : null
    }) : null)

    let miniStyle = { // Minimap grid basic styling.
        gridTemplateColumns: `repeat(${mmX-10}, 1fr)`,
        gridTemplateRows: `repeat(${mmY-10}, 1fr)`,
        overflow: "hidden"
    }
    return (
        <>
        <div className="mini-map-leather"></div>
        <div className="mini-map-container" style={miniStyle}>
            {mappedGrid}
            {/* <Map /> */}

        </div>
        </>
    )
}

export default MiniMap;