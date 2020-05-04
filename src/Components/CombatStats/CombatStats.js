import React, { useState, useEffect } from 'react';
import './CombatStats.scss'
import axios from 'axios';


const CombatStats = props => {
   const [health, setHealth] = useState(0);
   const [attack, setAttack] = useState(0);
   const [armor, setArmor] = useState(0);
   const [MAttack, setMAttack] = useState(0);
   const [MHealth, setMHealth] = useState(0);
   const [MArmor, setMArmor] = useState(0);


   useEffect(() => {
      axios.get(`/api/monster-stats/${1}`)
      .then(res => {
         setMArmor(res.data.armor);
         setMAttack(res.data.damage);
         setMHealth(res.data.health);
      })
      .catch(err => console.log(err))
   })

   return (
      <div className='stat-container'>
         <div className='char-stats'>
            <div className='title'>Your Stats</div>
            <div className='stat-labels'>
               <div>
                  <p>Attack: {attack}</p>
                  <p>Armor: {armor}</p>
                  <p>Health: {health} </p>
               </div>
            </div>
         </div>
         <div className='monster-stats'>
            <div className='title'>Monster Stats</div>
            <div  className='stat-labels'>
               <div>
                  <p>Attack: {MAttack}</p>
                  <p>Armor: {MArmor}</p>
                  <p>Health: {MHealth} </p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default CombatStats;