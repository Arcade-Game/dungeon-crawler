import React, {useState,useEffect} from "react"
import axios from "axios";
import "./Inventory.scss"

const Inventory = () => {
   const [inventory, setInventory] = useState([]),
             [weapon, setWeapon] = useState({}),
             [armor, setArmor] = useState({}),
             [offHand, setOffHand] = useState({});
            //  [selectedItem, setSelectedItem] = useState({});

   useEffect (()=> {
      axios.get("/api/inventory").then(res => {
         setInventory(res.data)
      })
   },[])

   const equipItem = (event) => {
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
      event.preventDefault();
      const data = JSON.parse(event.dataTransfer.getData("text"));
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

   handleDrag = (event) => {
   const {id} = event.target;
   const data = JSON.stringify({id})
   event.dataTransfer.setData("text", data)
   }

// console.log("armor: ", armor)
console.log("weapon: ", weapon)
// console.log("offHand: ", offHand)
// console.log("inventory: ", inventory)

   return (
   <div className="inventory-screen-container">
      <section className="equipment-container">
         <div className="equipment-top-container">
            <div className="helm-container" 
                    onDrop={(event) => equipItem(event)} 
                    onDragOver={(event) => event.preventDefault()}>
            </div>
         </div>
         <div className="equipment-middle-container">
            <div className="middle-container" value={offHand}
                     onDrop={(event) => equipItem(event)} 
                     onDragOver={(event) => event.preventDefault()}>
                  {offHand.id ? (
                     <img id={offHand.id} className={offHand.type} 
                     src={offHand.image}  
                     onDragStart={(event) => handleDrag(event)} 
                     onDrag={(event) => event.preventDefault()}
                     width="70px" height="100px" />
                  ) : null
                  }
            </div>
            <div className="middle-container" value={armor}
                     onDrop={(event) => equipItem(event)} 
                     onDragOver={(event) => event.preventDefault()}>
                  {armor.id ? (
                     <img id={armor.id} className={armor.type} 
                              src={armor.image}  
                              onDragStart={(event) => handleDrag(event)} 
                              onDrag={(event) => event.preventDefault()}  
                              width="70px" height="100px" />
                  ) : null
                  }
                        
            </div>
            <div 
                    className="middle-container" value={weapon}
                     onDrop={(event) => equipItem(event)} 
                     onDragOver={(event) => event.preventDefault()}>
                        {weapon.id || weapon.id == 0 ? (
                        <img id={weapon.id} className={weapon.type} 
                              src={weapon.image}
                              onDragStart={(event) => handleDrag(event)} 
                              onDrag={(event) => event.preventDefault()} 
                              width="70px" height="100px" />
                     ) : null
                     }
            </div>
         </div>
         <div className="equipment-bottom-container">
            <div className="boot-container" 
                    onDrop={(event) => equipItem(event)} 
                    onDragOver={(event) => event.preventDefault()}>
            </div>
          </div>
      </section>
      <section className="inventory-container"
                     onDrop={(event) => unEquipItem(event)}
                     onDragOver={(event) => event.preventDefault()}>
        {inventory.map((el, index) => {
           return  <img key ={el.id} 
                                 id={index} 
                                 className={el.type}
                                 src={el.image} 
                                 draggable="true" 
                                 onDragStart={(event) => handleDrag(event)} 
                                 onDrag={(event) => event.preventDefault()} 
                                 width="60px" height="100px"/>
         })}
      </section>
   </div>
   )
}

export default Inventory;