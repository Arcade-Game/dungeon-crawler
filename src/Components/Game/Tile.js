import React, {useState, useEffect} from 'react';


const Tile = (props) => {
    // console.log("type", props.type)
    const {charX, charY, viewRowCols, type, viewHeightWidth, grid} = props
    let tileStyle = null
    let cName = "char-view"

        switch(type){
            case "wall":
                tileStyle = {background: "black"}
                break;
            case "chest":
                cName = "char-view-chest"
                break;
        }

    
    return (
            <div className={cName} style={tileStyle}>

            </div>
    )
}

export default Tile;