import React from "react";
import {connect} from "react-redux" 
import {selectHero, updateInventory, equipItem} from "../../../Redux/reducers/heroReducer";
const Hero = (props) => {
   const { hero, index, handleHeroToggle, resetToggle, expand} = props;

      const heroArmor = (hero.armor) + (+hero.equipment.map(el => el.armor)),
                heroAttack = (hero.attack) + (+hero.equipment.map(el => el.attack));

   const handleHeroSelect = async () => {
      props.selectHero(hero)
   }

      const handleDelete = () => {
         console.log("are you sure you want to delete?")
      }
      console.log (props.hero.equipment)
   return (
      <>
         <div className="hero-title"
            onClick={() => {handleHeroToggle(index)}}>
               <h2>{hero.hero_name}</h2>
               <h2>{hero.class_name}</h2>
               <h2>Deaths: X</h2>
            </div> 

         {expand[index] ? (<div className="hero-summary-expand">
            <div className="hero-summary">
         <div className="hero-button-container">
               <button onClick={()=>{handleHeroSelect()
                           resetToggle()}}> Select</button>
               <button onClick={() => handleDelete()}>Delete</button>
            </div>
            <div className="hero-stats-summary">
               <div className="stat">Health: <div>{hero.health}</div> </div>
                <div className="stat">Attack: <div>{heroAttack}</div></div>
               <div className="stat">Armor: <div>{heroArmor}</div> </div>
                <div className="stat">Strength: <div> {hero.strength}</div></div>
               <div className="stat">Agility: <div>{hero.agility}</div></div>
            </div>
            </div>
                 </div>) : null
            }
      </>
   )
}

export default connect(null, {selectHero, updateInventory})(Hero);