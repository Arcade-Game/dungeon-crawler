import React, {useState, useEffect} from 'react';
// import Character from './CharView';
import Tile from './Tile';
import { GiHidden } from 'react-icons/gi';

const Map = (props) => {
    const [charView, setCharView] = useState([])
    const [displayView, setDisplayView] = useState([])

    const {charX, charY, heightWidth, viewRowCols, grid, getMonsterFn, exploreTileFn, isFight} = props

    const charContainerStyle = {
        display: "grid",
        gridTemplateColumns: `repeat(${viewRowCols}, 1fr)`,
        gridTemplateRows: `repeat(${viewRowCols}, 1fr)`,
        height: heightWidth,
        width: heightWidth,
        borderRadius: "50%",
        overflow: "hidden",
    };

    const charMiniContainerStyle = {
        border: "1px dotted black",
        textAlign: "center",
        borderRadius: "50%",
        height: "250px",
        width: "250px",
        position: "absolute",
        top: "40px",
        right: "12%",
        display: "grid",
        gridTemplateColumns: `repeat(${viewRowCols}, 1fr)`,
        gridTemplateRows: `repeat(${viewRowCols}, 1fr)`,
        backgroundPosition: "center",
        overflow: "hidden",
    };

    useEffect(() => {
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

    useEffect(() => {
        let mappedCharView = charView.map((e,i) => e.map((f,j) => {
            return <Tile type={f.type} key={j} charX={charX} charY={charY} heightWidth={heightWidth} viewRowCols={viewRowCols} y={charY+((4-i)*-1)} x={charX+((4-j)*-1)} getMonsterFn={getMonsterFn} grid={grid} exploreTileFn={exploreTileFn} isFight={isFight} />
        }))

        setDisplayView(mappedCharView)

    }, [charView])

    

    return (
        <div>
        <div className={`map-grid`} style={isFight ? charMiniContainerStyle : charContainerStyle}>
            {displayView}

            </div>
        </div>
    )
}

export default Map;