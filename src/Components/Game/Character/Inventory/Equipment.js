import React, {useState, useEffect} from "react"
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


   return (
<section className="equipment-container" style={!inventoryToggle ? {marginBottom: "88px"} : null}>
         <div className="equipment-top-container">
            <div className={helm.rarity === 'epic' || helm.rarity === 'rare' || helm.rarity === 'legendary' ? `helm-container-${helm.rarity}` : `helm-container`} 
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
               <span style={helm.rarity === 'epic' ? {color: 'indigo'} : helm.rarity === 'rare' ? {color: 'darkblue'} : helm.rarity === 'legendary' ? {color: '#600000'} : null}>{helm.item_name}</span>
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
         <div className={weapon.rarity === 'epic' || weapon.rarity === 'rare' || weapon.rarity === 'legendary' ? `middle-container-${weapon.rarity}` : `middle-container`} value={weapon}
               onDrop={(event) => equipItem(event)} 
               onDragOver={(event) => event.preventDefault()}>
            {weapon.item_id ? (
               <>
                  <div className="inventory-square-hover-e">
                     <span style={weapon.rarity === 'epic' ? {color: 'indigo'} : weapon.rarity === 'rare' ? {color: 'darkblue'} : weapon.rarity === 'legendary' ? {color: '#600000'} : null}>{weapon.item_name}</span>
                     <div className="i-square-hover-stats">
                           <div><span>Attack: </span>{weapon.attack}</div>
                           <div><span>Armor: </span>{weapon.armor}</div>
                           <div><span>Strength: </span>{weapon.strength ? weapon.strength : 0}</div>
                           <div><span>Agility: </span>{weapon.agility ? weapon.agility : 0}</div>
                        </div>
                     </div>
               <img id={weapon.item_id} className="true" 
                           src={weapon.image}
                           onDragStart={(event) => handleDrag(event)} 
                           onDrag={(event) => event.preventDefault()} 
                           width="70px" height="100px" />
                           </>
            ) : null
            }
      </div>
            <div className={armor.rarity === 'epic' || armor.rarity === 'rare' || armor.rarity === 'legendary' ? `middle-container-${armor.rarity}` : `middle-container`} value={armor}
                     onDrop={(event) => equipItem(event)} 
                     onDragOver={(event) => event.preventDefault()}>
                  {armor.item_id ? (
                     <>
                     <div className="inventory-square-hover-e">
                     <span style={armor.rarity === 'epic' ? {color: 'indigo'} : armor.rarity === 'rare' ? {color: 'darkblue'} : armor.rarity === 'legendary' ? {color: '#600000'} : null}>{armor.item_name}</span>
                     <div className="i-square-hover-stats" >
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
            <div className={offHand.rarity === 'epic' || offHand.rarity === 'rare' || offHand.rarity === 'legendary' ? `middle-container-${offHand.rarity}` : `middle-container`} value={offHand}
                     onDrop={(event) => equipItem(event)} 
                     onDragOver={(event) => event.preventDefault()}>
               {offHand.item_id ? (
                  <>
                  <div className="inventory-square-hover-e">
                     <span style={offHand.rarity === 'epic' ? {color: 'indigo'} : offHand.rarity === 'rare' ? {color: 'darkblue', fontWeight: '600'} : offHand.rarity === 'legendary' ? {color: '#600000'} : null}>{offHand.item_name}</span>
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
         <div className="bottom-container">
            <div className={boots.rarity === 'epic' || boots.rarity === 'rare' || boots.rarity === 'legendary' ? `boot-container-${boots.rarity}` : `boot-container`} 
                    onDrop={(event) => equipItem(event)} 
                    onDragOver={(event) => event.preventDefault()}>
               {boots.item_id ? (
                  <>
                  <div className="inventory-square-hover">
                  <span style={armor.rarity === 'epic' ? {color: 'indigo'} : armor.rarity === 'rare' ? {color: 'darkblue'} : armor.rarity === 'legendary' ? {color: '#600000'} : null}>{boots.item_name}</span>
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

export default Equipment;