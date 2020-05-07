import React, {useState, useEffect} from 'react';
import './CombatView.scss';
import {monsterImages, heroImages} from './imageVariables';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import {weapon} from './combatFns';
import CombatStats from '../../CombatStats/CombatStats';
import axios from 'axios';
import {attackType, monAttack, charAttack, statSetupChar, statSetupMon} from './combatFns'

const CombatView = (props) => {
    const {monsterType, isFightFn, clearMonster, monsterCoor} = props,
        [weapon, setWeapon] = useState(0),
        [characterHealth, setCharacterHealth] = useState(0),
        [monsterHealth, setMonsterHealth] = useState(0),
        [buttonArr, setButtonArr] = useState([]),
        [stats, setStats] = useState([]),
        [classType, setClassType] = useState('Rogue'),
        [log, setLog] = useState([]),
        [endFight, setEndFight] = useState(false)

    useEffect(()=> {
        setStats(props.getStats())
        getWeapon()
    }, [])

    useEffect(() => {
        if(stats[0] && stats[1]){
            setCharacterHealth(stats[0].health)
            setMonsterHealth(stats[1].health)

            // battle()
        }
    }, [stats[0], stats[1]])
    
    const getWeapon = async() => {
        await axios.get(`/api/equipped-items/${'weapon'}`)
        .then(res => {
            setWeapon(res.data.name)
            setButtonArr(attackType(res.data.name))
        })
        .catch(err => console.log(err))
    }

    
    
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
            onClick = {() => {
                battle(e)
            }}
            >{e}</div>)
    })
    
    const battle = (weaponMove) => {
        let arr = []
        let charHealth = characterHealth
        let monHealth = monsterHealth
        let monster = stats[1]
        let character = stats[0]
        statSetupChar(character)
        statSetupMon(monster)
        let cDamage =charAttack(classType, weapon, weaponMove);
        arr.push(`You did ${cDamage} damage to the ${monsterType}!`)
        monHealth -= cDamage 
        setMonsterHealth(monHealth)
        
        let mDamage = monAttack(classType);
        arr.push(`${monsterType.charAt(0).toUpperCase() + monsterType.slice(1)} did ${mDamage} damage to you!`)
        charHealth -= mDamage
        setCharacterHealth(charHealth)
        if (charHealth <= 0 || monHealth <= 0) {
            if (charHealth <= 0) {
                arr.push(`You have Died!`)
            }
            if(monHealth <= 0) {
                arr.push(`You have killed ${monsterType.charAt(0).toUpperCase() + monsterType.slice(1)}!`)
            }
            setEndFight(true)
            clearMonster(monsterCoor[0], monsterCoor[1])


        }
        setLog([...log, ...arr])
    }

    const combatLog  = log.map((e, i) => <p key={i}>{e}</p>)

    return (
        <>
            <div className="combat-view-container">
                <div className="exit-combat-view" onClick={() => isFightFn(false)}>X</div>
                <div className="combat-monster" style={monsterStyle} >{monsterType}</div>
                <div className="combat-hero" style={heroStyle} >HERO</div>
                <div className="combat-dialogue">{
                    (endFight)?
                    <div 
                    className = 'ability-buttons'
                    onClick={() => {
                    setEndFight(false)
                    isFightFn(false)
                    }}>End Combat</div>
                    :
                    buttons}</div>
                <div className="combat-log">Combat Log <br/> {combatLog}</div>
            </div>
            <CombatStats 
                stats={stats} 
                monsterHealth = {monsterHealth} 
                characterHealth={characterHealth}/>
        </>
    )
}

export default CombatView;