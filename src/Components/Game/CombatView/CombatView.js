import React, {useState, useEffect} from 'react';
import './CombatView.scss';
import {monsterImages, heroImages} from './imageVariables';
import { AiOutlineConsoleSql } from 'react-icons/ai';
import CombatStats from '../../CombatStats/CombatStats';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
import {attackType, monAttack, charAttack, statSetupChar, statSetupMon} from './combatFns'


const CombatView = (props) => {
    const {monsterType, isFightFn, clearMonster, monsterCoor} = props,
        [weapon, setWeapon] = useState(''),
        [monsterHealth, setMonsterHealth] = useState(0),
        [buttonArr, setButtonArr] = useState([]),
        [stats, setStats] = useState({}),
        [classType, setClassType] = useState(''),
        [log, setLog] = useState([]),
        [heroAt, setHeroAt] = useState(),
        [heroA, setHeroA] = useState(),
        [endFight, setEndFight] = useState(false)

    useEffect(()=> {
        getStats()
        if(props.equipment[0].item_name){
            setButtonArr(attackType(props.equipment[0].item_name))
            setWeapon(props.equipment[0].item_name)
        }
        if(props.equipment[1].item_name) {
            setButtonArr(attackType(props.equipment[1].item_name))
            setWeapon(props.equipment[1].item_name)
        }
        setButtonArr(attackType(props.equipment[0].item_name))
        setClassType(props.hero.class_name)
    }, [])

    useEffect(() => {
        if(stats) {
            setMonsterHealth(stats.health)
            setClassType(props.hero.class_name)
        }  

    }, [stats.health])
    

    useEffect (() => {
        console.log(heroA)
        console.log(props)
        setHeroA ((+props.heroStats.armor) + (+props.equipment.reduce((acc, el) => {
           return acc += ((el.armor) ? el.armor : 0)}, 0)));
        setHeroAt ((+props.heroStats.attack) + (+props.equipment.reduce((acc, el) => {
           return acc += ((el.attack) ? el.attack : 0)}, 0)));
        },[props])
  
  

    const getStats = async()=> {
        await axios.get(`/api/monster-stats/${monsterType}`)
        .then(res => {
        setStats(res.data)
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
            >{e.charAt(0).toUpperCase() + e.slice(1)}</div>)
    })
    
    const battle = async(weaponMove) => {
        let arr = []
        let charHealth = 0
        let monHealth = 0
        let mDamage 
        let cDamage 
        if(charHealth !== props.characterHealth) {
            charHealth = props.characterHealth
            monHealth = monsterHealth
        }
        let monster = stats
        let character = props.heroStats
        if(+props.heroStats.attack !== +heroAt){
            character.attack = +heroAt
            character.armor = +heroA
        }
        await statSetupChar(character)
        await statSetupMon(monster)
        if (character.agility > monster.agility) {
            cDamage = charAttack(classType, weapon, weaponMove);
            if(cDamage === 0) {
                arr.push(
                    {
                        id: 'c',
                        message: `You missed the ${monsterType.charAt(0).toUpperCase() + monsterType.slice(1)}.`
                    })
            } else {
                arr.push({
                    id: 'c',
                    message: `You did ${cDamage} damage to the ${monsterType.charAt(0).toUpperCase() + monsterType.slice(1)}.`
                })
            }
            monHealth -= cDamage 
            if(monHealth < 0) {
                setMonsterHealth(0)
            } else {
                setMonsterHealth(monHealth)
            }

            mDamage = monAttack(classType);

            if(mDamage === 0) {
                arr.push({
                    id: 'c',
                    message: `You dodged ${monsterType.charAt(0).toUpperCase() + monsterType.slice(1)} attack.`
                })
            } else {
                arr.push({
                    id: 'm',
                    message: `${monsterType.charAt(0).toUpperCase() + monsterType.slice(1)} did ${mDamage} damage to you.`
                })
            }
            charHealth -= mDamage
            if(charHealth < 0) {
                props.setCharacterHealthFn(0)
            } else {
                props.setCharacterHealthFn(charHealth)
            }
            if (charHealth <= 0 || monHealth <= 0) {
                if (charHealth <= 0) {
                    arr.push({
                        id: 'm',
                        message: `You have Died!`
                    })
                   return setTimeout(() => {props.history.push('/death')}, 1500)
                }
                if(monHealth <= 0) {
                    return arr.push({
                        id: 'c',
                        message: `You have killed ${monsterType.charAt(0).toUpperCase() + monsterType.slice(1)}!`
                    })
                }
                setEndFight(true)
                clearMonster(monsterCoor[0], monsterCoor[1])
            }
            props.setCharacterHealthFn(charHealth)
        } else {
            mDamage = monAttack(classType);
            if(mDamage === 0) {
                arr.push({
                    id: 'c',
                    message: `You dodged ${monsterType.charAt(0).toUpperCase() + monsterType.slice(1)} attack.`
                })
            } else {
                arr.push({
                    id: 'm',
                    message: `${monsterType.charAt(0).toUpperCase() + monsterType.slice(1)} did ${mDamage} damage to you.`
                })
            }
            charHealth -= mDamage
            if(charHealth < 0) {
                props.setCharacterHealthFn(0)
            } else {
                props.setCharacterHealthFn(charHealth)
            }
            if (charHealth <= 0 || monHealth <= 0) {
                if (charHealth <= 0) {
                    arr.push({
                        id: 'm',
                        message: `You have Died!`
                    })
                    return setTimeout(() => {props.history.push('/death')}, 2000)
                }
                if(monHealth <= 0) {
                    return arr.push({
                        id: 'c',
                        message: `You have killed ${monsterType.charAt(0).toUpperCase() + monsterType.slice(1)}!`
                    })
                }
                setEndFight(true)
                clearMonster(monsterCoor[0], monsterCoor[1])
            }
            props.setCharacterHealthFn(charHealth)

            let cDamage = charAttack(classType, weapon, weaponMove);
            if(cDamage === 0) {
                arr.push(
                    {
                        id: 'c',
                        message: `You missed the ${monsterType.charAt(0).toUpperCase() + monsterType.slice(1)}.`
                    })
            } else {
                arr.push({
                    id: 'c',
                    message: `You did ${cDamage} damage to the ${monsterType.charAt(0).toUpperCase() + monsterType.slice(1)}.`
                })
            }
            monHealth -= cDamage 
            if(monHealth < 0) {
                setMonsterHealth(0)
            } else {
                setMonsterHealth(monHealth)
            }
        }
        
        if (charHealth <= 0 || monHealth <= 0) {
            if (charHealth <= 0) {
                arr.push({
                    id: 'm',
                    message: `You have Died!`
                })
                setTimeout(() => {props.history.push('/death')}, 2000)
            }
            if(monHealth <= 0) {
                arr.push({
                    id: 'c',
                    message: `You have killed ${monsterType.charAt(0).toUpperCase() + monsterType.slice(1)}!`
                })
            }
            setEndFight(true)
            clearMonster(monsterCoor[0], monsterCoor[1])
        }
        setLog([...log, ...arr])
    }

    const combatLog  = log.map((e, i) => (e.id === 'm') ? <p key={i} style={{color: 'red'}}>{e.message}</p> : <p key={i} style={{color: 'green'}}>{e.message}</p>)


    return (
        <>
            <div className="combat-view-container">
                <div className="combat-monster" style={monsterStyle} >{monsterType.charAt(0).toUpperCase() + monsterType.slice(1)}</div>
                <div className="combat-hero" style={heroStyle} ></div>
                <div className="combat-buttons">{
                    (endFight)?
                    <div 
                    className = 'ability-buttons'
                    onClick={() => {            
                    setEndFight(false)
                    isFightFn(false)
                    }}>End Combat</div>
                    :
                    buttons}</div>
                <div className="combat-log"><div>{combatLog}</div></div>
            </div>
            <CombatStats  
                monsterStats = {stats}
                monsterHealth = {monsterHealth} 
                characterHealth = {props.characterHealth}
                stats = {props.heroStats}
                monsterType = {monsterType}
                />
        </>
    )
}


export default withRouter(CombatView);