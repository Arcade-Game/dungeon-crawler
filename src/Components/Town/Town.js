import React, {useState} from "react";
import Trainer from "./Trainer/Trainer"
import Market from "./Market/Market";
import LeaderBoard from "./LeaderBoard/LeaderBoard";
import Heroes from "./Heroes/Heroes";
import "./Town.scss"
const Town = () => {
   const [overlayToggle, setOverlayToggle] = useState(false),
             [trainerToggle, setTrainerToggle] = useState(false),
             [marketToggle, setMarketToggle] = useState(false),
             [leaderBoardToggle, setLeaderBoardToggle] = useState(false),
             [heroesToggle, setHeroesToggle] = useState(false);


   const setToggle = (toggleType) => {
      switch(toggleType) {
         case "trainer":
            setTrainerToggle(true);
            break;
         case "market":
            setMarketToggle(true)
            break;
         case "leaderBoard":
            setLeaderBoardToggle(true)
            break;
         case "heroes":
            setHeroesToggle(true)
            break;
      }
      setOverlayToggle(true);
   },

   resetToggle = () => {
      setTrainerToggle(false);
      setMarketToggle(false)
      setLeaderBoardToggle(false)
      setHeroesToggle(false)
      setOverlayToggle(false);
   }

   return (
      <div className="town-map">
         {overlayToggle ? (
            <div className="town-overlay" 
                     onClick={()=>{resetToggle()}}>
            {trainerToggle ? <Trainer />: null }
            {marketToggle ? <Market /> : null }
            {leaderBoardToggle ? <LeaderBoard /> : null }
            {heroesToggle ? <Heroes /> : null }
            </div> ) : null
         }
            
         <h1 className="town-name"> Vindermere </h1>
         <div className="town-trainer-container"
                 onClick={() => {setToggle("trainer")}}>
               <p className="town-trainer">Trainer</p>
         </div>
         <div className="inn-container">
               <p className="inn"> Inn<br/> (Logout) </p>
         </div>
         <div className="town-market-container"
                 onClick={() => {setToggle("market")}}>
               <p className="town-market"> Market </p>
         </div>
         <div className="town-leader-board-container"
                 onClick={() => {setToggle("leaderBoard")}}>
               <p className="town-leader-board">Leader Board</p>
         </div>
         <div className="town-select-hero-container"
                 onClick={() => {setToggle("heroes")}}>
               <p className="town-select-hero">Heroes</p>
         </div>
         <div className="play-game-container">
               <p className="play-game"> {`< Play >`} </p>
         </div>

         <h3 className="copyright"> Picture Credit: Deep_Rights - Reddit </h3>
      </div>
   )
}

export default Town;