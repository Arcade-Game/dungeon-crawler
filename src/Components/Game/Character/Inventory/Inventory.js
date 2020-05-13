import React, {useState,useEffect} from "react";
import Equipment from "./Equipment";
import "./Inventory.scss";
import "./RareInventory.scss";
import {GiTwoCoins} from 'react-icons/gi';
import { unequipItem } from "../../../../Redux/reducers/heroReducer";

const Inventory = (props) => {
   const {equipmentToggle, inventoryToggle, updateSessionInventory} = props
   const [inventory, setInventory] = useState(props.inventory),
             [equipment, setEquipment] = useState(props.equipment),
             [currency, setCurrency] = useState(0),
             [overlayToggle, setOverlayToggle] = useState(false);


      const weapon = "weapon",
               twoHand = "two-hand",
                armor = "armor",
                offHand = "off-hand",
                helm = "helm",
                boots = "boots";

      useEffect (() => {
         console.log("hit")
      },[props])

      useEffect (() => {
         console.log("props.newMoney", props.newMoney)
         setCurrency(currency+props.newMoney)
      }, [props.newMoney])

      const updateInventory = () => {
         setInventory(inventory)
         setEquipment(equipment)
         console.log(equipment)
         console.log(inventory)
      },

      equipItem = (event) => {
         setOverlayToggle(!overlayToggle)
         event.preventDefault();
         const data = JSON.parse(event.dataTransfer.getData("text"))
         const {id, equipped} = data;
         if (equipped === "false") {
         console.log(inventory)

         switch (inventory[id].item_type) {
            case weapon:
               if (equipment[0].item_id){
                  replaceItem(id, 0)
               } else {
                  equipment[0] = inventory[id]
                  inventory.splice(id, 1, 0)
               }
               break;
            case twoHand:
               if (equipment[1].item_id){
                  replaceItem(id, 1)
               } else {
                  equipment[1] = inventory[id]
                  inventory.splice(id, 1, 0)
               }
                  break;
            case offHand:
               if (equipment[2].item_id){
                  replaceItem(id, 2)
               } else {
                  equipment[2] = inventory[id]
                  inventory.splice(id, 1, 0)
               }
            case armor:
               if (equipment[3].item_id){
                  replaceItem(id, 3)
               } else {
                  equipment[3] = inventory[id]
                  inventory.splice(id, 1, 0)
               }
               break;
            case helm:
               if (equipment[4].item_id){
                  replaceItem(id, 4)
               } else {
                  equipment[4] = inventory[id]
                  inventory.splice(id, 1, 0)
               }
               break;
            case boots:
               if (equipment[5].item_id){
                  replaceItem(id, 5)
               } else {
                  equipment[5] = inventory[id]
                  inventory.splice(id, 1, 0)
               }
               break;
            }
            updateInventory()
         }
      },

      replaceItem = (id, equipIndex) => {
         let copy = {...equipment[equipIndex]}
         equipment[equipIndex] = inventory[id]
         inventory.splice(id, 1, copy)
      },

      unEquipItem = (event) => {
         setOverlayToggle(!overlayToggle)
         event.preventDefault();
         const data = JSON.parse(event.dataTransfer.getData("text"));
         const {id, equipped} = data;
         console.log("un: ", id, equipped)
         if (equipped ==="true"){
         const equIndex = equipment.findIndex(item => item.item_id === +id);
            const invIndex = inventory.findIndex(e => e === 0)
               inventory.splice(invIndex, 1, equipment[equIndex])
               setInventory(inventory)
            const itemType = equipment[equIndex].item_type
               equipment[equIndex] = {type: `${itemType}`}
               setEquipment(equipment)
           
         }
         updateInventory()
      },

      deleteItem = (event) => {
      setOverlayToggle(!overlayToggle)
      event.preventDefault();
      const data = JSON.parse(event.dataTransfer.getData("text"));
      const {id, equipped} = data;
      if (equipped ==="true"){
         switch (equipment[id].item_type){
            case weapon:
               equipment[0] = {type: "weapon"};
               break;
            case twoHand:
               equipment[1] = {type: "two-hand"};
                  break;
            case offHand:
               equipment[2] = {type: "off-hand"};
                  break;
            case armor:
               equipment[3] = {type: "armor"};
                   break;
            case helm:
               equipment[4] = {type: "helm"};
                   break;
            case boots:
               equipment[5] = {type: "boots"};
                   break;
            }
         } else {
            setInventory(inventory.splice(+id, 1, 0))
         }
         updateInventory()
      },

      handleDrag = (event) => {
      setOverlayToggle(!overlayToggle)
      const {id, className} = event.target;
      const data = JSON.stringify({id: id, equipped: className})
      console.log(data)
      event.dataTransfer.setData("text", data)
      }

      const mappedInventory = inventory.map((el, i) => {
         return el.item_type ? (
            <div className="inventory-square" style={el.rarity === 'epic' ? {background: 'radial-gradient(indigo, black 90%)'} : el.rarity === 'rare' ? {background: 'radial-gradient(darkblue, black 90%)'} : el.rarity === 'legendary' ? {background: 'radial-gradient(#600000, black 90%)'} : null}
            
            > <img className="inventory-square-image" key ={el.item_id} 
                     id={i} 
                     className="false"
                     src={el.image} 
                     draggable="true" 
                     onDragStart={(event) => handleDrag(event)} 
                     onDrag={(event) => event.preventDefault()} 
                     width="82%" height="88%"
         /><div className="inventory-square-hover">
            <span style={el.rarity === 'epic' ? {color: 'indigo'} : el.rarity === 'rare' ? {color: 'darkblue', fontWeight: '600'} : el.rarity === 'legendary' ? {color: '#600000'} : null}>{el.item_name}</span>
            <div className="i-square-hover-stats">
               <div><span>Attack: </span>{el.attack}</div>
               <div><span>Armor: </span>{el.armor}</div>
               <div><span>Strength: </span>{el.strength ? el.strength : 0}</div>
               <div><span>Agility: </span>{el.agility ? el.agility : 0}</div>
            </div>
            </div>
            </div>)  : i < 8 ? <div className="inventory-square"></div> : null
         })

   console.log("props-inventory", props)
   return (
      <>
         {overlayToggle ? (
            <div className="overlay"
                     onDrop={(event) => deleteItem(event)}
                     onDragOver={(event) => event.preventDefault()}>DELETE</div>
            ) : null
         }
      {equipmentToggle || inventoryToggle ?
         <div className="inventory-screen-container">
         {equipmentToggle ? (
            <>
               <Equipment 
                  equipment = {equipment}
                  handleDrag = {handleDrag}
                  equipItem = {equipItem}
                  inventoryToggle={inventoryToggle}
               />
            </> ) : null
         }
         {inventoryToggle ? (
            <>
               <section className="inventory-container"
                              onDrop={(event) => unEquipItem(event)}
                              onDragOver={(event) => event.preventDefault()}
                              >
                  {mappedInventory}

               <div className="currency-container"><span>{currency}</span><GiTwoCoins color={"yellow"} /></div>
               </section>
            </>
            ) : null 
         }
      </div> : null
      }
      
   </>
   )
}
// const mapStateToProps = reduxState => reduxState.hero
export default Inventory;