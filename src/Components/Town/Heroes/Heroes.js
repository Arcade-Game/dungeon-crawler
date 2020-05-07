import React, {useState, useEffect} from "react";
import {connect} from "react-redux"
// import {getCurrentUser} from "../../../Redux/authReducer"
import axios from "axios";
import "./Heroes.scss";
const Heroes = (props) => {
   const [heroList, setHeroList] = useState([{name: "Jon", class: "Rogue", level: 15}, {name: "Ryan", class: "Warrior", level: 12}, {name: "Noah", class: "Ranger", level: 8}]),
             [expand, setExpand] = useState(false)

      const newHero = "newHero";
      
      // useEffect (() => {
      //      props.getCurrentUser()
      // },[])
      // useEffect (() => {
      //       const {player_id} = props.user
      //       axios.get(`api/heroes/player/${player_id}`).then(res => {
      //          console.log(res.data[0])
      //          setHeroList(res.data[0])
      //          })
      // },[props])
   console.log(props)
   return (
      <div className="hero-selector-container"
              onClick={(event)=> props.stopPropagation(event)}> 
              <h1> Your Characters </h1>
      <div className="hero-summary-container">
         {heroList.map((char, index) => {
            return ( <>
            <div className="hero-summary"
                     onClick={() => setExpand(!expand)}>
               <h2>{char.name}</h2>
               <h2>{char.class}</h2>
               <h2>Level: {char.level}</h2>
            </div> 

             {expand ? (<div className="hero-stat-summary">
                <h4>Strength</h4>
               <h4>Agility</h4>
               <h4>Armor</h4>
               <button onClick={()=>{props.selectCharacter(heroList[index])
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
const mapStateToProps = (reduxState) => reduxState.auth
export default connect(mapStateToProps)(Heroes);