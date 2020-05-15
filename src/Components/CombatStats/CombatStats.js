import React, { useState, useEffect } from 'react';
import './CombatStats.scss'


const CombatStats = props => {
   // const [health, setHealth] = useState(0);
   // const [attack, setAttack] = useState(0);
   // const [armor, setArmor] = useState(0);
   // const [agility, setAgility] = useState(0);
   // const [strength, setStrength] = useState(0);
   const [mAttack, setMAttack] = useState(0);
   const [mHealth, setMHealth] = useState(0);
   const [mArmor, setMArmor] = useState(0);
   const [mAgility, setMAgility] = useState(0);
   const [mStrength, setMStrength] = useState(0);
   const {stats, monsterHealth, monsterStats, characterHealth} = props;

   useEffect(()=> {
      if(monsterStats && stats){
         // const {attack, armor, agility, strength} = stats;
         // setAttack(+attack)
         // setArmor(+armor)
         // setHealth(+characterHealth)
         // setAgility(+agility)
         // setStrength(+strength)
         setMStrength(+monsterStats.strength)
         setMHealth(+monsterHealth)
         setMAgility(+monsterStats.agility)
         setMAttack(+monsterStats.attack)
         setMArmor(+monsterStats.armor)
      }
   }, [stats, monsterHealth, characterHealth, monsterStats])

   return (
      <div className='stat-container'>
         <div className='monster-stats'>
            <div className='title'>{props.monsterType.charAt(0).toUpperCase() + props.monsterType.slice(1)} </div>
            <div  className='stat-labels'>
               <div>
                  <p>Health:  </p> <span className='stat1'>{mHealth}</span>
                  <p>Attack: </p> <span className='stat2'>{mAttack}</span>
                  <p>Armor: </p> <span className='stat3'>{mArmor}</span>
                  <p>Agility: </p> <span className='stat4'>{mAgility}</span>
                  <p>Strength: </p> <span className='stat5'>{mStrength}</span>
               </div>
            </div>
         </div>
      </div>
   )
}


export default CombatStats;