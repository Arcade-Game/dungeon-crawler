import React, { useState, useEffect, useContext } from 'react';
import MeTile from './MeTile';
import {MapEditorContext} from '../../context/MapEditorContext';

const MapEditorBody = ({pxSize, height, width, setHeight, setWidth}) => {
    const {currentMap} = useContext(MapEditorContext);
    

    useEffect(() => {
        setHeight(currentMap.length)
        setWidth(currentMap[0].length)
    }, [currentMap])

    console.log("size", height, width)
    console.log("mapEditor currentMap", currentMap)

    const gridStyle = {
        gridTemplateColumns: `repeat(${width}, ${pxSize}px)`,
        gridTemplateRows: `repeat(${height}, ${pxSize}px)`,
    }

    const mapEditorMap = currentMap.map((e,i) => e.map((f,j) => {
        return <MeTile key={j} {...{f, i, j}}/>
    }))

    return (
        <div className="map-editor-body-container" style={gridStyle}>
            {mapEditorMap}
        </div>
    )
}

export default MapEditorBody;