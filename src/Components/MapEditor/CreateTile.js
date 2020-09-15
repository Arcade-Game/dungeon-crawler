import React, { useState } from 'react';
import axios from 'axios';
import {tileVariables, treasureChests, monsters, keys, visionTiles} from '../Game/Map Variables/tileVariables';

const {o, ll, zz, wl, p, pk, w, Q, F, uT, MI, h, mi, MX, hc, Cl, Pl, PP, T, G, WL} = tileVariables;
const {x, x2, x3, x4, x5, X, X2, X3, X4, X5, X6, X7, X8, X9, XX} = treasureChests;
const {m, m2, m3, m4, m5, M, M2, M3, M4, M5, M6, M7, M8, M9, MM} = monsters;
const {hd, lt} = visionTiles;

const CreateTile = () => {
    const [tileType, setTileType] = useState(""),
        [elevation, setElevation] = useState(0),
        [mist, setMist] = useState(false),
        [pushable, setPushable] = useState(false),
        [hidden, setHidden] = useState(false),
        [level, setLevel] = useState(0),
        [end, setEnd] = useState(null)

        const allVars = [o, ll, zz, p, pk, w, Q, F, uT, MI, h, mi, MX, hc, Cl, Pl, PP, T, G, x, x2, x3, x4, x5, X, X2, X3, X4, X5, X6, X7, X8, X9, XX, m, m2, m3, m4, m5, M, M2, M3, M4, M5, M6, M7, M8, M9, MM, hd, lt]

    const handleSubmit = () => {
        // allVars.forEach((e,i) => {
        //     axios.post("/api/tile/create", e)
        // }).then(res => console.log("res.data", res.data)).catch(err => console.log(err))




        // axios.post("/api/tile/create", {
        //     tileType,
        //     elevation,
        //     mist,
        //     pushable,
        //     hidden,
        //     level,
        //     end
        // }).then(res => console.log("res.data", res)).catch(err => console.log(err))
    }

    return (
        <div className="create-tile-container">
            <input onChange={(e) => setTileType(e.target.value)} className="type-input" placeholder="Tile Type" type="text"></input>
            <input onChange={(e) => setElevation(e.target.value)} className="elevation-input" placeholder="Elevation" type="number" min="0" max="4"></input>
            <input onChange={(e) => setMist(e.target.value)} className="mist-input" placeholder="Mist" type="checkbox"></input>
            <input onChange={(e) => setPushable(e.target.value)} className="pushable-input" placeholder="" type="checkbox"></input>
            <input onChange={(e) => setHidden(e.target.value)} className="hidden-input" placeholder="" type="checkbox"></input>
            <input onChange={(e) => setLevel(e.target.value)} className="level-input" placeholder="" type="number"></input>
            <input onChange={(e) => setEnd(e.target.value)} className="end-input" placeholder="" type="text"></input>
            <button className="submit-tile" onClick={handleSubmit}>SUBMIT TILE</button>
        </div>
    )
}

export default CreateTile;