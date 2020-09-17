import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import MapEditorBody from './MapEditorBody';
import TileEditor from './TileEditor';
import CreateTile from './CreateTile';
import './MapEditor.scss';
import './MapEditorTileSelect.scss';
import {MapEditorProvider} from '../../context/MapEditorContext';
import {MapEditorContext} from '../../context/MapEditorContext';

const MapEditor = () => {

    
    const [pxSize, setPxSize] = useState(30)
    const [heightInput, setHeightInput]= useState(0)
    const [widthInput, setWidthInput]= useState(0)
    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)
    const [saveToggle, setSaveToggle] = useState(false)
    const [title, setTitle] = useState('')
    const [newTileInput, setNewTileInput] = useState('')

    const {isMouseDown, currentTile, currentMap, setCurrentMap} = useContext(MapEditorContext)

    const handleGetMapsDev = () => {
        console.log("ding")
        axios.get("/api/maps").then(res => console.log("res.data", res.data))
    }

    const handleSaveNew = () => {
        axios.post("/api/map/create", {map: currentMap, title}).then(res => console.log("save data", res.data))
        setSaveToggle(false)
        setTitle('')
    }

    const handleCancel = () => {
        setSaveToggle(false)
        setTitle('')
    }

    const handlePxInput = (e) => {
        setPxSize(e)
    }

    const handleGenerate = () => {
        console.log("input1", heightInput, widthInput)
        const newMap = [...Array(+heightInput)].map((e,i) => [...Array(+widthInput)].map((f,j) => {
            return {
                tileType: "empty",
                elevation: 0
            }
        }))
        setCurrentMap(newMap)
    }

    const handleCreateTile = () => {
        axios.post('/api/tile/create', {newTileInput})
    }


        // console.log("input2", heightInput, widthInput)
        // console.log("tileInput", newTileInput)
        // console.log("context check", isMouseDown)
        console.log("currentTile", currentTile)

    return (
        // <MapEditorProvider>
           <div className="map-editor-container">
            <div className="map-editor-header">

            </div>
            <div className="map-editor-body">
                <div className="map-editor-left">
                    <TileEditor />
                    <div className="current-tile-selected">
                        {currentTile && <div className={currentTile.title}></div>}
                    </div>
                    <CreateTile />
                </div>
                <div className="map-editor-middle">
                    <MapEditorBody {...{currentMap, pxSize, height, width, setHeight, setWidth}}/>
                </div>
                <div className="map-editor-right">
                    <button className="get-maps-dev" onClick={handleGetMapsDev}>GET MAPS</button>
                    <div className="generate-container">
                        <input placeholder="Height" className="me-gen-columns" onChange={(e) => setHeightInput(e.target.value)}></input>
                        <input placeholder="Width" className="me-gen-rows" onChange={(e) => setWidthInput(e.target.value)}></input>
                        <button className="me-generate" onClick={handleGenerate}>GENERATE</button>
                    </div>

                </div>
                
            </div>
            <div className="map-editor-footer">
                <div className="me-footer-one">
                    <input className="me-px-size" type="range" min="2" max="250" placeholder={pxSize} onChange={(e) => handlePxInput(e.target.value)}></input>
                </div>
                <div className="me-footer-two">
                    <button className="me-play">PLAY</button>
                </div>
                <div className="me-footer-three">
                    
                    {
                       saveToggle ? <input className="save-input" placeholder="Title" onChange={(e) => setTitle(e.target.value)}></input> : <button className="me-update">UPDATE</button>
                    }
                    {
                        saveToggle ? <div className="save-button-container">
                            <button onClick={handleSaveNew}>SAVE</button>
                            <button onClick={handleCancel}>CANCEL</button>
                            </div> : <button className="me-save" onClick={() => setSaveToggle(true)}>SAVE</button>
                    }
                </div>
            </div>
        </div> 
        // </MapEditorProvider>
         
    )
     
}

export default MapEditor;