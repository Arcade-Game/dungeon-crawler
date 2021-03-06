import React, {useState, useEffect, useRef} from "react";
import {TweenMax, Power2, Power3} from "gsap";
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
import './MapSelector.scss';
import MapSelector from './MapSelector';

const Town = (props) => {
   const {hero} = props.hero
   const [overlayToggle, setOverlayToggle] = useState(false),
             [toggleType, setToggleType] = useState(),
             [saveToggle, setSaveToggle] = useState(false),
             [mapSelectorToggle, setMapSelectorToggle] = useState(false),
             [vendorEquipmentList, setVendorEquipmentList] = useState();
   const lastLocation = useLastLocation();

   const trainer = "trainer",
             market = "market",
             leaderBoard = "leaderBoard",
             heroes = "heroes",
             newHero = "newHero",
             inn = "inn";
   
            let musicNumber = Math.floor(Math.random() * townMusic.length)
             let saveBanner = useRef(null),
            //  let saveBanner = useRef(null),
                  selectHeroLight = useRef(null),
                  selectHeroText= useRef(null)

   useEffect( () => {
      getHeroes()
      getVendorEquipmentList(12);
   },[])

   useEffect (() => {
      // console.log(lastLocation)
      if (lastLocation && lastLocation.pathname === "/game" || lastLocation && lastLocation.pathname === "/death" ){
         saveGame()
         // console.log("save hit")
      }
      if (!hero.hero_name){
         TweenMax.to(selectHeroText, .8, {alpha:.4, color:"rgb(200, 200, 200)", repeat: -1, yoyo:true, ease:Power3.easeIn})
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
         props.setHeroList(res.data)
         // console.log("HERO LIST SET", res.data)
      })
   // } else {
   //    console.log("exists")
   // }
   },
    getVendorEquipmentList = (quantity) => {
      //  console.log("quantity", quantity)
      axios.get(`/api/items/${quantity}`).then(res => {
         setVendorEquipmentList(res.data)
         // console.log(res.data)
      }).catch(err => console.log(err));
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
         TweenMax.fromTo(saveBanner, 6, {opacity: 1, x: 18, ease: Power2.easeIn},{opacity: 0, x:-250, ease: Power2.easeOut})
         // console.log(saveData)
         axios.put(`/api/hero/${file_id}`, saveData).then(res => {
            // console.log(res.data)
         })
               //bank
      // player honor
      //experience
      //quests/maps = make a table for each - boolean
      // console.log("Game may have been saved?")
   },

   stopPropagation = (event) => {
      event.stopPropagation();
      event.nativeEvent.stopImmediatePropagation();
   },

   handlePlay = () => {
      props.history.push(`/game`)
      // window.location.reload(false)
   },

   handleMapSelector = () => {
      setMapSelectorToggle(true)
   },

   handleMapEditor = () => {
      props.history.push('/editor')
   }



   // console.log(props)
   // console.log(lastLocation)
   
   // console.log('musicNumber', musicNumber)

   return (
      <>
      <audio src={`${townMusic[musicNumber]}`} autoPlay />
      <div className="town-map">
         {mapSelectorToggle && <MapSelector {...{setMapSelectorToggle}}/>}
         <div className="town-title-container">{props.title.title}</div>
         {overlayToggle ? (
            <div id="one" className="town-overlay"
                     onClick={()=>{resetToggle()}}>
            {toggleType === trainer ? (
               <Trainer stopPropagation = {stopPropagation}/>) : null }
            {toggleType === market ? 
               <Market stopPropagation = {stopPropagation}
                              vendorEquipmentList = {vendorEquipmentList}
                              saveGame = {saveGame}
               /> : null }
            {toggleType === leaderBoard ? 
               <LeaderBoard stopPropagation = {stopPropagation} /> : null }
            {toggleType === heroes ? 
               <Heroes stopPropagation = {stopPropagation}
                              getHeroes = {getHeroes}
                              setToggle = {setToggle} 
                              resetToggle = {resetToggle}
                                 /> : null }
            {toggleType === newHero ? 
               <NewHero stopPropagation = {stopPropagation}
                                 /> : null }
            {toggleType === inn ? 
               <Inn stopPropagation = {stopPropagation}
                        saveGame = {saveGame}
                        hero = {props.hero}
                           /> : null }
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
         <div className="town-select-hero-container" ref={el => {selectHeroLight = el}}
                 onClick={() => {setToggle(heroes)}}>
               <p className="town-select-hero" ref={el => {selectHeroText = el}}>Heroes</p>
         </div>
         {hero.hero_name ? (
            <>
            <div className="hero-selected"
            onClick={() => {setToggle(heroes)}}>
               <h2 className="town-hero-name">{hero.hero_name}</h2>
               <h2>{hero.class_name}</h2>
               <h2>{hero.honor} Honor</h2>
               <h2>{hero.deaths} Deaths</h2>
            </div>
         
         <div className="play-game-container">
               <div className="play-game"
               onClick={handlePlay}> 
               <span> {`<`} </span>{`Play`} <span>{`>`}</span></div>
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
      <div className="map-editor-icon" onClick={handleMapEditor}>
         Map-Editor
      </div>
      <div className="map-selector-icon" onClick={handleMapSelector}>
            Map Selector
      </div>
      </>
   )
}
const mapStateToProps = (reduxState) => reduxState
export default connect(mapStateToProps, {setHeroList, setHonor})(Town);