import React, { useState, useEffect, useRef } from "react";
import {TweenMax, Power3} from "gsap";
import "./Trainer.scss";
const Trainer = (props) => {
   const {character} = props

   let trainerContainer = useRef()

   useEffect (() => {
      TweenMax.fromTo(trainerContainer, 2, {opacity: 0, ease: Power3.easeIn}, {opacity: 1, ease: Power3.easeOut})
   },[])

   console.log(character);
   return (
      <div className="trainer-container" ref={el => {trainerContainer = el}}
      onClick={(event)=> props.stopPropagation(event)}> 
      {character ? (
         <>
         {character.class === "Warrior" ? <p> Warrior Skills </p> : null
         }
         {character.class=== "Ranger" ? <p> Ranger Skills </p> : null
         }
         {character.class === "Rogue" ? <p> Rogue Skills </p> : null
         }
         </>
      ) : (<p> No hero selected </p> )
      }
               TRAINER
      </div>
   )
}

export default Trainer;