import React from 'react';

const MapSelector = ({setMapSelectorToggle}) => {
    return (
        <div className="map-selector-container">
            <div className="map-selector">
                <div className="map-selector-tutorial"><span>Tutorial</span></div>
                <div className="map-selector-cave"><span>Cave</span></div>
                <div className="map-selector-forest"><span>Forest</span></div>
                <div className="map-selector-lake"><span>Lake</span></div>
                <div className="exit-map-selector" onClick={() => setMapSelectorToggle(false)}>X</div>
            </div>
         </div>
    )
}

export default MapSelector;