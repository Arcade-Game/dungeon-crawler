import React from "react";
import Inventory from "./Game/Inventory/Inventory" // remove after inventory works
const Dashboard = () => {
   


   return (
      <div>
         Dashboard
   <Inventory/> {/* remove*/}
         <button>Logout</button>
         <button>Play</button>
         <button>Leader board</button>
      </div>
   )
}

export default Dashboard;