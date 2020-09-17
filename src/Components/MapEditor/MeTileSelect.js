import React, {useContext} from 'react';
import {MapEditorContext} from '../../context/MapEditorContext';

const MeTileSelect = ({e}) => {
    const {setCurrentTile} = useContext(MapEditorContext);

    return (
        <div className="me-tile-select-container">
            <div className={e.title} onClick={() => setCurrentTile(e)}></div>
        </div>
    )
}

export default MeTileSelect;