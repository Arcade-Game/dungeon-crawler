import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MeTileSelect from './MeTileSelect';

const TileEditor = () => {
    const [tiles, setTiles] = useState([])

    useEffect(() => {
        console.log("useEffect")
        axios.get("/api/tiles").then(res => {
            setTiles(res.data)
            console.log("tile data", res.data)
        })
    }, [])

    const mappedTiles = tiles.map((e,i) => {
        return <MeTileSelect {...{e}} />
    })

    console.log("tiles", tiles)

    return (
        <div className="tile-editor-container">
            {mappedTiles}
        </div>
    )
}

export default TileEditor;