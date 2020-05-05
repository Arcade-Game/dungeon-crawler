import React, {useState} from "react";
import "./Market.scss";

const Market = () => {
      const [tabToggle, setTabToggle] = useState([true,false, false, false, false, false, false]);
               //  [tabTwoToggle, setTabTwoToggle] = useState(false),
               //  [tabThreeToggle, setTabThreeToggle] = useState(false),
               //  [tabFourToggle, setTabFourToggle] = useState(false),
               //  [tabFiveToggle, setTabFiveToggle] = useState(false),
               //  [tabSixToggle, setTabSixToggle] = useState(false),
               //  [tabSevenToggle, setTabSevenToggle] = useState(false);
   
   // const handleSetToggle = (event, index) => {
   //    event.stopPropagation()
   //    for (let i = 0; i < tabToggle.length; i++){
   //          setTabToggle[i] = false;
   //    }
   //    setTabToggle[index] = true;
   // }

      console.log(tabToggle)
   return (
      <div className="market-container"> 
         <div className="vendor-container">
         <div className="vendor-item-grid"></div>
         </div>
         <div className="vendor-tabs">
            {tabToggle[0] ? (
               <h2 className= "tab tab-start-on"> Items </h2>
               ) : (<h2 className="tab tab-start-off"
                           // onClick={(event) => handleSetToggle(event, 0)}
                           > Items</h2> 
               )
            }
            {tabToggle[1] ? (
            <h2 className= "tab tab-on"> tab1 </h2>
               ) : (<h2 className="tab tab-off"
                           // onClick={(event) => handleSetToggle(event, 1)}
                           > tab1</h2> 
               )
            }

            <h2 className={tabToggle[1] ? "tab tab-on" : "tab tab-off"}> tab 2 </h2>
            <h2 className={tabToggle[2] ? "tab tab-on" : "tab tab-off"}> tab 3 </h2>
            <h2 className={tabToggle[3] ? "tab tab-on" : "tab tab-off"}> tab 4 </h2>
            <h2 className={tabToggle[4] ? "tab tab-on" : "tab tab-off"}> tab 5 </h2>
            <h2 className={tabToggle[5] ? "tab tab-on" : "tab tab-off"}> tab 6 </h2>
            <h2 className={tabToggle[6] ? "tab tab-on" : "tab tab-end-off"}> tab 7 </h2>
         </div>

      </div>
   )
}

export default Market;