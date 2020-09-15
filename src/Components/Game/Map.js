import React, {useState, useEffect} from 'react';
import Tile from './Tile';

const Map = (props) => {
    const [charView, setCharView] = useState([])
    const [displayView, setDisplayView] = useState([])
    const [monsterInfoToggle, setMonsterInfoToggle] = useState(false)

    const {charX, charY, heightWidth, viewRowCols, grid, getMonsterFn, exploreTileFn, isFight, setNewLava, direction, heroGuy, keyToggle} = props

    const charContainerStyle = { // Styling for character grid.
        display: "grid",
        gridTemplateColumns: `repeat(${viewRowCols}, 1fr)`,
        gridTemplateRows: `repeat(${viewRowCols}, 1fr)`,
        height: heightWidth,
        width: heightWidth,
        borderRadius: "50%",
        overflow: "hidden",
    };

    const charMiniContainerStyle = { // Styling for mini-map.
        border: "3px dotted black",
        textAlign: "center",
        borderRadius: "50%",
        height: "250px",
        width: "250px",
        position: "absolute",
        top: "30px",
        right: "30px",
        display: "grid",
        gridTemplateColumns: `repeat(${viewRowCols}, 1fr)`,
        gridTemplateRows: `repeat(${viewRowCols}, 1fr)`,
        backgroundPosition: "center",
        overflow: "hidden",
        boxShadow: "0px 0px 1px 1px black"
    };

    useEffect(() => { // Iterates over seed map with a for loop and slices segments of each array to create a 9x9 grid which centers on (charX, charY). Re-renders each time charX or charY is changed (with arrow keys).  Updates state with the new 9x9 character view grid. 
        const makeBlock = () => {
            let x1 = charX - 4
            let x2 = charX + 4
            let y1 = charY - 4
            let y2 = charY + 4
            let display = []
            for(let i = y1; i <= y2; i++){
                display.push(grid[i].slice(x1, x2+1))
            }
            setCharView(display)
        }
        makeBlock()
    }, [charX, charY])

    useEffect(() => { // Iterates over 9x9 character view grid on state and renders a Tile component for each index.
        let mappedCharView = charView.map((e,i) => e.map((f,j) => {
            return <Tile tileType={f.tileType} mist={f.mist} pushable={f.pushable} hidden={f.hidden} itemObject={f.itemObject} key={j} setNewLava={setNewLava} charX={charX} charY={charY} gridX={j} gridY={i} heightWidth={heightWidth} elevation={f.elevation} viewRowCols={viewRowCols} y={charY+((4-i)*-1)} x={charX+((4-j)*-1)} getMonsterFn={getMonsterFn} grid={grid} exploreTileFn={exploreTileFn} isFight={isFight} direction={direction} heroGuy={heroGuy} monsterType={f.monsterType} monsterInfoToggle={monsterInfoToggle} setMonsterInfoToggle={setMonsterInfoToggle} keyToggle={keyToggle} />
        }))

        setDisplayView(mappedCharView)

    }, [charView])

    

    return (
        <div className={`map-grid`} style={isFight ? charMiniContainerStyle : charContainerStyle}>
            {displayView}

        </div>
    )
}

export default Map;