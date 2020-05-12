import React, {useState, useEffect} from "react";
import {connect} from "react-redux"
import "./Market.scss";

const Market = (props) => {
   const { inventory} = props.hero;
            //  {handleDrag, equipItem, inventoryToggle} = props;
      const [tabToggle, setTabToggle] = useState("items"),
                [weapon, setWeapon] = useState(props.equipment[0]),
                [twoHand, setTwoHandWeapon] = useState(props.equipment[1]),
                [offHand, setOffHand] = useState(props.equipment[2]),
                [armor, setArmor] = useState(props.equipment[3]),
                [helm, setHelm] = useState(props.equipment[4]),
                [boots, setBoots] = useState(props.equipment[5]);
   
         useEffect (() => {
            setWeapon(props.equipment[0])
            setTwoHandWeapon(props.equipment[1])
            setOffHand(props.equipment[2])
            setArmor(props.equipment[3])
            setHelm(props.equipment[4])
            setBoots(props.equipment[5])
         },[props])

      const items = "items";


      const mappedInventory = props.inventory.map((el, i) => {
         return el.item_type ? (
            <div className="market-inventory-square"> <img className="market-inventory-square-image" key ={el.item_id} 
                     id={i} 
                     className="false"
                     src={el.image} 
                     draggable="true" 
                     // onDragStart={(event) => handleDrag(event)} 
                     // onDrag={(event) => event.preventDefault()} 
                     width="82%" height="88%"
         /></div> ) : i < 8 ? <div className="market-inventory-square"></div> : null })


   return (
      <div className="market-container"
               // onClick={(event) => props.stopPropagation(event)}
               > 
         <div className="vendor-container">
            {tabToggle === items ? (
               <div className="vendor-item-grid"></div>
            ) : null}         
            <div className="market-inventory-screen-container">

            <div className="one">
                <div className="market-equipment">
                           <div className="market-equipment-top-container">
                        <div className="market-helm-container" 
                              // onDrop={(event) => equipItem(event)} 
                              onDragOver={(event) => event.preventDefault()}>
                           {helm.item_id ? (
                           <img id={helm.item_id} className="true"
                                    src={helm.image} 
                                    // onDragStart={(event) => handleDrag(event)} 
                                    // onDrag={(event) => event.preventDefault()}  
                                    width="70px" height="100px" />
                           ) : null
                           }
                        </div>
                        {/* <div className="inventory-square-hover">
                           <span>{helm.item_name}</span>
                           <div className="i-square-hover-stats">
                              <div><span>Attack: </span>{helm.attack}</div>
                              <div><span>Armor: </span>{helm.armor}</div>
                              <div><span>Strength: </span>{helm.strength ? helm.strength : 0}</div>
                              <div><span>Agility: </span>{helm.agility ? helm.agility : 0}
                              </div> */}
                           </div>
                       
                     
                     <div className="market-equipment-middle-container">
                     <div 
                              className="market-middle-container" value={weapon}
                                 // onDrop={(event) => equipItem(event)} 
                                 // onDragOver={(event) => event.preventDefault()}
                                 >
                              {weapon.item_id ? (
                                    <img id={weapon.item_id} className="true" 
                                             src={weapon.image}
                                             // onDragStart={(event) => handleDrag(event)} 
                                             // onDrag={(event) => event.preventDefault()} 
                                             width="70px" height="100px" />
                              ) : null
                              }
                              {/* <div className="inventory-square-hover">
                                 <span>{weapon.item_name}</span>
                                 <div className="i-square-hover-stats">
                                    <div><span>Attack: </span>{weapon.attack}</div>
                                    <div><span>Armor: </span>{weapon.armor}</div>
                                    <div><span>Strength: </span>{weapon.strength ? weapon.strength : 0}</div>
                                    <div><span>Agility: </span>{weapon.agility ? weapon.agility : 0}</div>
                                 </div>
                              </div>
                        </div> */}
                        
                        <div className="market-middle-container" value={armor}
                                 // onDrop={(event) => equipItem(event)} 
                                 // onDragOver={(event) => event.preventDefault()}
                                 >
                              {armor.item_id ? (
                                 <>
                                 {/* <div className="inventory-square-hover">
                                 <span>{armor.item_name}</span>
                                 <div className="i-square-hover-stats">
                                    <div><span>Attack: </span>{armor.attack}</div>
                                    <div><span>Armor: </span>{armor.armor}</div>
                                    <div><span>Strength: </span>{armor.strength ? armor.strength : 0}</div>
                                    <div><span>Agility: </span>{armor.agility ? armor.agility : 0}</div>
                                 </div> */}
                                 <div>
                                    <img id={armor.item_id} className="true"
                                             src={armor.image} 
                                             // onDragStart={(event) => handleDrag(event)} 
                                             // onDrag={(event) => event.preventDefault()}  
                                             width="70px" height="100px" />
                                 </div>
                              </>
                              ) : null
                              }
                              
                        </div>
                        <div className="market-middle-container" value={offHand}
                                 // onDrop={(event) => equipItem(event)} 
                                 // onDragOver={(event) => event.preventDefault()}
                                 >
                           {offHand.item_id ? (
                              <>
                              {/* <div className="inventory-square-hover">
                                 <span>{offHand.item_name}</span>
                                 <div className="i-square-hover-stats">
                                    <div><span>Attack: </span>{offHand.attack}</div>
                                    <div><span>Armor: </span>{offHand.armor}</div>
                                    <div><span>Strength: </span>{offHand.strength ? offHand.strength : 0}</div>
                                    <div><span>Agility: </span>{offHand.agility ? offHand.agility : 0}</div>
                                 </div> */}
                              <div>
                                 <img id={offHand.item_id} className="true" 
                                          src={offHand.image}  
                                          // onDragStart={(event) => handleDrag(event)} 
                                          // onDrag={(event) => event.preventDefault()}
                                          width="70px" height="100px" />
                              </div>
                           </>
                              ) : null
                              }
                              
                        </div>
                        {/* <div 
                              className="middle-container" value={weapon}
                                 onDrop={(event) => equipItem(event)} 
                                 onDragOver={(event) => event.preventDefault()}>
                              {weapon.item_id ? (
                                    <img id={weapon.item_id} className="true" 
                                             src={weapon.image}
                                             onDragStart={(event) => handleDrag(event)} 
                                             onDrag={(event) => event.preventDefault()} 
                                             width="70px" height="100px" />
                              ) : null
                              }
                        </div> */}
                     </div>
                     <div className="market-equipment-bottom-container">
                        <div className="boot-container" 
                              // onDrop={(event) => equipItem(event)} 
                              // onDragOver={(event) => event.preventDefault()}
                              >
                           {boots.item_id ? (
                              <div>
                              {/* <div className="inventory-square-hover">
                              <span>{boots.item_name}</span>
                              <div className="i-square-hover-stats">
                                 <div><span>Attack: </span>{boots.attack}</div>
                                 <div><span>Armor: </span>{boots.armor}</div>
                                 <div><span>Strength: </span>{boots.strength ? boots.strength : 0}</div>
                                 <div><span>Agility: </span>{boots.agility ? boots.agility : 0}</div>
                              </div> */}
                           <div>
                              <img id={boots.item_id} className="true"
                                       src={boots.image} 
                                       // onDragStart={(event) => handleDrag(event)} 
                                       // onDrag={(event) => event.preventDefault()}  
                                       width="70px" height="100px" />
                                       </div>
                                       </div>
                           ) : null
                           }
                           </div>
                        </div>
                </div>
   </div>
                <div className="market-inventory-container">
              
               {mappedInventory}
               </div>
   </div>
               <div className="market-inventory-tab-container">

               </div>
            </div>
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
const MapStateToProps = reduxState => reduxState.hero
export default connect(MapStateToProps)(Market);