import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import {selectHero} from "../../../Redux/reducers/heroReducer";
import "./Heroes.scss";
const Heroes = (props) => {
   const {heroList} = props.heroes
   const [expand, setExpand] = useState([false, 0])

      const newHero = "newHero";
      
   //    const heroArmor = props.hero.armor + props.hero.equipment.map(el => +el.armor))
   //    const heroAttack = props.hero.attack + props.hero.equipment.map(el => +el.attack)

   // console.log(props.hero.armor)
   // console.log(props.hero.equipment.map((el, i) => +el.armor).values())
   // console.log(heroArmor)
   // console.log(props.hero.attack)
   // console.log(props.hero.equipment.map((el, i) => +el.attack).values())
   // console.log(heroAttack)
   console.log(props)

   return (
      <div className="hero-selector-container"
              onClick={(event)=> props.stopPropagation(event)}> 
              <h1> Your Characters </h1>
      <div className="hero-summary-container">
         {heroList[0].map((hero, index) => {
            return ( <>
            <div className="hero-summary"
                     onClick={() => setExpand([!expand[0], index])}>
               <h2>{hero.hero_name}</h2>
               <h2>{hero.class_name}</h2>
               <h2>Gold: {hero.gold}</h2>
            </div> 

             {expand[0] && expand[1] == index ? (<div className="hero-stat-summary">
                <h4>Strength: {hero.strength}</h4>
               <h4>Agility: {hero.agility}</h4>
               <h4>Armor: {heroArmor}</h4>

                  <button onClick={()=>{props.selectHero(heroList[0][index])
               props.resetToggle()}}> Select</button>
                 </div>) : null
            }
            </>
            )
         })}
      </div>
      <button className="create-hero" onClick={() => props.setToggle(newHero)}>New Hero</button> 
      </div>
   )
}
const mapStateToProps = (reduxState) => reduxState
export default connect(mapStateToProps, {selectHero})(Heroes);