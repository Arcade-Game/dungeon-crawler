import React, {useState} from "react";
import "./Market.scss";

const Market = (props) => {
      const [tabToggle, setTabToggle] = useState("items");

      const items = "items";

   return (
      <div className="market-container"
               onClick={(event) => props.stopPropagation(event)}> 
         <div className="vendor-container">
            {tabToggle === items ? (
               <div className="vendor-item-grid"></div>
            ) : null}
         </div>
         <div className="vendor-tabs">
            {tabToggle === items ? (
               <h2 className= "tab tab-start-on"> Items </h2>
               ) : (<h2 className="tab tab-start-off"
                           onClick={() => setTabToggle(items)}> Items</h2> 
               )
            }
            {tabToggle  === "tab1" ? (
            <h2 className= "tab tab-on"> tab1 </h2>
               ) : (<h2 className="tab tab-off"
                           onClick={() => setTabToggle("tab1")}> tab1</h2> 
               )
            }
            {tabToggle  === "tab2" ? (
            <h2 className= "tab tab-on"> tab2 </h2>
               ) : (<h2 className="tab tab-off"
                           onClick={() => setTabToggle("tab2")}> tab2</h2> 
               )
            }
            {tabToggle  === "tab3" ? (
            <h2 className= "tab tab-on"> tab3 </h2>
               ) : (<h2 className="tab tab-off"
                           onClick={() => setTabToggle("tab3")}> tab3</h2> 
               )
            }
            {tabToggle  === "tab4" ? (
            <h2 className= "tab tab-on"> tab4 </h2>
               ) : (<h2 className="tab tab-off"
                           onClick={() => setTabToggle("tab4")}> tab4</h2> 
               )
            }
            {tabToggle  === "tab5" ? (
            <h2 className= "tab tab-on"> tab5 </h2>
               ) : (<h2 className="tab tab-off"
                           onClick={() => setTabToggle("tab5")}> tab5</h2> 
               )
            }
            {tabToggle  === "tab6" ? (
            <h2 className= "tab tab-on"> tab6 </h2>
               ) : (<h2 className="tab tab-off"
                           onClick={() => setTabToggle("tab6")}> tab6</h2> 
               )
            }
            {tabToggle  === "tab7" ? (
            <h2 className= "tab tab-on"> tab7 </h2>
               ) : (<h2 className="tab tab-off"
                           onClick={() => setTabToggle("tab7")}> tab7</h2> 
               )
            }


         </div>

      </div>
   )
}

export default Market;