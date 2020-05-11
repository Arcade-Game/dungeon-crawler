import React, {useState, useEffect} from "react";
import {connect} from "react-redux"
import {setHeroList} from "../../Redux/reducers/heroesReducer"
import Trainer from "./Trainer/Trainer"
import Market from "./Market/Market";
import LeaderBoard from "./LeaderBoard/LeaderBoard";
import Heroes from "./Heroes/Heroes";
import NewHero from "./Heroes/NewHero";
import Inn from "./Inn/Inn";
import "./Town.scss"
import axios from "axios";
import {townMusic} from './townMusic';

const Town = (props) => {
   const [overlayToggle, setOverlayToggle] = useState(false),
             [toggleType, setToggleType] = useState();


   const trainer = "trainer",
             market = "market",
             leaderBoard = "leaderBoard",
             heroes = "heroes",
             newHero = "newHero",
             inn = "inn";
   
   // useEffect( () => {

   // },[])

   const setToggle = (toggleType) => {
      setToggleType(toggleType)
      setOverlayToggle(true);
   },

   resetToggle = () => {
      setToggleType();
      setOverlayToggle(false);
   },

   getHeroes = () => {
      const {player_id} = props.auth
      axios.get(`api/heroes/player/${player_id}`).then(res => {
         console.log(res.data)
         props.setHeroList(res.data)
      })
   },

   stopPropagation = (event) => {
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
   }

   console.log(props)
   let musicNumber = Math.floor(Math.random() * townMusic.length)
   console.log('musicNumber', musicNumber)
   return (
      <div className="town-map">
      <audio src={`${townMusic[musicNumber]}`} autoPlay />
         {overlayToggle ? (
            <div className="town-overlay" 
                     onClick={()=>{resetToggle()}}>
            {toggleType === trainer ? (
            <Trainer stopPropagation = {stopPropagation}/>) : null }
            {toggleType === market ? <Market stopPropagation = {stopPropagation} /> : null }
            {toggleType === leaderBoard ? <LeaderBoard stopPropagation = {stopPropagation} /> : null }
            {toggleType === heroes ? <Heroes stopPropagation = {stopPropagation}
            setToggle = {setToggle} 
            resetToggle = {resetToggle}
            /> : null }
            {toggleType === newHero ? <NewHero stopPropagation = {stopPropagation}/> : null }
            {toggleType === inn ? <Inn stopPropagation = {stopPropagation}/> : null }
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
                 onClick={() => {setToggle(heroes)
                 getHeroes()
                 }}>
               <p className="town-select-hero">Heroes</p>
         </div>
         {props.hero ? (
            <div className="hero-selected"
            onClick={() => {setToggle(heroes)}}>
               <h2>{props.hero.hero_name}</h2>
               <h2>{props.hero.class_name}</h2>
               <h2>Level: {props.hero.level}</h2> 
            </div>
         ): null}
         <div className="play-game-container">
               <p className="play-game"
               onClick={()=> props.history.push(`/game`)}> {`< Play >`} </p>
         </div>
            {/* <div className="minstrel1"></div>
            <div className="minstrel2"></div>
            <div className="minstrel3"></div>
            <div className="minstrel4"></div> */}
         <h3 className="copyright"> Picture Credit: Deep_Rights - Reddit </h3>
      </div>
   )
}
const mapStateToProps = (reduxState) => reduxState
export default connect(mapStateToProps, {setHeroList})(Town);