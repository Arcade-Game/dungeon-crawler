import React, { useState, createContext, useEffect } from 'react';

export const MapEditorContext = createContext(null);

export const MapEditorProvider = ({ children }) => {
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [currentTile, setCurrentTile] = useState(null);
    const [currentMap, setCurrentMap] = useState([[{}]]);

    useEffect(() => {
        setCurrentMap(() => {
            return [...Array(15)].map((e,i) => [...Array(25)].map((f,j) => {
                return {tileType: "empty"}
            }))
        })
    }, [])

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