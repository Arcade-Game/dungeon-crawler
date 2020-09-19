import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import MapEditorBody from './MapEditorBody';
import TileEditor from './TileEditor';
import CreateTile from './CreateTile';
import './MapEditor.scss';
import './MapEditorTileSelect.scss';
import {MapEditorContext} from '../../context/MapEditorContext';
import {GameContext} from '../../context/GameContext';
import {useHistory} from 'react-router-dom';
import {GiMonsterGrasp} from 'react-icons/gi';
import {TiDeleteOutline} from 'react-icons/ti';
import {RiEyeCloseLine} from 'react-icons/ri';
import {BsEyeFill} from 'react-icons/bs';

const MapEditor = () => {
    const {push} = useHistory()
    
    const [pxSize, setPxSize] = useState(45)
    const [heightInput, setHeightInput]= useState(0)
    const [widthInput, setWidthInput]= useState(0)
    const [height, setHeight] = useState(0)
    const [width, setWidth] = useState(0)
    const [saveToggle, setSaveToggle] = useState(false)
    const [title, setTitle] = useState('')
    const [newTileInput, setNewTileInput] = useState('')

    const {isMouseDown, setIsMouseDown, currentTile, currentMap, setCurrentMap, startingTile, setStartingTile} = useContext(MapEditorContext);
    const {setMyMap, setGrid, setCharX, setCharY, allMaps, setAllMaps} = useContext(GameContext);

    // const handleGetMapsDev = () => {
    //     // console.log("ding")
    //     axios.get("/api/maps").then(res => {
    //         setAllMaps(res.data)
    //     })
    // }

    const handleSaveNew = () => {
        // console.log("ding")
        axios.post("/api/map/create", {map: currentMap, title, startingTile}).then(res => console.log("save data", res.data)).catch(err => console.log(err))
        setSaveToggle(false)
        setTitle('')
    }

    const handleUpdateClick = () => {
        axios.put("/api/map/edit", {map: currentMap, startingTile}).then(res => console.log("updated", res.data)).catch(err => console.log(err))
    }

    const handleCancel = () => {
        setSaveToggle(false)
        setTitle('')
    }

    const handlePxInput = (e) => {
        setPxSize(e)
    }

    const handleGenerate = () => {
        // console.log("input1", heightInput, widthInput)
        const newMap = [...Array(+heightInput)].map((e,i) => [...Array(+widthInput)].map((f,j) => {
            return {
                tileType: "empty",
                elevation: 0
            }
        }))
        setStartingTile([newMap.length-1, Math.floor(newMap[newMap.length-1].length/2)])
        setCurrentMap(newMap)
        setTitle('')
    }

    const handleMapOptionClick = (map) => {
        setCurrentMap(map.map)
        setStartingTile(map.start)
        setTitle(map.title)
    }

    const handlePlayClick = () => {
        // console.log("currentMap", currentMap)
        setMyMap({title: "test", start: startingTile, map: currentMap.slice()})
        // setGrid(currentMap.slice())
        setCharX(startingTile[1])
        setCharY(startingTile[0])
        setTimeout(() => {
            push('/game')
        }, 500);
    }

    const handleCreateTile = () => {
        axios.post('/api/tile/create', {newTileInput})
    }


        // console.log("input2", heightInput, widthInput)
        // console.log("tileInput", newTileInput)
        // console.log("context check", isMouseDown)
        // console.log("currentTile", currentTile)
        // console.log("allMaps", allMaps)
        // console.log("title", title)

    return (
        // <MapEditorProvider>
           <div className="map-editor-container">
            <div className="map-editor-header">

            </div>
            <div className="map-editor-body" onMouseDown={() => setIsMouseDown(true)} onMouseUp={() => setIsMouseDown(false)}>
                <div className="map-editor-left">
                    <TileEditor />
                    <div className="current-tile-selected">
                        {currentTile && <div className={currentTile.title}>
                            {currentTile.title === "monster" && <GiMonsterGrasp   color={"firebrick"} />}
                            {currentTile.title === "monster" && <span>{currentTile.modifier.level}</span>}
                            {currentTile.title === "hidden" && <RiEyeCloseLine color={"white"} />}
                            {currentTile.title === "hidden-door" && <BsEyeFill color={"white"} />}
                            {currentTile.title === "clear" && <TiDeleteOutline color={"white"} />}
                            {currentTile.title === "mist" && <div className="mist-div"></div>}

                            </div>}
                    </div>
                    <CreateTile />
                </div>
                <div className="map-editor-middle">
                    <MapEditorBody {...{currentMap, pxSize, height, width, setHeight, setWidth}}/>
                </div>
                <div className="map-editor-right">
                    {/* <button className="get-maps-dev" onClick={handleGetMapsDev}>GET MAPS</button> */}
                    <div className="all-maps-selector">
                        {
                            allMaps && allMaps.map((e,i) => {
                            return <div key={i} className="all-maps-option" onClick={() => handleMapOptionClick(e)}><span>{e.title}</span></div>
                            })
                        }
                    </div>
                    <div className="generate-container">
                        <input placeholder="Height" className="me-gen-columns" onChange={(e) => setHeightInput(e.target.value)}></input>
                        <input placeholder="Width" className="me-gen-rows" onChange={(e) => setWidthInput(e.target.value)}></input>
                        <button className="me-generate" onClick={handleGenerate}>GENERATE</button>
                    </div>

                </div>
                
            </div>
            <div className="map-editor-footer">
                <div className="me-footer-one">
                    <input className="me-px-size" type="range" min="15" max="175" placeholder={pxSize} onChange={(e) => handlePxInput(e.target.value)}></input>
                </div>
                <div className="me-footer-two">
                    <button className="me-play" onClick={handlePlayClick}>PLAY</button>
                </div>
                <div className="me-footer-three">
                    
                    {
                       saveToggle ? <input className="save-input" placeholder="Title" onChange={(e) => setTitle(e.target.value)}></input> : <button className="me-update" onClick={handleUpdateClick}>UPDATE</button>
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