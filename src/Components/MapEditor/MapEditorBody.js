import React, { useState, useEffect } from 'react';
import MeTile from './MeTile';

const MapEditorBody = ({currentMap, pxSize, height, width, setHeight, setWidth}) => {
    console.log("currentMap", currentMap)
    

    useEffect(() => {
        setHeight(currentMap.length)
        setWidth(currentMap[0].length)
    }, [currentMap])

    console.log("size", height, width)

    const gridStyle = {
        gridTemplateColumns: `repeat(${width}, ${pxSize}px)`,
        gridTemplateRows: `repeat(${height}, ${pxSize}px)`,
    }

    const myMap = currentMap.map((e,i) => e.map((f,j) => {
        return <MeTile {...{i, j}}/>
    }))

    return (
        <div className="map-editor-body-container" style={gridStyle}>
            {myMap}
        </div>
    )
}

export default MapEditorBody;