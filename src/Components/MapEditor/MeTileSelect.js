import React from 'react';

const MeTileSelect = ({e}) => {

    return (
        <div className="me-tile-select-container">
            {
                e.pushable === true && <div className="rock"></div>
            }
            {
                e.tileType === "chest" && <div className="me-chest"></div>
            }
        </div>
    )
}

export default MeTileSelect;