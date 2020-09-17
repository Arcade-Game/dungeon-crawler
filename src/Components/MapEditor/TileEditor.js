import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MeTileSelect from './MeTileSelect';
import {elevationVariables, terrainVariables, objectVariables} from './mapEditorTileObjects';

const TileEditor = () => {
    const [elevationTiles, setElevationTiles] = useState(elevationVariables)
    const [terrainTiles, setTerrainTiles] = useState(terrainVariables)
    const [objectTiles, setObjectTiles] = useState(objectVariables)

    // useEffect(() => {
    //     console.log("useEffect")
    //     axios.get("/api/tiles").then(res => {
    //         setTiles(res.data)
    //         console.log("tile data", res.data)
    //     })
    // }, [])

    useEffect(() => {
        console.log("tiles", elevationTiles, terrainTiles, objectTiles)
    }, [])

    const mappedElevationTiles = elevationTiles.map((e,i) => {
        return <MeTileSelect {...{e}} key={i} />
    })

    const mappedTerrainTiles = terrainTiles.map((e,i) => {
        return <MeTileSelect {...{e}} key={i} />
    })

    const mappedObjectTiles = objectTiles.map((e,i) => {
        return <MeTileSelect {...{e}} key={i} />
    })

    return (
        <>
            <h3>Elevations</h3>
        <div className="tile-editor-container">
            {mappedElevationTiles}
        </div>
            <h3>Terrain</h3>
        <div className="tile-editor-container">
            {mappedTerrainTiles}
        </div>
            <h3>Objects</h3>
        <div className="tile-editor-container">
            {mappedObjectTiles}
        </div>
        </>
    )
}

export default TileEditor;