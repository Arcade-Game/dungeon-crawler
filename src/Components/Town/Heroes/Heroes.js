import React, {useState, useEffect} from "react";
import {connect} from "react-redux";
import Hero from "./Hero";
import "./Heroes.scss";
const Heroes = (props) => {
   const {heroes} = props

   const [expand, setExpand] = useState([]);
   const newHero = "newHero";
      
   const toggleSetup = () => {
      let arr = [];
      for (let i = 0; i < heroes[0].length; i++) 
      { arr.push(false) } 
      return arr
   },

   handleHeroToggle = async (index) => {
      let arr =  await toggleSetup()
      arr[index] = !expand[index]
      setExpand(arr);
   }

   console.log(props)

   return (
      <div className="hero-selector-container"
              onClick={(event)=> props.stopPropagation(event)}> 
              <h1> Your Characters </h1>
      <div className="hero-summary-container">
         {heroes[0].map((hero, index) => {
            return <Hero  key = {index}
                                    hero = {hero}
                                    index = {index}

                                    handleHeroToggle = {handleHeroToggle}
                                    resetToggle = {props.resetToggle}
                                    expand = {expand}
                                    />
            })
         }
      </div>
      {(heroes[0].length < 8) ? (<button className="create-hero" onClick={() => props.setToggle(newHero)}>New Hero</button>
      ) : (<button className="create-hero" disabled>New Hero</button>)}
      </div>
   )
}
const mapStateToProps = (reduxState) => reduxState
export default connect(mapStateToProps)(Heroes);