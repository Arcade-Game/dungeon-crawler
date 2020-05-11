import React, {useState,useEffect} from "react";
import {connect} from "react-redux";
import {equipItem, unequipItem, deleteItem} from "../../../../Redux/reducers/heroReducer";
import Equipment from "./Equipment";
import "./Inventory.scss";
import {GiTwoCoins} from 'react-icons/gi';

const Inventory = (props) => {
   const {hero, stats, inventory, equipment} = props
   const {equipmentToggle, inventoryToggle} = props
   const [currency, setCurrency] = useState(0),
             [overlayToggle, setOverlayToggle] = useState(false);

   useEffect (() => {
console.log("hit")
   },[props])

   useEffect (() => {
      
      console.log("props.newMoney", props.newMoney)
      setCurrency(currency+props.newMoney)
   }, [props.newMoney])


   const equipItem = (event) => {
      setOverlayToggle(!overlayToggle)
      event.preventDefault();
      const data = JSON.parse(event.dataTransfer.getData("text"))
      const {id} = data;
      props.equipItem(inventory[id], id)
   },

   unEquipItem = (event) => {
      setOverlayToggle(!overlayToggle)
      event.preventDefault();
      const data = JSON.parse(event.dataTransfer.getData("text"));
      console.log(data)
      const {id, equipped} = data;
      console.log("remove: ", id)
      if (equipped ==="true"){
      props.unequipItem(id)
      }
   },

   deleteItem = (event) => {
   setOverlayToggle(!overlayToggle)
   event.preventDefault();
   const data = JSON.parse(event.dataTransfer.getData("text"));
   const {id, equipped} = data;
   console.log("delete: ", id, equipped)
   if (equipped ==="true"){
      props.deleteItem(equipment[id].item_type)
      } else {
         props.deleteItem(id)
      }

   // props.deleteItem(id, equipped)

   // axios.put(`/api/inventory/item/${id}`, {equipped}).then(res => {
   //    console.log(res.data)
      // setInventory(res.data.inventory)
      // const {equipment} = res.data
      //       if (!equipment[0].id){
      //          setWeapon(equipment[0])}
      //       if (!equipment[1].id){
      //          setOffHand(equipment[1])}
      //       if (!equipment[2].id){
      //          setArmor(equipment[2])}
      // }).catch (err => console.log(err))
   },

   handleDrag = (event) => {
   setOverlayToggle(!overlayToggle)
   const {id, className} = event.target;
   const data = JSON.stringify({id: id, equipped: className})
   console.log(data)
   event.dataTransfer.setData("text", data)
   }

console.log(props)
console.log(props.inventory)
      const mappedInventory = props.inventory.map((el, i) => {
         return el.item_type ? (
            <div className="inventory-square"> <img key ={el.item_id} 
                     id={i} 
                     className="false"
                     src={el.image} 
                     draggable="true" 
                     onDragStart={(event) => handleDrag(event)} 
                     onDrag={(event) => event.preventDefault()} 
                     width="82%" height="88%"
                  /></div>)  : i < 8 ? <div className="inventory-square"></div> : null
         })

   console.log(props)
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
               <Equipment handleDrag = {handleDrag}
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
const mapStateToProps = reduxState => reduxState.hero
export default connect(mapStateToProps, {equipItem, unequipItem, deleteItem})(Inventory);