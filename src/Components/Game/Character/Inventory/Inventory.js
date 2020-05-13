import React, {useState,useEffect} from "react";
import {connect} from "react-redux";
import {equipItem, unequipItem, deleteItem} from "../../../../Redux/reducers/heroReducer";
import Equipment from "./Equipment";
import "./Inventory.scss";
import "./RareInventory.scss";
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
         const {id, equipped} = data;
         if (equipped ==="true"){
         props.unequipItem(id)
         }
      },

      deleteItem = (event) => {
      setOverlayToggle(!overlayToggle)
      event.preventDefault();
      const data = JSON.parse(event.dataTransfer.getData("text"));
      const {id, equipped} = data;
      if (equipped ==="true"){
         props.deleteItem(equipment[id].item_type, equipped)
         } else {
            props.deleteItem(id, equipped)
         }
      },

      handleDrag = (event) => {
      setOverlayToggle(!overlayToggle)
      const {id, className} = event.target;
      const data = JSON.stringify({id: id, equipped: className})
      console.log(data)
      event.dataTransfer.setData("text", data)
      }

      const mappedInventory = props.inventory.map((el, i) => {
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
const mapStateToProps = reduxState => reduxState.hero
export default connect(mapStateToProps, {equipItem, unequipItem, deleteItem})(Inventory);