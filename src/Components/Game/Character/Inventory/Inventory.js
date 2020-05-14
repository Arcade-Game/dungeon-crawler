import React, {useState,useEffect} from "react";
import Equipment from "./Equipment";
import "./Inventory.scss";
import "./RareInventory.scss";
import {GiTwoCoins} from 'react-icons/gi';

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
         console.log("inv effect hit")
         setInventory(props.inventory)
         setEquipment(props.equipment)
      },[props])

      useEffect (() => {
      updateSessionInventory(inventory, equipment);
      },[equipment, inventory])


      useEffect (() => {
         console.log("props.newMoney", props.newMoney)
         setCurrency(currency+props.newMoney)
      }, [props.newMoney])

      const updateInventory = (inv, equ) => {
         setInventory(inv);
         setEquipment(equ);
         updateState()
      },

      updateState = () => {
         updateSessionInventory(inventory, equipment);
         console.log("game update hit")
      },

      equipItem = (event) => {
         setOverlayToggle(false);
         event.preventDefault();
         const data = JSON.parse(event.dataTransfer.getData("text"))
         const {id, equipped} = data;
         const inv = [...inventory],
                  equ = [...equipment]
         if (equipped === "false") {

         switch (inv[id].item_type) {
            case weapon:
               if (equ[0].item_id){
                  replaceItem(id, 0)
               } else {
                  equ[0] = inv[id]
                  inv.splice(id, 1, 0)
                  updateInventory(inv, equ);
               }
               break;
            case twoHand:
               if (equ[1].item_id){
                  replaceItem(id, 1);
               } else {
                  equ[1] = inv[id];
                  inv.splice(id, 1, 0);
                  updateInventory(inv, equ);
               }
                  break;
            case offHand:
               if (equ[2].item_id){
                  replaceItem(id, 2);
               } else {
                  equ[2] = inv[id];
                  inv.splice(id, 1, 0);
                  updateInventory(inv, equ);
               }
               break;
            case armor:
               if (equ[3].item_id){
                  replaceItem(id, 3);
               } else {
                  equ[3] = inv[id];
                  inv.splice(id, 1, 0);
                  updateInventory(inv, equ);
               }
               break;
            case helm:
               if (equ[4].item_id){
                  replaceItem(id, 4);
               } else {
                  equ[4] = inv[id];
                  inv.splice(id, 1, 0);
                  updateInventory(inv, equ);
               }
               break;
            case boots:
               if (equ[5].item_id){
                  replaceItem(id, 5);
               } else {
                  equ[5] = inv[id];
                  inv.splice(id, 1, 0);
                  updateInventory(inv, equ);
               }
               break;
            }
         }
      },

      replaceItem = (id, equipIndex) => {
         const inv = [...inventory],
                   equ = [...equipment]
         let copy = {...equ[equipIndex]}
         equ[equipIndex] = inv[id]
         inv.splice(id, 1, copy);
         updateInventory(inv, equ);
      },

      unEquipItem = (event) => {
         setOverlayToggle(false);
         event.preventDefault();
         const data = JSON.parse(event.dataTransfer.getData("text"));
         const {id, equipped} = data;
         const inv = [...inventory],
                   equ = [...equipment];
         if (equipped ==="true"){
         const equIndex = equ.findIndex(item => item.item_id === +id);
            const invIndex = inv.findIndex(e => e === 0);
               inv.splice(invIndex, 1, equ[equIndex]);
            const itemType = equ[equIndex].item_type
               equ[equIndex] = {type: `${itemType}`}
         }
         updateInventory(inv, equ);
      },

      deleteItem = (event) => {
      setOverlayToggle(!overlayToggle);
      event.preventDefault();
      const data = JSON.parse(event.dataTransfer.getData("text"));
      const {id, equipped} = data;
      const inv = [...inventory],
                equ = [...equipment];
      if (equipped ==="true"){
         const equIndex = equ.findIndex(item => item.item_id === +id);
         switch (equ[equIndex].item_type){
            case weapon:
               equ[0] = {type: "weapon"};
               break;
            case twoHand:
               equ[1] = {type: "two-hand"};
                  break;
            case offHand:
               equ[2] = {type: "off-hand"};
                  break;
            case armor:
               equ[3] = {type: "armor"};
                   break;
            case helm:
               equ[4] = {type: "helm"};
                   break;
            case boots:
               equ[5] = {type: "boots"};
                   break;
            }
         } else {
            setInventory(inv.splice(+id, 1, 0));
         }
         updateInventory(inv, equ);
      },

      handleDrag = (event) => {
      setOverlayToggle(true)
      const {id, className} = event.target;
      const data = JSON.stringify({id: id, equipped: className})
      event.dataTransfer.setData("text", data);
      }

      console.log("inv props: ", props)
      const mappedInventory = inventory.map((el, i) => {
         return el.item_type ? (
            <div className="inventory-square" style={el.rarity === 'epic' ? {background: 'radial-gradient(indigo, black 90%)'} : el.rarity === 'rare' ? {background: 'radial-gradient(darkblue, black 90%)'} : el.rarity === 'legendary' ? {background: 'radial-gradient(#600000, black 90%)'} : null}
            
            > <img className="inventory-square-image" key ={el.item_id} 
                     id={i} 
                     className="false"
                     src={el.image} 
                     alt={el.item_name}
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
         });

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

export default Inventory;