import React, { useState, createContext, useEffect } from 'react';
import {tutorial} from '../Components/Game/Map Variables/tutorial';

export const GameContext = createContext(null);

export const GameProvider = ({ children }) => {
    const {mapArray, mapX, mapY} = tutorial;
    const [heightWidth, setHeightWidth] = useState(650), // Used to determine the size of the character grid in pixels.
            [grid, setGrid] = useState(mapArray), // Current map.
            [charX, setCharX] = useState(mapX),
            [charY, setCharY] = useState(mapY), // CharX and CharY set the index from which the character view takes the seed map and creates a 9x9 grid with the character in the middle. These indexes change with arrow keys or WASD key presses.
            [viewRowCols, setViewRowCols] = useState(9), // Number of rows and columns in character grid.
            [isFight, setIsFight] = useState(false), // Toggle for combat view.
            [inventoryToggle, setInventoryToggle] = useState(false), // Toggles inventory tab.
            [equipmentToggle, setEquipmentToggle] = useState(false), // Toggles equipment tab.
            [newMoney, setNewMoney] = useState(0), // Stores value of money accumulated and displays in the inventory tab.
            [keyToggle, setKeyToggle] = useState(false),
            [monsterType, setMonsterType] = useState(''), // Stores type of monster to pass to relevant components when combat is triggered.
            [monsterCoor, setMonsterCoor] = useState([0,0]), // Stores coordinates of the monster to allow for movement after combat view toggles back to normal view.
            [characterHealth, setCharacterHealth] = useState(0),
            [experience, setExperience] = useState(0),
            [level, setLevel] = useState(1),
            [XPforLevel, setXPforLevel] = useState(), // How much experience is needed to level up.
            [quicksandCounter, setQuicksandCounter] = useState(0), // Tallies consecutive movement on quicksand tiles.  More than three in a row triggers death.
            
            [direction, setDirection] = useState('up') // Determines the direction character sprite is facing for animation purposes.


    // const exploreTile = (x, y) => { // Reveals tiles on the minimap.
    //     let exploreGrid = [...grid]
    //     let newObject = {...exploreGrid[y][x], explored: true}
    //     exploreGrid[y][x] = newObject
    //     setGrid(exploreGrid)
    // }
        
    return (
        <GameContext.Provider
            value={{
                grid,
                heightWidth,
                charX,
                charY,
                viewRowCols,
                isFight,
                inventoryToggle,
                equipmentToggle,
                newMoney,
                keyToggle,
                monsterType,
                monsterCoor,
                characterHealth,
                experience,
                level,
                XPforLevel,
                quicksandCounter,
                direction,
                
                setGrid,
                setCharX,
                setCharY,
                setIsFight,
                setInventoryToggle,
                setEquipmentToggle,
                setNewMoney,
                setKeyToggle,
                setMonsterType,
                setMonsterCoor,
                setCharacterHealth,
                setExperience,
                setLevel,
                setXPforLevel,
                setQuicksandCounter,
                setDirection,
                // exploreTile
            }}
        >
            {children}
        </GameContext.Provider>
    )
}