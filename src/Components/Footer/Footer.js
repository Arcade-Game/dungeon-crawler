import React, { useState, useEffect, useRef } from 'react';
import {connect} from "react-redux";
import './Footer.scss';
import {withRouter} from 'react-router-dom';
import Inventory from '../Game/Character/Inventory/Inventory';
// import {BsArrowLeft} from 'react-icons/bs';

const Footer = props => {
   const {inventory, stats, hero, equipmentToggle, inventoryToggle, newMoney, experience, level, characterHealth} = props
   const [heartArr, setHeartArr] = useState([0, 0, 0, 0, 0]);
   const [totalHealth, setTotalHealth] = useState(5)
   const [statsToggle, setStatsToggle] = useState(false)
   const [menuToggle, setMenuToggle] = useState(false)


   const handleMenuClick = () => {
      setMenuToggle(!menuToggle)
   }

   const equArr = Object.values(props.equipment)
   const heroArmor = (+stats.armor) + (+equArr.reduce((acc, el) => {
      return acc += ((el.armor) ? el.armor : 0)}, 0));

   const heroAttack = (+stats.attack) + (+equArr.reduce((acc, el) => {
         return acc += ((el.attack) ? el.attack : 0)}, 0));



   return (
      <>
      <div className="footer-top" onClick={handleMenuClick}>
         <h1>V</h1>
      </div>
         {
         menuToggle === true ? <div className="game-menu">
               <div className="menu-title"><span>indermere</span></div>
               <button className="return-to-town" onClick={() => props.history.push('/town')}>Return to Town</button>
               <button className="return" onClick={() => window.location.reload(false)}>Restart Dungeon</button>
               <button className="return">Settings</button>
               <button className="return">Quests</button>
               <button className="return">Key</button>
               <div className="menu-x-button" onClick={handleMenuClick}><span>X</span></div>   </div> : null
         }
      <div className="footer-left">
         
         <Inventory 
            equipmentToggle={equipmentToggle}
            inventoryToggle={inventoryToggle}
            newMoney={newMoney}
         />
         <div className="inventory-icon-container">
            <div className="inventory-icon" onClick={() => props.setInventoryToggle()}> 
            </div>
         </div>
         <div className ="character-icon-container">
            <div className="character-icon" onClick={() => props.setEquipmentToggle()}>
            </div>
         </div>
      </div>
      <div className="footer-right">
         <div className="experience-bar">
            {`XP: ${experience}`}
         </div>
            <div className="health-bar" onClick={() => setStatsToggle(!statsToggle)}>
         {characterHealth}
            
            
         </div>
         {
               statsToggle === true ?
               <section className="stats-container">
                  <div className="stats-container-for-styling">
                     <div><span>{hero.hero_name}</span></div>
                        <div className="stats-container-stats">
                           <div><span>Health:</span>{characterHealth}</div>
                           <div><span>Armor:</span>{heroArmor}</div>
                           <div><span>Strength:</span>{stats.strength}</div>
                           <div><span>Agility:</span>{stats.agility}</div>
                           <div><span>Damage:</span>{heroAttack} - {heroAttack + stats.strength}</div>
                        </div>
                  </div>
                  <div className="stats-level"><span>{level}</span></div>
               </section> : null
            }
      </div>
      </>
   )
}

const MapStateToProps = reduxState => reduxState.hero
export default withRouter(connect(MapStateToProps)(Footer));
//AiFillHeart
//AiOutlineHeart