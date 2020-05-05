import React, {useState, useEffect} from 'react';
// import Character from './CharView';
import Tile from './Tile';

const Map = (props) => {
    const [charView, setCharView] = useState([])
    const [displayView, setDisplayView] = useState([])

    const {charX, charY, heightWidth, viewRowCols, grid, getMonsterFn, exploreTileFn} = props

    const charContainerStyle = {
        display: "grid",
        gridTemplateColumns: `repeat(${viewRowCols}, 1fr)`,
        gridTemplateRows: `repeat(${viewRowCols}, 1fr)`,
        height: heightWidth,
        width: heightWidth,
        borderRadius: "50%",
        overflow: "hidden",
        boxShadow: "0 0 30px 6px rgb(199, 77, 6)",
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
            return <Tile type={f.type} key={j} charX={charX} charY={charY} heightWidth={heightWidth} viewRowCols={viewRowCols} y={charY+((4-i)*-1)} x={charX+((4-j)*-1)} getMonsterFn={getMonsterFn} grid={grid} exploreTileFn={exploreTileFn} />
        }))

        setDisplayView(mappedCharView)

    }, [charView])

    

    return (
        <div>
        <div className="map-grid" style={charContainerStyle}>
            {displayView}

            </div>
        </div>
    )
}

export default Map;