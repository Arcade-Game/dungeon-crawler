import React, {useState, useEffect, useRef} from "react";
import {TweenMax, Power3} from "gsap";
import {connect} from "react-redux";
import Hero from "./Hero";
import "./Heroes.scss";
const Heroes = (props) => {
   const {heroes} = props

   const [expand, setExpand] = useState([]);
   const newHero = "newHero";
      
   let heroesContainer = useRef(null)
 

   useEffect (() => {
      TweenMax.fromTo(heroesContainer, .7, {opacity: 0, ease: Power3.easeIn}, {opacity: 1, ease: Power3.easeOut})
   },[])

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
      <div className="hero-selector-container" ref={el => {heroesContainer = el}}
              onClick={(event)=> props.stopPropagation(event)}> 
        {heroes[0] && heroes[0].length !== 0 ?  (
           <>
               <h1> Your Characters </h1>
               <div className="hero-summary-container">
                  {heroes[0].map((hero, index) => {
                     return <Hero  key = {index}
                                             hero = {hero}
                                             index = {index}

                                             heroes = {heroes}
                                             getHeroes = {props.getHeroes}
                                             handleHeroToggle = {handleHeroToggle}
                                             resetToggle = {props.resetToggle}
                                             expand = {expand}
                                             /> })}

                  </div>
                      {(heroes[0].length < 8) ? (
                           <button className="create-hero" onClick={() => props.setToggle(newHero)}>New Hero</button>
                        ) : (<button className="create-hero" disabled>New Hero</button>)}
            </>
         ) : (<>
         <div><h1> Welcome to Vindermere!</h1> <h2>Please create your hero</h2></div>
            <button className="create-hero" onClick={() => props.setToggle(newHero)}>Create Hero</button> 
            </>
         )}
      </div>
         
   )
}
const mapStateToProps = (reduxState) => reduxState
export default connect(mapStateToProps)(Heroes);