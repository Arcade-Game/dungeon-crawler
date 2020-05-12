import React, {useState, useEffect} from "react"
import {connect} from "react-redux"
const Equipment = (props) => {
   const {handleDrag, equipItem, inventoryToggle} = props;
   const [weapon, setWeapon] = useState(props.equipment[0]),
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
      console.log(props)
   return (
<section className="equipment-container" style={!inventoryToggle ? {marginBottom: "88px"} : null}>
         <div className="equipment-top-container">
            <div className="helm-container" 
                    onDrop={(event) => equipItem(event)} 
                    onDragOver={(event) => event.preventDefault()}>
               {helm.item_id ? (
                <img id={helm.item_id} className="true"
                         src={helm.image} 
                         onDragStart={(event) => handleDrag(event)} 
                         onDrag={(event) => event.preventDefault()}  
                         width="70px" height="100px" />
               ) : null
               }
            </div>
            <div className="inventory-square-hover">
               <span>{helm.item_name}</span>
               <div className="i-square-hover-stats">
                  <div><span>Attack: </span>{helm.attack}</div>
                  <div><span>Armor: </span>{helm.armor}</div>
                  <div><span>Strength: </span>{helm.strength ? helm.strength : 0}</div>
                  <div><span>Agility: </span>{helm.agility ? helm.agility : 0}
                  </div>
               </div>
            </div>
         </div>
         <div className="equipment-middle-container">
         <div 
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
                  <div className="inventory-square-hover">
                     <span>{weapon.item_name}</span>
                     <div className="i-square-hover-stats">
                        <div><span>Attack: </span>{weapon.attack}</div>
                        <div><span>Armor: </span>{weapon.armor}</div>
                        <div><span>Strength: </span>{weapon.strength ? weapon.strength : 0}</div>
                        <div><span>Agility: </span>{weapon.agility ? weapon.agility : 0}</div>
                     </div>
                  </div>
            </div>
            
            <div className="middle-container" value={armor}
                     onDrop={(event) => equipItem(event)} 
                     onDragOver={(event) => event.preventDefault()}>
                  {armor.item_id ? (
                     <>
                     <div className="inventory-square-hover">
                     <span>{armor.item_name}</span>
                     <div className="i-square-hover-stats">
                        <div><span>Attack: </span>{armor.attack}</div>
                        <div><span>Armor: </span>{armor.armor}</div>
                        <div><span>Strength: </span>{armor.strength ? armor.strength : 0}</div>
                        <div><span>Agility: </span>{armor.agility ? armor.agility : 0}</div>
                     </div>
                  </div>
                     <img id={armor.item_id} className="true"
                              src={armor.image} 
                              onDragStart={(event) => handleDrag(event)} 
                              onDrag={(event) => event.preventDefault()}  
                              width="70px" height="100px" /></>
                  ) : null
                  }
                  
            </div>
            <div className="middle-container" value={offHand}
                     onDrop={(event) => equipItem(event)} 
                     onDragOver={(event) => event.preventDefault()}>
               {offHand.item_id ? (
                  <>
                  <div className="inventory-square-hover">
                     <span>{offHand.item_name}</span>
                     <div className="i-square-hover-stats">
                        <div><span>Attack: </span>{offHand.attack}</div>
                        <div><span>Armor: </span>{offHand.armor}</div>
                        <div><span>Strength: </span>{offHand.strength ? offHand.strength : 0}</div>
                        <div><span>Agility: </span>{offHand.agility ? offHand.agility : 0}</div>
                     </div>
                  </div>
                     <img id={offHand.item_id} className="true" 
                              src={offHand.image}  
                              onDragStart={(event) => handleDrag(event)} 
                              onDrag={(event) => event.preventDefault()}
                              width="70px" height="100px" /></>
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
         <div className="equipment-bottom-container">
            <div className="boot-container" 
                    onDrop={(event) => equipItem(event)} 
                    onDragOver={(event) => event.preventDefault()}>
               {boots.item_id ? (
                  <>
                  <div className="inventory-square-hover">
                  <span>{boots.item_name}</span>
                  <div className="i-square-hover-stats">
                     <div><span>Attack: </span>{boots.attack}</div>
                     <div><span>Armor: </span>{boots.armor}</div>
                     <div><span>Strength: </span>{boots.strength ? boots.strength : 0}</div>
                     <div><span>Agility: </span>{boots.agility ? boots.agility : 0}</div>
                  </div>
               </div>
                  <img id={boots.item_id} className="true"
                           src={boots.image} 
                           onDragStart={(event) => handleDrag(event)} 
                           onDrag={(event) => event.preventDefault()}  
                           width="70px" height="100px" /></>
               ) : null
               }
               
            </div>
          </div>
   </section>
   )
}
const MapStateToProps = reduxState => reduxState.hero
export default connect(MapStateToProps)(Equipment);