import React, { useState, useEffect, useRef } from 'react';
import './Footer.scss';
import {withRouter} from 'react-router-dom';
import Inventory from '../Game/Character/Inventory/Inventory';
import titlesReducer from '../../Redux/reducers/titlesReducer';
import {TweenLite, Power3, Power2} from 'gsap';
import { GiBlood } from 'react-icons/gi';
// import {BsArrowLeft} from 'react-icons/bs';

const Footer = props => {
   const {inventory, equipment, updateSessionInventory,equipmentToggle, inventoryToggle, heroStats, hero,  newMoney, experience, level, characterHealth, isFight, setEquipmentToggleState, setInventoryToggleState, setKeyToggleFn} = props;
   const {gender, class_name} = hero, 
              [heroAttack, setHeroAttack] = useState(),
              [heroArmor, setHeroArmor] = useState()
   const [statsToggle, setStatsToggle] = useState(false);
   const [menuToggle, setMenuToggle] = useState(false);

   let didMountRef = useRef(false)
   let animateBlood = useRef(null)
   
   useEffect(() => {
      
      if (didMountRef.current){
        TweenLite.to(
         animateBlood,
         5,
         {
            height: `${class_name === 'Warrior' ? ((characterHealth/100)*100) : class_name === 'Ranger' ? ((characterHealth/80)*100) : class_name === 'Rogue' ? ((characterHealth/60)*100) : null}%`
         }
      ) 
      } else didMountRef.current = true
      

      if(isFight === true){
         setEquipmentToggleState(false)
         setInventoryToggleState(false)
      }
   }, [isFight])
   
   const handleMenuClick = () => {
      setMenuToggle(!menuToggle)
   }

   useEffect (() => {
      setHeroArmor ((+heroStats.armor) + (+equipment.reduce((acc, el) => {
         return acc += ((el.armor) ? el.armor : 0)}, 0)));
      setHeroAttack ((+heroStats.attack) + (+equipment.reduce((acc, el) => {
         return acc += ((el.attack) ? el.attack : 0)}, 0)));
      },[props])

   return (
      <>
      <div className="footer-top" onClick={handleMenuClick}>
         <h1>V</h1>
      </div>
         {
         menuToggle === true ? <div className="game-menu">
               <div className="menu-title"><span>indermere</span></div>
               <button className="return-to-town" 
                              onClick={() => window.location.replace("#/town")}>Return to Town</button>
               <button className="return" 
               onClick={() => window.location.replace("#/game")}>Restart Dungeon</button>
               <button className="return">Settings</button>
               <button className="return">Quests</button>
               <button className="return" onClick={setKeyToggleFn}>Terrain Info</button>
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
            <div className="inventory-icon" onClick={() => isFight ? alert("You're in combat!") : props.setInventoryToggle()}> 
            </div>
         </div>
         <div className ="character-icon-container">
            <div className="character-icon" onClick={() => isFight ? alert("You're in combat!") : props.setEquipmentToggle()}>
            </div>
         </div>
         <div className="title-container">
         </div>
      </div>
      <div className="footer-right">
         <div className="experience-bar">
            {`XP: ${experience}`}
         </div>
            <div className="health-bar" onClick={() => !isFight ? setStatsToggle(!statsToggle) : null}>
               <div className="health-bar-blood" ref={el => {animateBlood = el}} 
               // style={{height: `${class_name === 'Warrior' ? ((characterHealth/100)*100) : class_name === 'Ranger' ? ((characterHealth/80)*100) : class_name === 'Rogue' ? ((characterHealth/60)*100) : null}%`}}
               >

               </div>
            </div>
               
               
         {
               statsToggle === true ?
               <section className="stats-container">
                  <div className="stats-container-for-styling">
                     <div><span>{hero.hero_name}</span></div>
                        <div className="stats-container-stats">
                           <div><span>Health:</span>{characterHealth}</div>
                           <div><span>Armor:</span>{heroArmor}</div>
                           <div><span>Strength:</span>{heroStats.strength}</div>
                           <div><span>Agility:</span>{heroStats.agility}</div>
                           <div><span>Damage:</span>{heroAttack} - {heroAttack + heroStats.strength}</div>
                        </div>
                  </div>
                  <div className="stats-level" ><span>{level}</span></div>
               </section> : null
            }
      </div>
      </>
   )
}

export default withRouter(Footer);
//AiFillHeart
//AiOutlineHeart