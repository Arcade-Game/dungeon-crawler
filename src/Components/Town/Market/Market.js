import React, {useState, useEffect, useRef} from "react";
import {TweenMax, Power3} from "gsap";
import {connect} from "react-redux"
import { equipItem, unequipItem, replaceItem, deleteItem } from "../../../Redux/reducers/heroReducer"
import "./Market.scss";
import axios from "axios";

const Market = (props) => {
      const [tabToggle, setTabToggle] = useState("items"),
                [weapon, setWeapon] = useState(props.equipment[0]),
                [twoHand, setTwoHandWeapon] = useState(props.equipment[1]),
                [offHand, setOffHand] = useState(props.equipment[2]),
                [armor, setArmor] = useState(props.equipment[3]),
                [helm, setHelm] = useState(props.equipment[4]),
                [boots, setBoots] = useState(props.equipment[5]),
                [itemName, setItemName] = useState(),
                [itemAttack, setItemAttack] = useState(),
                [itemArmor, setItemArmor] = useState(),
                [itemPrice, setItemPrice] = useState(),
                {vendorEquipmentList} = props

                const potionList = ["health","health","health","health","strength","strength"]
                const data3 = ["unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown", "unknown"]
                const data4 = ["unknown", "unknown", "unknown", "unknown"]
                const data5 = ["unknown", "unknown", "unknown", "unknown", "unknown", "unknown","unknown"]
               
                const items = "items",
               potions = "potions",
               tab3 = "tab3",
               tab4 = "tab4",
               tab5 = "tab5",
               typeWeapon = "weapon",
               typeTwoHand = "two-hand",
               typeArmor = "armor",
               typeOffHand = "off-hand",
               typeHelm = "helm",
               typeBoots = "boots";

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

     
      const equipItem = (event) => {
         // setOverlayToggle(false);
         event.preventDefault();
         const data = JSON.parse(event.dataTransfer.getData("text"))
         const {id, equipped} = data;
         const inv = [...props.inventory],
         equ = [...props.equipment]
         if (equipped === "false") {
            console.log("false", inv, equ)
            console.log("switch", inv[id].item_type)
            switch (inv[id].item_type) {
               case typeWeapon:
                  if (equ[0].item_id){
                     console.log("weapon replace reducer hit")
                     handleReplaceItem(id, 0)
                  } else if ( equipped === "true") {
                     console.log("weapon reducer hit")
                     props.equipItem(props.inventory[id], id)
                  }
                  break;
               case typeTwoHand:
                  if (equ[1].item_id){
                     handleReplaceItem(id, 1);
                  } else {
                     props.equipItem(props.inventory[id], id)
                  }
                     break;
               case typeOffHand:
                  if (equ[2].item_id){
                     handleReplaceItem(id, 2);
                  } else {
                     props.equipItem(props.inventory[id], id)
                  }
                  break;
               case typeArmor:
                  if (equ[3].item_id){
                     handleReplaceItem(id, 3);
                  } else {
                     props.equipItem(props.inventory[id], id)
                  }
                  break;
               case typeHelm:
                  if (equ[4].item_id){
                     handleReplaceItem(id, 4);
                  } else {
                     props.equipItem(props.inventory[id], id)
                  }
                  break;
               case typeBoots:
                  if (equ[5].item_id){
                     handleReplaceItem(id, 5);
                  } else {
                     props.equipItem(props.inventory[id], id)
                  }
                  break;
               }
         }
      },

      unEquipItem = (event) => {
         // setOverlayToggle(false)
            event.preventDefault();
            const data = JSON.parse(event.dataTransfer.getData("text"));
            console.log(data)
            const {id, equipped} = data;
            if (equipped === "true"){
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
         event.preventDefault();
         const data = JSON.parse(event.dataTransfer.getData("text"));
         const {id, equipped} = data;
         console.log("DATA: ", data)
         if (equipped ==="true"){
            const index = props.equipment.findIndex(e => e.item_id === +id)
            props.hero.gold += props.equipment[index].price
            props.deleteItem(props.equipment[index].item_type, equipped)
            
         } else if (equipped === "false") {
            props.hero.gold += props.inventory[id].price;
            props.deleteItem(id, equipped)
         }
         props.saveGame();
      },

      buyItem = (event) => {
         // setOverlayToggle(false)
         event.preventDefault();
         const data = JSON.parse(event.dataTransfer.getData("text"));
         const {id, equipped} = data;
         if (equipped ==="buy"){
         console.log("buy: ", id, equipped)
      }
      // let index = props.inventory.findIndex(e => e === 0)
      // let newInventory = [...props.inventory]
      // newInventory[index] = vendorEquipmentList[id]
      // console.log(newInventory)
      // props.hero.gold -= props.inventory[id].price;
      // props.saveGame();
   },

      handleDrag = (event) => {
         // setOverlayToggle(true)
         const {id, className} = event.target;
         const data = JSON.stringify({id: id, equipped: className})
         event.dataTransfer.setData("text", data);
       },

      mapVendor = (vendorItems) => {
         const mappedVender = vendorItems.map((el, i) => {
         return el ? (
            <div className="market-vendor-square"> <img className="market-vendor-square-image" key ={i} 
                     id={i} 
                     className="buy"
                     src={el.image} 
                     onClick={() => {console.log(i)}}
                     onMouseOver={()=> { 
                        setItemName(el.item_name)
                        setItemAttack(el.attack)
                        setItemArmor(el.armor)
                        setItemPrice(el.price)}
                     }
                     onMouseLeave={()=> { 
                        setItemName()
                        setItemAttack()
                        setItemArmor()
                        setItemPrice()}
                     }
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
                     onMouseOver={()=> { 
                        setItemName(el.item_name)
                        setItemAttack(el.attack)
                        setItemArmor(el.armor)
                        setItemPrice(el.price)}
                     }
                     onMouseLeave={()=> { 
                        setItemName()
                        setItemAttack()
                        setItemArmor()
                        setItemPrice()}
                     }
                     draggable="true" 
                     onDragStart={(event) => handleDrag(event)} 
                     onDrag={(event) => event.preventDefault()} 
                     width="82%" height="88%"
         /></div> ) : i < 8 ? <div className="market-inventory-square"></div> : null })

// console.log(props)

   return (
      <section className="market-container" ref={el => {marketContainer = el}}
               onClick={(event) => props.stopPropagation(event)}
               > 
         <div className="vendor-container">
            {tabToggle === items ? (
               <div className="vendor-shop">
                  <div className="vendor-item-grid"
                          onDrop={(event) => sellItem(event)} 
                          onDragOver={(event) => event.preventDefault()}>
                     {mapVendor(vendorEquipmentList)}
                     </div>
               </div>
            ) : null}
            {tabToggle === potions ? (
               <div className="vendor-shop">
                  <div className="vendor-item-grid"
                          onDrop={(event) => sellItem(event)} 
                          onDragOver={(event) => event.preventDefault()}>
                     {mapVendor(potionList)}
                     </div>
               </div>
            ) : null}
            {tabToggle === tab3 ? (
               <div className="vendor-shop">
                  <div className="vendor-item-grid">
                     {mapVendor(data3)}
                     </div>
               </div>
            ) : null}
            {tabToggle === tab4 ? (
               <div className="vendor-shop">
                  <div className="vendor-item-grid">
                     {mapVendor(data4)}
                     </div>
               </div>
            ) : null}
            {tabToggle === tab5 ? (
               <div className="vendor-shop">
                  <div className="vendor-item-grid">
                     {mapVendor(data5)}
                     </div>
               </div>
            ) : null}
            
            {/* <div className="trade-window"></div> */}
            <div className="market-inventory-screen-container">
            <div className="hero-panel">
                <section className="market-equipment">
                              <section className="market-equipment-top-container">
                                    <div className="market-helm-container" 
                                          onDrop={(event) => {buyItem(event)
                                                                             equipItem(event)}} 
                                          onDragOver={(event) => event.preventDefault()}>
                                       {helm.item_id ? (
                                          <img id={helm.item_id} className="true"
                                                   src={helm.image} 
                                                   onMouseOver={()=> { 
                                                      setItemName(helm.item_name)
                                                      setItemAttack(helm.attack)
                                                      setItemArmor(helm.armor)
                                                      setItemPrice(helm.price)}
                                                   }
                                                onDragStart={(event) => handleDrag(event)} 
                                                onDrag={(event) => event.preventDefault()}  
                                                width="70px" height="100px" />
                                       ) : null }
                                    </div>
                           </section>
                       
                     

                  <section className="market-equipment-middle-container">
                              <div className="market-middle-container" value={weapon}
                                                onDrop={(event) => {buyItem(event)
                                                   equipItem(event)}} 
                                                onDragOver={(event) => event.preventDefault()}
                                                >
                                             {weapon.item_id ? (
                                                   <img id={weapon.item_id} className="true" 
                                                            src={weapon.image}
                                                            onMouseOver={()=> { 
                                                               setItemName(weapon.item_name)
                                                               setItemAttack(weapon.attack)
                                                               setItemArmor(weapon.armor)
                                                               setItemPrice(weapon.price)}
                                                            }
                                                            onDragStart={(event) => handleDrag(event)} 
                                                            onDrag={(event) => event.preventDefault()} 
                                                            width="95%" height="95%" />
                                             ) : null }
                              </div>
         
                              <div className="market-middle-container" value={armor}
                                                onDrop={(event) => {buyItem(event)
                                                   equipItem(event)}}
                                                onDragOver={(event) => event.preventDefault()}
                                                >
                                             {armor.item_id ? (

                                                <img id={armor.item_id} className="true"
                                                            src={armor.image}
                                                            onMouseOver={()=> { 
                                                               setItemName(armor.item_name)
                                                               setItemAttack(armor.attack)
                                                               setItemArmor(armor.armor)
                                                               setItemPrice(armor.price)}
                                                            }
                                                            onDragStart={(event) => handleDrag(event)} 
                                                            onDrag={(event) => event.preventDefault()}  
                                                            width="95%" height="95%" />
                                             ) : null }
                              </div>
               
                              <div className="market-middle-container" value={offHand}
                                       onDrop={(event) => {buyItem(event)
                                          equipItem(event)}} 
                                       onDragOver={(event) => event.preventDefault()}
                                       >
                                          {offHand.item_id ? (
                                             <img id={offHand.item_id} className="true" 
                                                      src={offHand.image}  
                                                      onMouseOver={()=> { 
                                                         setItemName(offHand.item_name)
                                                         setItemAttack(offHand.attack)
                                                         setItemArmor(offHand.armor)
                                                         setItemPrice(offHand.price)}
                                                      }
                                                      onDragStart={(event) => handleDrag(event)} 
                                                      onDrag={(event) => event.preventDefault()}
                                                      width="95%" height="95%" />
                                          ) : null }
                               </div>
                  </section>
                  <section className="market-equipment-bottom-container">
                     <div className="item-stats-hover">
                        <h4 className = "item-name"> {itemName}</h4>
                        <h4> Attack: {itemAttack}</h4>
                        <h4> Armor: {itemArmor}</h4>
                        <h4>  {itemPrice} Gold </h4>
                     </div>
                              <div className="market-boots-container" 
                                    onDrop={(event) => {buyItem(event)
                                       equipItem(event)}} 
                                    onDragOver={(event) => event.preventDefault()}
                                    >
                                             {boots.item_id ? (
                                                <img id={boots.item_id} className="true"
                                                         src={boots.image} 
                                                         onMouseOver={()=> { 
                                                            setItemName(boots.item_name)
                                                            setItemAttack(boots.attack)
                                                            setItemArmor(boots.armor)
                                                            setItemPrice(boots.price)}
                                                         }
                                                         onDragStart={(event) => handleDrag(event)} 
                                                         onDrag={(event) => event.preventDefault()}  
                                                         width="70px" height="100px" />
                                             ) : null }
                              </div>
                  </section>
                  <div className="market-gold-container">
                     <div className="market-gold">{props.hero.gold} Gold</div>
                  </div>
            </section>
         
                <section className="market-inventory-container"
                onDrop={(event) => {buyItem(event)
                                                   unEquipItem(event)}}
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
export default connect(MapStateToProps, {equipItem, unequipItem, replaceItem, deleteItem})(Market);