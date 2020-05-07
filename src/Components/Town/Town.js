import React, {useState, useEffect} from "react";
import {connect} from "react-redux"
import {getCurrentUser} from "../../Redux/authReducer"
import {setHeroList} from "../../Redux/heroReducer"
import Trainer from "./Trainer/Trainer"
import Market from "./Market/Market";
import LeaderBoard from "./LeaderBoard/LeaderBoard";
import Heroes from "./Heroes/Heroes";
import NewHero from "./Heroes/NewHero";
import "./Town.scss"
import axios from "axios";
const Town = (props) => {
   const [overlayToggle, setOverlayToggle] = useState(false),
             [toggleType, setToggleType] = useState(),
             [hero, setHero] = useState();
            //  [currentUser, setCurrentUser] = useState(),
            //  [heroList, setHeroList] = useState()

   const trainer = "trainer",
             market = "market",
             leaderBoard = "leaderBoard",
             heroes = "heroes",
             newHero = "newHero";
   
   useEffect( () => {
       props.getCurrentUser()
      // console.log(user)
      // setCurrentUser(user.value.player_id)
   },[])

   useEffect (() => {
          const {player_id} = props.auth.user
          console.log([player_id])
         axios.get(`api/heroes/player/${player_id}`).then(res => {
            console.log(res.data[0])
            setHeroList(res.data[0])
            })
      },[props])



   const setToggle = (toggleType) => {
      setToggleType(toggleType)
      setOverlayToggle(true);
   },

   selectCharacter = (hero) => {
      setHero(hero)
   },

   resetToggle = () => {
      setToggleType();
      setOverlayToggle(false);
   },

   // getHeroes = () => {
   //    const {player_id} = props.user
   //    axios.get(`api/heroes/player/${player_id}`).then(res => {
   //       console.log(res.data)
   //       setHeroList(res.data)
   //    })
   // },

   stopPropagation = (event) => {
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
   }
   // console.log(currentUser)
   console.log(props)
   return (
      <div className="town-map">
      <audio src={require("../../music/Soliloquy.mp3")} autoPlay />
         {overlayToggle ? (
            <div className="town-overlay" 
                     onClick={()=>{resetToggle()}}>
            {toggleType === trainer ? (
            <Trainer stopPropagation = {stopPropagation}
            hero = {hero}/>) : null }
            {toggleType === market ? <Market stopPropagation = {stopPropagation} /> : null }
            {toggleType === leaderBoard ? <LeaderBoard stopPropagation = {stopPropagation} /> : null }
            {toggleType === heroes ? <Heroes stopPropagation = {stopPropagation}
            setToggle = {setToggle} 
            resetToggle = {resetToggle}
            // currentUser = {currentUser}
            selectCharacter = {selectCharacter}/> : null }
            {toggleType === newHero ? <NewHero stopPropagation = {stopPropagation}/> : null }
             </div> ) : null
         }
            
         <h1 className="town-name"> Vindermere </h1>
         <div className="town-trainer-container"
                 onClick={() => {setToggle(trainer)}}>
               <p className="town-trainer">Trainer</p>
         </div>
         <div className="inn-container">
               <p className="inn"> Inn<br/> (Logout) </p>
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
               //   getHeroes()
                 }}>
               <p className="town-select-hero">Heroes</p>
         </div>
         {hero ? (
            <div className="hero-selected"
            onClick={() => {setToggle(heroes)}}>
               <h2>{hero.name}</h2>
               <h2>{hero.class}</h2>
               <h2>Level: {hero.level}</h2> 
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
export default connect(mapStateToProps, {getCurrentUser})(Town);