import React, { useState, createContext, useEffect } from 'react';

export const MapEditorContext = createContext(null);

export const MapEditorProvider = ({ children }) => {
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [currentTile, setCurrentTile] = useState(null);
    const [currentMap, setCurrentMap] = useState([[{type: 'empty'}]]);


    return (
        <MapEditorContext.Provider
            value={{
                isMouseDown, setIsMouseDown,
                currentTile, setCurrentTile,
                currentMap, setCurrentMap,
            }}
        >
            {children}
        </MapEditorContext.Provider>
    )
}