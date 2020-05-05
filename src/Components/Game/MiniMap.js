import React, {useState, useEffect} from 'react';

const MiniMap = (props) => {
    const {grid, mmX, mmY} = props
    let mappedGrid = grid.map((e,i) => e.map((f,j) => {
        // console.log("TYPE", f.explored, f.type)
        return f.explored === true ? <div className={`mini-map-${f.type}`}></div> : <div className="mini-map-unexplored"></div>
    }))

    let miniStyle = {
        gridTemplateColumns: `repeat(${mmX}, 1fr)`,
        gridTemplateRows: `repeat(${mmY}, 1fr)`,
        overflow: "hidden"
    }
    return (
        <div className="mini-map-container" style={miniStyle}>
            {mappedGrid}
        </div>
    )
}

export default MiniMap;