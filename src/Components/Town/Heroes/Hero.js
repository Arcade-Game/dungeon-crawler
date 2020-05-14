import React, {useState, useEffect} from "react";
import {connect} from "react-redux" 
import {selectHero, updateInventory, equipItem} from "../../../Redux/reducers/heroReducer";
import axios from "axios";
const Hero = (props) => {
   const { hero, index, handleHeroToggle, resetToggle, expand, heroes} = props;
   const  [deleteToggle, setDeleteToggle] = useState(false);

      const heroArmor = (hero.armor) + (+hero.equipment.reduce((acc, el) => {
                     return acc += ((el.armor) ? el.armor : 0)}, 0)),
                heroAttack = (hero.attack) + (+hero.equipment.reduce((acc, el) => {
                     return acc += ((el.attack) ? el.attack : 0)}, 0));

   useEffect(() => {
      setDeleteToggle(false)
   },[props])

   const handleHeroSelect = async () => {
      console.log (hero.equipment)
      props.selectHero(hero)
   }

      const handleDelete = () => {
         axios.delete(`/api/hero/${hero.file_id}`).then(res => {
            console.log(res.data)
            props.selectHero(heroes[0])
         })
         props.resetToggle()
      }

   console.log(hero)
   return (
      <>
         <div className="hero-title"
            onClick={() => {handleHeroToggle(index)
            handleHeroSelect()}}>
               <h2>{hero.hero_name}</h2>
               <h2>{hero.class_name}</h2>
               <h2>{hero.deaths} Deaths</h2>
            </div> 

         {expand[index] ? (<div className="hero-summary-expand">
            <div className="hero-summary">
               {deleteToggle ? (
                  <div>
                     <h3> Are you sure you want to delete {hero.hero_name}?</h3>
                     <button className="hero-delete-buttons" onClick={() => setDeleteToggle(false)}>CANCEL</button>
                     <button className="hero-delete-buttons" onClick={() => handleDelete()}>DELETE</button>
                  </div>
               ) : (
               <>
                  <div className="hero-button-container">
                  <button onClick={()=>{handleHeroSelect()
                              resetToggle()}}> Select</button>
                  <button onClick={() => setDeleteToggle(true)}>Delete</button>
                  
                  </div>
                  <div className="hero-stats-summary">
                     <div className="stat">Health: <div>{hero.health}</div> </div>
                     <div className="stat">Attack: <div>{heroAttack}</div></div>
                     <div className="stat">Armor: <div>{heroArmor}</div> </div>
                     <div className="stat">Strength: <div> {hero.strength}</div></div>
                     <div className="stat">Agility: <div>{hero.agility}</div></div>
                  </div>
               </>
               )}
            </div>
         </div>) : null
         }
      </>
   )
}

export default connect(null, {selectHero, updateInventory})(Hero);