import React, { useState } from "react";
import "./Trainer.scss";
const Trainer = (props) => {
   const {character} = props


   console.log(character);
   return (
      <div className="trainer-container"
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