import React, {useState, useEffect} from "react"
import {connect} from "react-redux"
const Equipment = (props) => {
   const {handleDrag, equipItem} = props;
   const [weapon] = useState(props.equipment[0]),
             [twoHand] = useState(props.equipment[1]),
             [offHand] = useState(props.equipment[2]),
             [armor] = useState(props.equipment[3]),
             [helm] = useState(props.equipment[4]),
             [boots] = useState(props.equipment[5]);

      useEffect (() => {
         console.log(props)
      },[])
      console.log(props)
   return (
<section className="equipment-container">
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
         </div>
         <div className="equipment-middle-container">
            <div className="middle-container" value={offHand}
                     onDrop={(event) => equipItem(event)} 
                     onDragOver={(event) => event.preventDefault()}>
               {offHand.item_id ? (
                     <img id={offHand.item_id} className="true" 
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
                  {armor.item_id ? (
                     <img id={armor.item_id} className="true"
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
                  {weapon.item_id ? (
                        <img id={weapon.item_id} className="true" 
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
               {boots.item_id ? (
                  <img id={boots.item_id} className="true"
                           src={boots.image} 
                           onDragStart={(event) => handleDrag(event)} 
                           onDrag={(event) => event.preventDefault()}  
                           width="70px" height="100px" />
               ) : null
               }
            </div>
          </div>
   </section>
   )
}
const MapStateToProps = reduxState => reduxState.hero
export default connect(MapStateToProps)(Equipment);