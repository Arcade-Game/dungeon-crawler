import React, {useEffect, useRef} from "react";
import {TweenMax, Power3} from "gsap";
import "./LeaderBoard.scss";
const LeaderBoard = (props) => {

   let boardContainer = useRef()

   useEffect (() => {
      TweenMax.fromTo(boardContainer, 2, {opacity: 0, ease: Power3.easeIn}, {opacity: 1, ease: Power3.easeOut})
   },[])

   return (
      <div className="leader-board-container" ref={el => {boardContainer = el}}
               onClick={(event) => props.stopPropagation(event)}> 
         <div className="scores-container">
            <h3>Top Players</h3>
            <div className="scores"> </div>
         {/* <div className="vendor-item-grid"></div> */}
         </div>
         <div className="scores-container">
            <h3> Your Scores</h3>
            <div className="scores"> </div>
            

         </div>

      </div>
   )
}

export default LeaderBoard;