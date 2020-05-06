import React, {useState, useEffect} from 'react';
import './CombatView.scss';
import {monsterImages, heroImages} from './imageVariables';

const CombatView = (props) => {
    const {monsterType, isFightFn} = props

    let monsterStyle = {
        backgroundImage: `${monsterImages[monsterType]}`
    }

    let heroStyle = {
        backgroundImage: `${heroImages.warrior}`
    }

    return (
        <div className="combat-view-container">
            <div className="exit-combat-view" onClick={() => isFightFn(false)}>X</div>
            <div className="combat-monster" style={monsterStyle} >MONSTER PIC</div>
            <div className="combat-hero" style={heroStyle} >HERO</div>
            <div className="combat-dialogue">ABILITIES/DIALOGUE TOGGLE (10s TURN DELAY)</div>
            <div className="combat-monster-info">{monsterType}</div>
        </div>
    )
}

export default CombatView;