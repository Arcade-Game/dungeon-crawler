import React, { useState, useEffect, useRef } from 'react';
import './Footer.scss';
import {withRouter} from 'react-router-dom';
import Inventory from '../Game/Character/Inventory/Inventory';
import titlesReducer from '../../Redux/reducers/titlesReducer';
// import {BsArrowLeft} from 'react-icons/bs';

const Footer = props => {
   const {inventory, equipment, updateSessionInventory,equipmentToggle, inventoryToggle, heroStats, hero,  newMoney, experience, level, characterHealth} = props

   const {title, equipmentToggle, inventoryToggle, newMoney, level, experience} = props
   const [heartArr, setHeartArr] = useState([0, 0, 0, 0, 0]);
   const [totalHealth, setTotalHealth] = useState(heroStats.health)
   const [statsToggle, setStatsToggle] = useState(false)
   const [menuToggle, setMenuToggle] = useState(false)


   const handleMenuClick = () => {
      setMenuToggle(!menuToggle)
   }

   const equArr = Object.values(props.equipment)
   const heroArmor = (+heroStats.armor) + (+equArr.reduce((acc, el) => {
      return acc += ((el.armor) ? el.armor : 0)}, 0));

   const heroAttack = (+heroStats.attack) + (+equArr.reduce((acc, el) => {
         return acc += ((el.attack) ? el.attack : 0)}, 0));


      console.log("props", props)
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
            inventory = {inventory}
            equipment = {equipment}
            updateSessionInventory = {updateSessionInventory}
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
         <div className="title-container">
            {props.title.title}
         </div>
      </div>
      <div className="footer-right">
         <div className="experience-bar">
            {`XP: ${experience}`}
         </div>
            <div className="health-bar" onClick={() => setStatsToggle(!statsToggle)}>
         {characterHealth}
         {}
            
            
         </div>
         {
               statsToggle === true ?
               <section className="stats-container">
                  <div className="stats-container-for-styling">
                     <div><span>{hero.hero_name}</span></div>
                        <div className="stats-container-stats">
                           <div><span>Health:</span>{heroStats.health}</div>
                           <div><span>Armor:</span>{heroArmor}</div>
                           <div><span>Strength:</span>{heroStats.strength}</div>
                           <div><span>Agility:</span>{heroStats.agility}</div>
                           <div><span>Damage:</span>{heroAttack} - {heroAttack + heroStats.strength}</div>
                        </div>
                  </div>
                  <div className="stats-level" style={{color: 'white'}}><span>{level}</span></div>
               </section> : null
            }
      </div>
      </>
   )
}

export default withRouter(Footer);
//AiFillHeart
//AiOutlineHeart