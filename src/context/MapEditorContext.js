import React, { useState, createContext, useEffect } from 'react';

export const MapEditorContext = createContext(null);

export const MapEditorProvider = ({ children }) => {
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [currentTile, setCurrentTile] = useState(null);
    const [currentMap, setCurrentMap] = useState((() => {
        return [...Array(15)].map((e,i) => [...Array(25)].map((f,j) => {
            return {tileType: "empty"}
        }))
    }));
    const [startingTile, setStartingTile] = useState([null, null])
    

    useEffect(() => {
        setStartingTile(() => {
            return [currentMap.length-1, Math.floor(currentMap[currentMap.length-1].length/2)]
        })
    }, [])

    console.log("start", startingTile)
    return (
        <MapEditorContext.Provider
            value={{
                isMouseDown, setIsMouseDown,
                currentTile, setCurrentTile,
                currentMap, setCurrentMap,
                startingTile, setStartingTile,
                
            }}
        >
            {children}
        </MapEditorContext.Provider>
    )
}