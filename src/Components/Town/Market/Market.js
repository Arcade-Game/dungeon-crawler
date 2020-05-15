import React, {useState, useEffect, useRef} from "react";
import {TweenMax, Power3} from "gsap";
import {connect} from "react-redux"
import { equipItem, unequipItem, replaceItem } from "../../../Redux/reducers/heroReducer"
import "./Market.scss";

const Market = (props) => {
      const [tabToggle, setTabToggle] = useState("items"),
                [weapon, setWeapon] = useState(props.equipment[0]),
                [twoHand, setTwoHandWeapon] = useState(props.equipment[1]),
                [offHand, setOffHand] = useState(props.equipment[2]),
                [armor, setArmor] = useState(props.equipment[3]),
                [helm, setHelm] = useState(props.equipment[4]),
                [boots, setBoots] = useState(props.equipment[5]);

                const itemList = ["sword","axe","mace","armor","armor","shield", "sword","axe","mace","armor","armor","shield"]
                const potionList = ["health","health","health","health","strength","strength"]
                const data3 = ["unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown"]
                const data4 = ["unknown", "unknown", "unknown", "unknown"]
                const data5 = ["unknown", "unknown", "unknown", "unknown", "unknown", "unknown","unknown"]

   
      let marketContainer = useRef()

      useEffect (() => {
      TweenMax.fromTo(marketContainer, 1.5, {opacity: 0, ease: Power3.easeIn}, {opacity: 1, ease: Power3.easeOut})
   },[])

      useEffect (() => {
         setWeapon(props.equipment[0])
         setTwoHandWeapon(props.equipment[1])
         setOffHand(props.equipment[2])
         setArmor(props.equipment[3])
         setHelm(props.equipment[4])
         setBoots(props.equipment[5])
      },[props])

      const items = "items",
               potions = "potions",
               tab3 = "tab3",
               tab4 = "tab4",
               tab5 = "tab5"

      const equipItem = (event) => {
         // setOverlayToggle(false);
         event.preventDefault();
         const data = JSON.parse(event.dataTransfer.getData("text"))
         const {id, equipped} = data;
         if (equipped === "false") {
         console.log(props.inventory[id], id)
         props.equipItem(props.inventory[id], id)
         }
      },

      unEquipItem = (event) => {
         // setOverlayToggle(false)
            event.preventDefault();
            const data = JSON.parse(event.dataTransfer.getData("text"));
            console.log(data)
            const {id, equipped} = data;
            if (equipped ==="true"){
            console.log("remove: ", id)
            props.unequipItem(id)
         }
      },

      handleReplaceItem = (id, equipIndex) => {
         const inv = [...props.inventory],
                   equ = [...props.equipment]
         let copy = {...equ[equipIndex]}
         equ[equipIndex] = inv[id]
         inv.splice(id, 1, copy);
         props.replaceItem(inv, equ);
      },

      sellItem = (event) => {
         // setOverlayToggle(false)
         event.preventDefault();
         const data = JSON.parse(event.dataTransfer.getData("text"));
         const {id, equipped} = data;
         console.log("sell: ", id, equipped)
      },

      handleDrag = (event) => {
         // setOverlayToggle(true)
         const {id, className} = event.target;
         const data = JSON.stringify({id: id, equipped: className})
         event.dataTransfer.setData("text", data);
       },

      mapVender = (items) => {
         const mappedVender = items.map((el, i) => {
         return el ? (
            <div className="market-vendor-square"> <img className="market-vendor-square-image" key ={i} 
                     id={i} 
                     className="false"
                     alt={el} 
                     draggable="true" 
                     // onDragStart={(event) => handleDrag(event)} 
                     // onDrag={(event) => event.preventDefault()} 
                     width="82%" height="88%"
         /></div> ) : i < 12 ? <div className="market-vendor-square"></div> : null 
      })
      return mappedVender;
      }
      
      const mappedInventory = props.inventory.map((el, i) => {
         return el.item_type ? (
            <div className="market-inventory-square"> <img className="market-inventory-square-image" key ={el.item_id} 
                     id={i} 
                     className="false"
                     src={el.image} 
                     draggable="true" 
                     onDragStart={(event) => handleDrag(event)} 
                     onDrag={(event) => event.preventDefault()} 
                     width="82%" height="88%"
         /></div> ) : i < 8 ? <div className="market-inventory-square"></div> : null })

console.log(props)
   return (
      <section className="market-container" ref={el => {marketContainer = el}}
               onClick={(event) => props.stopPropagation(event)}
               > 
         <div className="vendor-container">
            {tabToggle === items ? (
               <div className="vendor-shop">
                  <div className="vendor-item-grid">
                     {mapVender(itemList)}
                     </div>
               </div>
            ) : null}
            {tabToggle === potions ? (
               <div className="vendor-shop">
                  <div className="vendor-item-grid">
                     {mapVender(potionList)}
                     </div>
               </div>
            ) : null}
            {tabToggle === tab3 ? (
               <div className="vendor-shop">
                  <div className="vendor-item-grid">
                     {mapVender(data3)}
                     </div>
               </div>
            ) : null}
            {tabToggle === tab4 ? (
               <div className="vendor-shop">
                  <div className="vendor-item-grid">
                     {mapVender(data4)}
                     </div>
               </div>
            ) : null}
            {tabToggle === tab5 ? (
               <div className="vendor-shop">
                  <div className="vendor-item-grid">
                     {mapVender(data5)}
                     </div>
               </div>
            ) : null}
            
            {/* <div className="trade-window"></div> */}
            <div className="market-inventory-screen-container">
            <div className="hero-panel">
                <section className="market-equipment">
                              <section className="market-equipment-top-container">
                                    <div className="market-helm-container" 
                                          onDrop={(event) => equipItem(event)} 
                                          onDragOver={(event) => event.preventDefault()}>
                                       {helm.item_id ? (
                                          <img id={helm.item_id} className="true"
                                                   src={helm.image} 
                                                onDragStart={(event) => handleDrag(event)} 
                                                onDrag={(event) => event.preventDefault()}  
                                                width="70px" height="100px" />
                                       ) : null }
                                    </div>
                                    <div className="inventory-square-hover">
                                          <span>{helm.item_name}</span>
                                          <div className="i-square-hover-stats">
                                             <div><span>Attack: </span>{helm.attack}</div>
                                             <div><span>Armor: </span>{helm.armor}</div>
                                             <div><span>Strength: </span>{helm.strength ? helm.strength : 0}</div>
                                             <div><span>Agility: </span>{helm.agility ? helm.agility : 0}</div>
                                          </div> 
                                    </div> 
                           </section>
                       
                     

                  <section className="market-equipment-middle-container">
                              <div className="market-middle-container" value={weapon}
                                                onDrop={(event) => equipItem(event)} 
                                                onDragOver={(event) => event.preventDefault()}
                                                >
                                             {weapon.item_id ? (
                                                   <img id={weapon.item_id} className="true" 
                                                            src={weapon.image}
                                                            onDragStart={(event) => handleDrag(event)} 
                                                            onDrag={(event) => event.preventDefault()} 
                                                            width="95%" height="95%" />
                                             ) : null }
                                             {/* <div className="inventory-square-hover">
                                                <span>{weapon.item_name}</span>
                                                <div className="i-square-hover-stats">
                                                   <div><span>Attack: </span>{weapon.attack}</div>
                                                   <div><span>Armor: </span>{weapon.armor}</div>
                                                   <div><span>Strength: </span>{weapon.strength ? weapon.strength : 0}</div>
                                                   <div><span>Agility: </span>{weapon.agility ? weapon.agility : 0}</div>
                                                </div>
                                             </div> */}
                              </div>
         
                              <div className="market-middle-container" value={armor}
                                                onDrop={(event) => equipItem(event)} 
                                                onDragOver={(event) => event.preventDefault()}
                                                >
                                             {armor.item_id ? (

                                                <img id={armor.item_id} className="true"
                                                            src={armor.image} 
                                                            onDragStart={(event) => handleDrag(event)} 
                                                            onDrag={(event) => event.preventDefault()}  
                                                            width="95%" height="95%" />
                                             ) : null }
                                             {/* <div className="inventory-square-hover">
                                                <span>{armor.item_name}</span>
                                                <div className="i-square-hover-stats">
                                                   <div><span>Attack: </span>{armor.attack}</div>
                                                   <div><span>Armor: </span>{armor.armor}</div>
                                                   <div><span>Strength: </span>{armor.strength ? armor.strength : 0}</div>
                                                   <div><span>Agility: </span>{armor.agility ? armor.agility : 0}</div>
                                                </div>
                                             </div> */}
                              </div>
               
            
                              <div className="market-middle-container" value={offHand}
                                       onDrop={(event) => equipItem(event)} 
                                       onDragOver={(event) => event.preventDefault()}
                                       >
                                          {offHand.item_id ? (
                                             <img id={offHand.item_id} className="true" 
                                                      src={offHand.image}  
                                                      onDragStart={(event) => handleDrag(event)} 
                                                      onDrag={(event) => event.preventDefault()}
                                                      width="95%" height="95%" />
                                          ) : null }
                                          {/* <div className="inventory-square-hover">
                                             <span>{offHand.item_name}</span>
                                             <div className="i-square-hover-stats">
                                                <div><span>Attack: </span>{offHand.attack}</div>
                                                <div><span>Armor: </span>{offHand.armor}</div>
                                                <div><span>Strength: </span>{offHand.strength ? offHand.strength : 0}</div>
                                                <div><span>Agility: </span>{offHand.agility ? offHand.agility : 0}</div>
                                             </div> */}
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
                  </section>
                  <section className="market-equipment-bottom-container">
                                          <div className="market-boots-container" 
                                                onDrop={(event) => equipItem(event)} 
                                                onDragOver={(event) => event.preventDefault()}
                                                >
                                                         {boots.item_id ? (
                                                            <img id={boots.item_id} className="true"
                                                                     src={boots.image} 
                                                                     onDragStart={(event) => handleDrag(event)} 
                                                                     onDrag={(event) => event.preventDefault()}  
                                                                     width="70px" height="100px" />
                                                         ) : null }
                                                            {/* <div className="inventory-square-hover">
                                                            <span>{boots.item_name}</span>
                                                            <div className="i-square-hover-stats">
                                                               <div><span>Attack: </span>{boots.attack}</div>
                                                               <div><span>Armor: </span>{boots.armor}</div>
                                                               <div><span>Strength: </span>{boots.strength ? boots.strength : 0}</div>
                                                               <div><span>Agility: </span>{boots.agility ? boots.agility : 0}</div>
                                                            </div> */}
                                          </div>
                  </section>
            </section>
         
                <section className="market-inventory-container"
                onDrop={(event) => unEquipItem(event)}
                onDragOver={(event) => event.preventDefault()}
                >
               {mappedInventory}
               </section>


         </div> {/* hero panel*/}
               <div className="market-inventory-tab-container"></div>
      </div>{/*market-inventory-screen*/}
   </div> {/*vender container*/}

         <div className="vendor-tabs">
                     {tabToggle === items ? (
                        <h2 className= "tab tab-start-on"> Items </h2>
                        ) : (<h2 className="tab tab-start-off"
                                    onClick={() => setTabToggle(items)}> Items</h2> 
                        )
                     }
                     {tabToggle  === potions ? (
                     <h2 className= "tab tab-on"> Potions</h2>
                        ) : (<h2 className="tab tab-off"
                                    onClick={() => setTabToggle(potions)}> Potions</h2> 
                        )
                     }
                     {tabToggle  === tab3 ? (
                     <h2 className= "tab tab-on"> tab3 </h2>
                        ) : (<h2 className="tab tab-off"
                                    onClick={() => setTabToggle(tab3)}> tab3</h2> 
                        )
                     }
                     {tabToggle  === tab4 ? (
                     <h2 className= "tab tab-on"> tab4 </h2>
                        ) : (<h2 className="tab tab-off"
                                    onClick={() => setTabToggle(tab4)}> tab4</h2> 
                        )
                     }
                     {tabToggle  === tab5 ? (
                     <h2 className= "tab tab-end-on"> tab5 </h2>
                        ) : (<h2 className="tab tab-end-off"
                                    onClick={() => setTabToggle(tab5)}> tab5</h2> 
                        )
                     }
                     {/* {tabToggle  === "tab6" ? (
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
                     }  */}
         </div>

   </section>
   )
}
const MapStateToProps = reduxState => reduxState.hero
export default connect(MapStateToProps, {equipItem, unequipItem, replaceItem})(Market);