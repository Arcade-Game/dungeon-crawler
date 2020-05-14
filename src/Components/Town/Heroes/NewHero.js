import React, {useState, useEffect} from "react";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {selectHero} from "../../../Redux/reducers/heroReducer";
import "./Heroes.scss";
import axios from "axios";
const NewHeros = (props) => {
   const [classToggle, setClassToggle] = useState("Warrior"),
             [genderToggle, setGenderToggle] = useState("male"),
             [heroName, setHeroName] = useState("HeroDude"),
             [heroClasses, setHeroClasses] = useState(),
             [heroStats, setHeroStats] = useState({health: 100, attack: 1,armor: 1, strength: 4, agility: 0})

      useEffect (() => {
         axios.get("/api/classes").then(res => {
            setHeroClasses(res.data)})
            setStartingStats()
      },[classToggle])

   const  Warrior = "Warrior",
               Ranger = "Ranger",
               Rogue = "Rogue",
               male = "male",
               female = "female";

   const createHero = () => {
      const {player_id} = props.auth
      let class_id = 0
      let gender = genderToggle
         switch (classToggle){
            case Warrior:
              class_id = 1;
              break;
            case Ranger:
               class_id = 2;
               break;
            case Rogue:
               class_id = 3;
               break;
         }
      axios.post("/api/heroes", {player_id, heroName, gender, class_id}).then(res => {
         props.selectHero(res.data[0])
         props.history.push("/game")
      })
   }

   const getHeroImage = () => {
         switch (classToggle+genderToggle){
            case (Warrior+male):
               return "https://i.pinimg.com/originals/31/ea/08/31ea08491663a9c922db8b7a5fa3d392.jpg"
            case (Warrior+female):
               return "https://i.pinimg.com/564x/a6/d6/0a/a6d60abe7752b8154c94f0ac576a9adc.jpg" // ArtStation Pinterest
            case (Ranger+male):
               return "https://i.pinimg.com/564x/ea/a6/38/eaa6384524e226f3da9cb839d781aa10.jpg" // menofcolorfantasyart.tumbler.com Pinterest
            case (Ranger+female):
               return "https://i.pinimg.com/564x/0b/36/b3/0b36b35853eb23d7a740ca389ade89da.jpg" // Nv, by Masway - heroineimages.wordpress.com Pinterest
               case (Rogue+male):
                  return "https://i.pinimg.com/originals/4d/9d/47/4d9d47202f9bcfacfc3982fe65d2eea1.png" // Fantasy Pics Inc Pinterest
               case (Rogue+female):
                  return "https://i.pinimg.com/originals/27/f3/4e/27f34ee5490f6ee9bfcffeb7497fe6c6.jpg" // ArtStation Pinterest
         }
   }
   const setStartingStats = () => {
      if (heroClasses){
         switch (classToggle) {
            case Warrior:
               setHeroStats({...heroClasses[0]})
               break;
            case Ranger:
               setHeroStats({...heroClasses[1]})
               break;
            case Rogue:
               setHeroStats({...heroClasses[2]})
               break;
         }
      }
   },

   handleInput = (event) => {
      // event.target.value.length <= 20;
      setHeroName(event.target.value)
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
                              onClick={() => setGenderToggle(male)}
                              height="40px" width="25px"/>
                     <img className="female-icon" 
                              src="https://cdn0.iconfinder.com/data/icons/dating-icon-set/512/female_sign-512.png"
                              onClick={() => setGenderToggle(female)}
                              height="40px"/>
                  </div>
                  <div className="char-image-container">
                    <img className="char-image" 
                              src={getHeroImage()} height="450px"/>
                  </div>

               </div>
               <h3 className="new-hero-name-input">Name: <input placeholder="Name" maxLength="20" value={heroName} onChange={(event) => handleInput(event)} /></h3> 
               </div>
            <div className="new-hero-info-container" >
               <div>

            <h1 className="new-hero-name"> {heroName}</h1>
            <h3 className="new-hero-class">Level 1 {classToggle}</h3>
            <div className="new-hero-stats-container">

            <div className="new-hero-stats">Health: 
            <h3>{heroStats.health}</h3>
            </div>
            <div className="new-hero-stats">Attack:<h3>{heroStats.attack}</h3></div>
            <div className="new-hero-stats">Armor:<h3>{heroStats.armor}</h3></div>
            <div className="new-hero-stats">Strength:<h3>{heroStats.strength}</h3></div>
            <div className="new-hero-stats">Agility:<h3>{heroStats.agility}</h3></div>
            {/* <div className="new-hero-stats">Other:<h3>unknown</h3></div>
            <div className="new-hero-stats">Other:<h3>unknown</h3></div> */}
               </div>
            </div>
            <button className="create-hero"
                           onClick={()=> createHero()}> Begin</button>
                </div>
               
         </div>
      </div>
   )
}
const mapStateToProps = reduxState => reduxState
export default withRouter(connect(mapStateToProps, {selectHero})(NewHeros));