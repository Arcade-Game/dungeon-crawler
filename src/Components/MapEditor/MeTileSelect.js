import React, {useContext} from 'react';
import {MapEditorContext} from '../../context/MapEditorContext';
import {GiMonsterGrasp} from 'react-icons/gi';
import {RiEyeCloseLine} from 'react-icons/ri';
import {BsEyeFill} from 'react-icons/bs';
import {TiDeleteOutline} from 'react-icons/ti';



const MeTileSelect = ({e}) => {
    const {setCurrentTile} = useContext(MapEditorContext);

    return (
        <div className="me-tile-select-container">
            <div className={e.title} onClick={() => setCurrentTile(e)}>
                {e.title === "monster" && <GiMonsterGrasp   color={"black"} />}
                {e.title === "monster" && <span>{e.modifier.level}</span>}
                {e.title === "hidden" && <RiEyeCloseLine color={"white"} />}
                {e.title === "hidden-door" && <BsEyeFill color={"white"} />}
                {e.title === "mist" && <div className="mist-div"></div> }
                {e.title === "clear" && <TiDeleteOutline color={"white"} />}
                </div>
        </div>
    )
}

export default MeTileSelect;