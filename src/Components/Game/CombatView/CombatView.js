import React, {useState, useEffect} from 'react';
import './CombatView.scss';
import {monsterImages, heroImages} from './imageVariables';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import {weapon} from './combatFns';
import CombatStats from '../../CombatStats/CombatStats';
import axios from 'axios';
import {attackType, weaponAttack, monAttack, charAttack} from './combatFns'

const CombatView = (props) => {
    const {monsterType, monsterStats, characterStats} = props,
        [weapon, setWeapon] = useState(0),
        [characterHealth, setCharacterHealth] = useState(0),
        [monsterHealth, setMonsterHealth] = useState(0),
        [buttonArr, setButtonArr] = useState([]),
        [weaponMove, setWeaponMove] = useState('')

    useEffect(()=> {
        props.getStats()
        getWeapon()
    }, [])
    
    const getWeapon = async() => {
        await axios.get(`/api/equipped-items/${'weapon'}`)
        .then(res => {
            setWeapon(res.data.name)
            setButtonArr(attackType(res.data.name))
            console.log(monsterStats.health)
            setMonsterHealth(monsterStats.health)
        })
        .catch(err => console.log(err))
    }

    
    const battle = () => {
        do{

        } while (characterHealth > 0 || monsterHealth > 0)
    }
    console.log(monsterHealth)
    // console.log(characterStats)
    // console.log(monsterStats.health)

    let monsterStyle = {
        backgroundImage: `${monsterImages[monsterType]}`
    }

    let heroStyle = {
        backgroundImage: `${heroImages.warrior}`
    }

    const buttons = buttonArr.map((e, i) => {
        return (<div 
            key={i} 
            className='ability-buttons'
            onClick = {() => setWeaponMove(e)}
            >{e}</div>)
    })

    return (
        <>
            <div className="combat-view-container">
                <div className="combat-monster" style={monsterStyle} >{monsterType}</div>
                <div className="combat-hero" style={heroStyle} >HERO</div>
                <div className="combat-dialogue">{buttons}</div>
                <div className="combat-monster-info">Combat log</div>
            </div>
            <CombatStats monsterStats={monsterStats} characterStats={characterStats} />
        </>
    )
}

export default CombatView;