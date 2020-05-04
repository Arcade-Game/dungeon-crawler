import React from "react"

const Equipment = ({offHand, armor, weapon, handleDrag, equipItem}) => {

   return (
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
   )
}

export default Equipment;