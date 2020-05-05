import React, {useState,useEffect} from "react"
import Equipment from "./Equipment"
import axios from "axios";
import "./Inventory.scss";
import {GiTwoCoins} from 'react-icons/gi';

const Inventory = (props) => {
   const {equipmentToggle, inventoryToggle} = props
   const [inventory, setInventory] = useState([]),
             [weapon, setWeapon] = useState({}),
             [armor, setArmor] = useState({}),
             [offHand, setOffHand] = useState({}),
             [currency, setCurrency] = useState(0),
             [overlayToggle, setOverlayToggle] = useState(false);
            //  [selectedItem, setSelectedItem] = useState({});

   useEffect (()=> {
      axios.get("/api/inventory").then(res => {
         console.log("res.data", res.data)
         setInventory(res.data)
      })
   },[props])

   const equipItem = (event) => {
      setOverlayToggle(!overlayToggle)
      event.preventDefault();
      const data = JSON.parse(event.dataTransfer.getData("text"))
      const {id} = data;
      const item = inventory[id];
         axios.put(`/api/inventory/${id}`, {item}).then(res => {
            setInventory(res.data.inventory)
            const {equipment} = res.data
                  if (equipment[0].id >=0){
                     setWeapon(equipment[0])}
                  if (equipment[1].id >=0){
                     setOffHand(equipment[1])}
                  if (equipment[2].id >= 0){
                     setArmor(equipment[2])}
            }).catch (err => console.log(err))
   },

   unEquipItem = (event) => {
      setOverlayToggle(!overlayToggle)
      event.preventDefault();
      const data = JSON.parse(event.dataTransfer.getData("text"));
      console.log(data)
      const {id} = data;
      axios.put(`/api/equipment/${id}`).then(res => {
         console.log(res.data)
         setInventory(res.data.inventory)
         const {equipment} = res.data
               if (!equipment[0].id){
                  setWeapon(equipment[0])}
               if (!equipment[1].id){
                  setOffHand(equipment[1])}
               if (!equipment[2].id){
                  setArmor(equipment[2])}
         }).catch (err => console.log(err))
   },

   deleteItem = (event) => {
   setOverlayToggle(!overlayToggle)
   event.preventDefault();
   const data = JSON.parse(event.dataTransfer.getData("text"));
   const {id, equipped} = data;
   axios.put(`/api/inventory/item/${id}`, {equipped}).then(res => {
      console.log(res.data)
      setInventory(res.data.inventory)
      const {equipment} = res.data
            if (!equipment[0].id){
               setWeapon(equipment[0])}
            if (!equipment[1].id){
               setOffHand(equipment[1])}
            if (!equipment[2].id){
               setArmor(equipment[2])}
      }).catch (err => console.log(err))
   },

   handleDrag = (event) => {
   setOverlayToggle(!overlayToggle)
   const {id, className} = event.target;
   const data = JSON.stringify({id: id, equipped: className})
   console.log(data)
   event.dataTransfer.setData("text", data)
   }

// console.log("armor: ", armor)
console.log("weapon: ", weapon)
// console.log("offHand: ", offHand)
console.log("inventory: ", inventory)



const mappedInventory = inventory.map((el, i) => {
   return inventory[i].type ? (
         <div className="inventory-square"> <img key ={el.id} 
               id={i} 
               className="false"
               src={el.image} 
               draggable="true" 
               onDragStart={(event) => handleDrag(event)} 
               onDrag={(event) => event.preventDefault()} 
               width="82%" height="88%"
            /></div>)  : i < 8 ? <div className="inventory-square"></div> : null
   })

   return (
      <div>
         {overlayToggle ? (<div className="overlay"
                  onDrop={(event) => deleteItem(event)}
                  onDragOver={(event) => event.preventDefault()}>DELETE</div>
            ) : null
         }
      <div className="inventory-screen-container">
         {equipmentToggle ? (
            <>
               <section className="stats-container">
                  <div>Name: </div>
                  <div>Level: </div>
                  <div>Health: </div>
                  <div>Armor: </div>
                  <div>Damage: </div>
               </section>
               <Equipment  offHand = {offHand}
                                       armor = {armor}
                                       weapon = {weapon}
                                       handleDrag = {handleDrag}
                                       equipItem = {equipItem}
                              />
            </>
            ) : null
         }
         {inventoryToggle ? (
            <>
            
               <section className="inventory-container"
                              onDrop={(event) => unEquipItem(event)}
                              onDragOver={(event) => event.preventDefault()}>
                  {mappedInventory}

               </section>
               <div className="currency-container">{currency}{' '}<GiTwoCoins color={"yellow"} /></div>
            </>
            ) : null 
         }
      </div>
   </div>
   )
}

export default Inventory;