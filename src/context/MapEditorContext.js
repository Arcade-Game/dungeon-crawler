import React, { useState, createContext, useEffect } from 'react';

export const MapEditorContext = createContext(null);

export const MapEditorProvider = ({ children }) => {
    const [isMouseDown, setIsMouseDown] = useState(false);

    return (
        <MapEditorContext.Provider
            value={{
                isMouseDown,
                setIsMouseDown,
            }}
        >
            {children}
        </MapEditorContext.Provider>
    )
}