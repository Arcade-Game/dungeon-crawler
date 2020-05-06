import React, {useState, useEffect} from 'react';
import './CombatView.scss';
import {monsterImages, heroImages} from './imageVariables';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import axios from 'axios';
import CombatStats from '../../CombatStats/CombatStats';

const CombatView = (props) => {
    const {monsterType} = props,
    [monsterStats, setMonsterStats] = useState({}),
    [characterStats, setCharacterStats] = useState({})

    useEffect(()=> {
        axios.get(`/api/monster-stats/${monsterType}`)
      .then(res => {
         setMonsterStats(res.data)
      })
      .catch(err => console.log(err))

      axios.get(`/api/character-stats/${'rogue'}`)
      .then(res => {
         setCharacterStats(res.data)
      })
      .catch(err => console.log(err))
    }, [])

    let monsterStyle = {
        backgroundImage: `${monsterImages[monsterType]}`
    }

    let heroStyle = {
        backgroundImage: `${heroImages.warrior}`
    }
console.log(monsterType)
    return (
        <>
            <div className="combat-view-container">
                <div className="combat-monster" style={monsterStyle} >MONSTER PIC</div>
                <div className="combat-hero" style={heroStyle} >HERO</div>
                <div className="combat-dialogue">ABILITIES/DIALOGUE TOGGLE (10s TURN DELAY)</div>
                <div className="combat-monster-info">{monsterType}</div>
            </div>
            <CombatStats monsterStats={monsterStats} characterStats={characterStats} />
        </>
    )
}

export default CombatView;