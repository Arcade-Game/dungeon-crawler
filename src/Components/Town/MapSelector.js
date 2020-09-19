import React, {useContext} from 'react';
import {GameContext} from '../../context/GameContext';


const MapSelector = ({setMapSelectorToggle}) => {
    const {allMaps, setMyMap, setGrid, setCharX, setCharY} = useContext(GameContext);

    const handleChooseMap = (e) => {
        console.log("e", e)
        setCharX(e.start[1])
        setCharY(e.start[0])
        setGrid(e.map)
        setMyMap(e)
    }

    return (
        <div className="map-selector-container">
            <div className="map-selector">
                <div className="map-selector-tutorial"><span>Tutorial</span></div>
                <div className="map-selector-cave"><span>Cave</span></div>
                <div className="map-selector-forest"><span>Forest</span></div>
                <div className="map-selector-lake"><span>Lake</span></div>
                <div className="exit-map-selector" onClick={() => setMapSelectorToggle(false)}>X</div>
            {allMaps.map((e,i) => <div key={i} className="map-select" onClick={() => handleChooseMap(e)}>{e.title}</div>)}
            </div>
         </div>
    )
}

export default MapSelector;