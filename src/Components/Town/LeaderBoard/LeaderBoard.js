import React from "react";
import "./LeaderBoard.scss";
const LeaderBoard = (props) => {

   return (
      <div className="leader-board-container"
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