import React, {useState, useEffect, useRef} from "react";
import {TweenMax, Power2} from "gsap";
import {connect} from "react-redux";
import {setHeroList} from "../../Redux/reducers/heroesReducer";
import { useLastLocation } from 'react-router-last-location';
import Trainer from "./Trainer/Trainer";
import Market from "./Market/Market";
import LeaderBoard from "./LeaderBoard/LeaderBoard";
import Heroes from "./Heroes/Heroes";
import NewHero from "./Heroes/NewHero";
import Inn from "./Inn/Inn";
import "./Town.scss"
import axios from "axios";
import {townMusic} from './townMusic';
import {setHonor} from '../../Redux/reducers/titlesReducer';

const Town = (props) => {
   const {hero} = props.hero
   const [overlayToggle, setOverlayToggle] = useState(false),
             [toggleType, setToggleType] = useState(),
             [saveToggle, setSaveToggle] = useState(false);
   const lastLocation = useLastLocation();

   const trainer = "trainer",
             market = "market",
             leaderBoard = "leaderBoard",
             heroes = "heroes",
             newHero = "newHero",
             inn = "inn";
   
             let saveBanner = useRef(null)

   useEffect( () => {
      getHeroes()

   },[])

   useEffect (() => {
      if (lastLocation && lastLocation.pathname === "/game"){
         saveGame()
      }
   },[])

   
   const setToggle = (toggleType) => {
      setToggleType(toggleType)
      setOverlayToggle(true);
   },

   resetToggle = () => {
      setToggleType();
      setOverlayToggle(false);
   },

   getHeroes = () => {
      // if (props.heroes){
      const {player_id} = props.auth
      axios.get(`api/heroes/player/${player_id}`).then(res => {
         console.log(res.data)
         props.setHeroList(res.data)
      })
   // } else {
   //    console.log("exists")
   // }
   },

   saveGame = () => {
      const {player_id} = props.auth,
                {file_id, gold, deaths} = props.hero.hero,
                {equipment, inventory} = props.hero
         let saveData = {
            player_id,
            gold,
            deaths,
            equipment,
            inventory
         }
         TweenMax.fromTo(saveBanner, 6, {opacity: 1, x: 18, ease: Power2.easeIn}, {opacity: 0, x:-250, ease: Power2.easeOut})

         console.log(saveData)
         axios.put(`/api/hero/${file_id}`, saveData).then(res => {
            console.log(res.data)
         })
         // getHeroes()
   },

   stopPropagation = (event) => {
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
   }

   console.log(props)
   console.log(lastLocation)
   let musicNumber = Math.floor(Math.random() * townMusic.length)
   console.log('musicNumber', musicNumber)
   return (
      <div className="town-map">
         <div className="town-title-container">{props.title.title}</div>
      <audio src={`${townMusic[musicNumber]}`} autoPlay />
         {overlayToggle ? (
            <div className="town-overlay" 
                     onClick={()=>{resetToggle()}}>
            {toggleType === trainer ? (
            <Trainer stopPropagation = {stopPropagation}/>) : null }
            {toggleType === market ? 
               <Market stopPropagation = {stopPropagation}/> : null }
            {toggleType === leaderBoard ? 
               <LeaderBoard stopPropagation = {stopPropagation} /> : null }
            {toggleType === heroes ? 
               <Heroes stopPropagation = {stopPropagation}
                              setToggle = {setToggle} 
                              resetToggle = {resetToggle}
                              
                              /> : null }
            {toggleType === newHero ? 
               <NewHero stopPropagation = {stopPropagation}/> : null }
            {toggleType === inn ? 
               <Inn stopPropagation = {stopPropagation}
                     hero = {props.hero}/> : null }
             </div> ) : null
         }
            
         <h1 className="town-name"> Vindermere </h1>
         <div className="town-trainer-container"
                 onClick={() => {setToggle(trainer)}}>
               <p className="town-trainer">Trainer</p>
         </div>
         <div className="town-inn-container"onClick={() => {setToggle(inn)}}>
               <p className="town-inn" > Inn</p>
         </div>
         <div className="town-market-container"
                 onClick={() => {setToggle(market)}}>
               <p className="town-market"> Market </p>
         </div>
         <div className="town-leader-board-container"
                 onClick={() => {setToggle(leaderBoard)}}>
               <p className="town-leader-board">Leader Board</p>
         </div>
         <div className="town-select-hero-container"
                 onClick={() => {setToggle(heroes)}}>
               <p className="town-select-hero">Heroes</p>
         </div>
         {hero.hero_name ? (
            <>
            <div className="hero-selected"
            onClick={() => {setToggle(heroes)}}>
               <h2 className="town-hero-name">{hero.hero_name}</h2>
               <h2>{hero.class_name}</h2>
               <h2>{hero.deaths} Deaths</h2>
            </div>
         
         <div className="play-game-container">
               <p className="play-game"
               onClick={()=> props.history.push(`/game`)}> {`< Play >`} </p>
         </div>
         </>
         ): null}
            {/* <div className="minstrel1"></div>
            <div className="minstrel2"></div>
            <div className="minstrel3"></div>
            <div className="minstrel4"></div> */}
            <h2 className="save-banner" ref={el => {saveBanner = el}}>SAVING GAME ...</h2>
         {/* <h3 className="copyright"> Picture Credit: Deep_Rights - Reddit </h3> */}
      </div>
   )
}
const mapStateToProps = (reduxState) => reduxState
export default connect(mapStateToProps, {setHeroList, setHonor})(Town);