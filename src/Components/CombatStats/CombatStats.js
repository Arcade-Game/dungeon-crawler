import React, { useState, useEffect } from 'react';
import './CombatStats.scss'
import {connect} from 'react-redux';


const CombatStats = props => {
   const [health, setHealth] = useState(0);
   const [attack, setAttack] = useState(0);
   const [armor, setArmor] = useState(0);
   const [agility, setAgility] = useState(0);
   const [strength, setStrength] = useState(0);
   const [mAttack, setMAttack] = useState(0);
   const [mHealth, setMHealth] = useState(0);
   const [mArmor, setMArmor] = useState(0);
   const [mAgility, setMAgility] = useState(0);
   const [mStrength, setMStrength] = useState(0);
   const {stats, monsterHealth, monsterStats, characterHealth} = props;

   useEffect(()=> {
      if(monsterStats && stats){
         const {attack, armor, agility, strength} = stats;
         setAttack(+attack)
         setArmor(+armor)
         setHealth(+characterHealth)
         setAgility(+agility)
         setStrength(+strength)
         setMStrength(+monsterStats.strength)
         setMHealth(+monsterHealth)
         setMAgility(+monsterStats.agility)
         setMAttack(+monsterStats.attack)
         setMArmor(+monsterStats.armor)
      }
   }, [stats, monsterHealth, characterHealth, monsterStats])

   return (
      <div className='stat-container'>
         <div className='char-stats'>
            <div className='title'>Your Stats</div>
            <div className='stat-labels'>
               <div>
                  <p>Health: {health} </p>
                  <p>Attack: {attack}</p>
                  <p>Armor: {armor}</p>
                  <p>Agility: {agility} </p>
                  <p>Strength: {strength} </p>
               </div>
            </div>
         </div>
         <div className='monster-stats'>
            <div className='title'>{props.monsterType.charAt(0).toUpperCase() + props.monsterType.slice(1)} Stats</div>
            <div  className='stat-labels'>
               <div>
                  <p>Health: {mHealth} </p>
                  <p>Attack: {mAttack}</p>
                  <p>Armor: {mArmor}</p>
                  <p>Agility: {mAgility}</p>
                  <p>Strength: {mStrength}</p>
               </div>
            </div>
         </div>
      </div>
   )
}

const mapStateToProps = reduxState => reduxState.hero

export default connect(mapStateToProps)(CombatStats);