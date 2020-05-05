import React from "react";
import "./LeaderBoard.scss";
const LeaderBoard = () => {

   return (
      <div className="leader-board-container"> 
         <div className="scores-container">
            <h3>Top 10 Players</h3>
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