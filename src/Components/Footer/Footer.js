import React, { useState, useEffect } from 'react';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import './Footer.scss';

const Footer = props => {
   const [health, setHealth] = useState(0);
   const [heartArr, setHeartArr] = useState([0, 0, 0, 0, 0]);
   const [totalHealth, setTotalHealth] = useState(5)

   useEffect(() => {
      setTotalHealth(5)
      let arr = []
      for (let i = 0; i < totalHealth; i++) {
         arr.push(0)
      }
      setHeartArr(arr)
   }, [health])
   

   for (let i = 0; i < health; i++) {
      heartArr.splice(i, 1, 1)
   }
   let hearts = heartArr.map((e, i) => (e === 0) ? <AiFillHeart key={i} color={'red'} size={'40px'} /> :   <AiOutlineHeart key={i} color={'red'} size={'40px'}/> )
   return (
      <div className="footer">
         {/* <button onClick={() => (health < totalHealth) ? setHealth(health + 1) :null} >-</button>
         <button onClick={() => (health === 0) ? null: setHealth(health - 1)} >+</button> */}
         <div className ="character-menu-container">
            <div className="character-icon" onClick={() => props.setEquipmentToggle()}> EQU

            </div>
            <div className="inventory-icon" onClick={() => props.setInventoryToggle()}> INV

            </div>
         </div>
         <div className="menu-button">MENU</div>
         <div className="health-bar">
            {hearts}
         </div>
      </div>
   )
}

export default Footer;
//AiFillHeart
//AiOutlineHeart