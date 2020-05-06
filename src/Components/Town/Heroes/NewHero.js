import React, {useState, useEffect} from "react";
import {withRouter} from "react-router-dom";
import "./Heroes.scss";
const NewHeros = (props) => {
   const [classToggle, setClassToggle] = useState("Warrior"),
             [genderToggle, setGenderToggle] = useState("Male"),
             [charName, setCharName] = useState("Jon");

   const  Warrior = "Warrior",
               Ranger = "Ranger",
               Rogue = "Rogue",
               Male = "Male",
               Female = "Female";

   // useEffect (() => {
   //    getCharImage()
   // }, [classToggle, genderToggle])

   const getCharImage = () => {
      console.log(classToggle, genderToggle)
         switch (classToggle+genderToggle){
            case (Warrior+Male):
               return "https://i.pinimg.com/originals/31/ea/08/31ea08491663a9c922db8b7a5fa3d392.jpg"
            case (Warrior+Female):
               return "https://i.pinimg.com/564x/a6/d6/0a/a6d60abe7752b8154c94f0ac576a9adc.jpg" // ArtStation Pinterest
            case (Ranger+Male):
               return "https://i.pinimg.com/564x/ea/a6/38/eaa6384524e226f3da9cb839d781aa10.jpg" // menofcolorfantasyart.tumbler.com Pinterest
            case (Ranger+Female):
               return "https://i.pinimg.com/564x/0b/36/b3/0b36b35853eb23d7a740ca389ade89da.jpg" // Nv, by Masway - heroineimages.wordpress.com Pinterest
               case (Rogue+Male):
                  return "https://i.pinimg.com/originals/4d/9d/47/4d9d47202f9bcfacfc3982fe65d2eea1.png" // Fantasy Pics Inc Pinterest
               case (Rogue+Female):
                  return "https://i.pinimg.com/originals/27/f3/4e/27f34ee5490f6ee9bfcffeb7497fe6c6.jpg" // ArtStation Pinterest
               

         }
   }
   return (
      <div className="new-hero-screen-container"
              onClick={(event)=> props.stopPropagation(event)}> 
         <div className="new-hero-screen"> 
            <div className="new-hero-class-container" >
               {classToggle === Warrior ? (
                  <h3 className="tab-start-on">Warrior</h3> 
                  ) : (
                  <h3 className="tab-start-off"
                          onClick={() => setClassToggle(Warrior)}>Warrior</h3> 
                  )
               }
               {classToggle === Ranger ? (
                  <h3 className="tab-on">Ranger</h3> 
                  ) : (
                  <h3 className="tab-off"
                          onClick={() => setClassToggle(Ranger)}>Ranger</h3> 
                  )
               }
               {classToggle === Rogue ? (
                  <h3 className="tab-on">Rogue</h3> 
                  ) : (
                  <h3 className="tab-off"
                          onClick={() => setClassToggle(Rogue)}>Rogue</h3> 
                  )
               }
            </div>
            <div className="new-hero-container" >
               <div className="new-hero-image-container">
                  <div className="new-hero-gender-selector">
                     <img className="male-icon" 
                              src="https://cdn0.iconfinder.com/data/icons/dating-icon-set/512/male_sign-512.png"
                              onClick={() => setGenderToggle(Male)}
                              height="40px" width="25px"/>
                     <img className="female-icon" 
                              src="https://cdn0.iconfinder.com/data/icons/dating-icon-set/512/female_sign-512.png"
                              onClick={() => setGenderToggle(Female)}
                              height="40px"/>
                  </div>
                  <div className="char-image-container">
                    <img className="char-image" 
                              src={getCharImage()} height="450px"/>
                  </div>

               </div>
               <h3 className="new-hero-name-input">Name: <input placeholder="Name" value={charName} onChange={(event) => setCharName(event.target.value)} /></h3> 
               </div>
            <div className="new-hero-info-container" >
               <div>

            <h1 className="new-hero-name"> {charName}</h1>
            <h3 className="new-hero-class">Level 1 {classToggle}</h3>
            <div className="new-hero-stats-container">
            <h3 className="new-hero-stats">Health: <h3>100</h3></h3>
            <h3 className="new-hero-stats">Strength:<h3>4</h3></h3>
            <h3 className="new-hero-stats">Agility:<h3>1</h3></h3>
            <h3 className="new-hero-stats">Armor:<h3>1</h3></h3>
            <h3 className="new-hero-stats">Other:<h3>unknown</h3></h3>
            <h3 className="new-hero-stats">Other:<h3>unknown</h3></h3>
               </div>
            </div>
            <button className="create-hero"
                           onClick={()=> props.history.push(`/game`)}> Begin</button>
                </div>
               
         </div>
      </div>
   )
}

export default withRouter(NewHeros);