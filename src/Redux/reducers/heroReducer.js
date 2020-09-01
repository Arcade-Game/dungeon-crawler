const initialState = {
   hero:{},
   stats:{},
   inventory:[0, 0, 0, 0, 0, 0, 0, 0],
   equipment: [{type: "weapon"}, {type: "two-hand"}, {type: "off-hand"}, {type: "armor"}, {type: "helm"}, {type: "boots"}]
   }


const SELECT_NEW_HERO = "SELECT_NEW_HERO",
          SELECT_HERO = "SELECT_HERO",
          SAVE_HERO = "SAVE_HERO",
          DELETE_HERO = "DELETE_HERO",
         //  UPDATE_INVENTORY = "UPDATE_INVENTORY",
          EQUIP_ITEM = "EQUIP_ITEM",
          UNEQUIP_ITEM = "UNEQUIP_ITEM",
          REPLACE_ITEM = "REPLACE_ITEM",
          DELETE_ITEM = "DELETE_ITEM",
          SELL_ITEM = "SELL_ITEM",
          weapon = "weapon",
          twoHand = "two-hand",
          armor = "armor",
          offHand = "off-hand",
          helm = "helm",
          boots = "boots",
          DEATH_COUNTER = "DEATH_COUNTER"


export const selectNewHero = (hero) => {
   return {
      type: SELECT_NEW_HERO,
      payload:hero
   }
}

export const selectHero = (hero) => {
   return {
      type: SELECT_HERO,
      payload: hero
   }
}

export const saveHero = (hero) => {
   return {
      type: SAVE_HERO,
      payload: hero
   }
}

export const deleteHero = () => {
   return {
      type: DELETE_HERO,
   }
}

// export const updateInventory = (item) => {
//    return {
//       type: UPDATE_INVENTORY,
//       payload: item
//    }
// }

export const equipItem = (item, index) => {

      return {
         type: EQUIP_ITEM,
         payload: {item, index}
      }

}

   export const unequipItem = (id) => {
      return {
         type: UNEQUIP_ITEM,
         payload: id
      }
   }
   
   export const replaceItem = (inv, equ)=> ({
      type: REPLACE_ITEM,
      payload: {inv, equ}
   })

   export const deleteItem = (data, equipped) => {
      return {
         type: DELETE_ITEM,
         payload: {data, equipped}
      }
   }

   export const sellItem = (data) => {
      return {
         type: SELL_ITEM,
         payload: data
      }
   }

   export const deathCounter = () => {
      return {
         type: DEATH_COUNTER
      }
   }



export default function reducer (state = initialState, action) {
   console.log('REDUCER DING')
   const {type, payload} = action;
   console.log(payload)
   switch(type){

      case DEATH_COUNTER:
         let newDeaths = state.hero.deaths+1;
         return {...state, hero: {...state.hero, deaths: newDeaths}}
      
         case SELECT_NEW_HERO:
            return {...state, 
               hero: {file_id: payload.file_id, hero_name: payload.hero_name, class_name: payload.class_name, gender: payload.gender, level: payload.level, gold: payload.gold, deaths: payload.deaths, honor: payload.honor}, 
               stats: {health: payload.health, attack: payload.attack, armor: payload.armor, strength: payload.strength, agility: payload.agility},
               equipment: [{type: "weapon"}, {type: "two-hand"}, {type: "off-hand"}, {type: "armor"}, {type: "helm"}, {type: "boots"}],
            inventory: [0, 0, 0, 0, 0, 0, 0, 0]
         }

      case SELECT_HERO: 
         let equipmentInit = [{type: "weapon"}, {type: "two-hand"}, {type: "off-hand"}, {type: "armor"}, {type: "helm"}, {type: "boots"}]
         payload.equipment.map(item => {
            switch (item.item_type){
               case weapon:
                   return equipmentInit[0] = item;
               case twoHand:
                   return equipmentInit[1] = item;
               case offHand:
                     return equipmentInit[2] = item;
               case armor:
                   return equipmentInit[3] = item;
               case helm:
                   return equipmentInit[4] = item;
               case boots:
                   return equipmentInit[5] = item;
               default:
                  console.log("SELECT_HERO error");
            }})
         return {...state, 
            hero: {file_id: payload.file_id, hero_name: payload.hero_name, class_name: payload.class_name, gender: payload.gender, level: payload.level, gold: payload.gold, deaths: payload.deaths, honor: payload.honor}, 
            stats: {health: payload.health, attack: payload.attack, armor: payload.armor, strength: payload.strength, agility: payload.agility},
            equipment: [...equipmentInit],
            inventory: 
            [state.inventory[0] = payload.inventory[0] || 0,
            state.inventory[1] = payload.inventory[1] || 0,
            state.inventory[2] = payload.inventory[2] || 0,
            state.inventory[3] = payload.inventory[3] || 0,
            state.inventory[4] = payload.inventory[4] || 0,
            state.inventory[5] = payload.inventory[5] || 0,
            state.inventory[6] = payload.inventory[6] || 0,
            state.inventory[7] = payload.inventory[7] || 0]
         }

         case SAVE_HERO:
            console.log("reducer hit", payload)
            return {hero: {...state.hero},
            stats: {...state.stats},
            equipment: [...payload.equipment], 
            inventory: [...payload.inventory]};

      // case UPDATE_INVENTORY:
      //    console.log("ding")
      //    let index = state.inventory.findIndex(e => e === 0)
      //    state.inventory[index] = payload
      //    console.log("UPDATED INVENTORY", state)
      //    if (index !== -1){
      //       return {...state}
      //    } 
      //    break;

         case DELETE_HERO:
            return {
               hero:{},
               stats:{},
               inventory:[0, 0, 0, 0, 0, 0, 0, 0],
               equipment: [{type: "weapon"}, {type: "two-hand"}, {type: "off-hand"}, {type: "armor"}, {type: "helm"}, {type: "boots"}]
            };

         case REPLACE_ITEM:
            console.log (payload.inv)
            console.log(payload.equ)
            return {
               hero: {...state.hero},
               stats: {...state.stats},
               equipment: [...payload.equ],
               inventory: [...payload.inv]
            }

      case EQUIP_ITEM:
            state.inventory.splice(+payload.index, 1, 0)
            switch (payload.item.item_type){
               case weapon:
                  state.equipment[0] = payload.item
                  break;
               case twoHand:
                     state.equipment[1] = payload.item
                     break;
               case offHand:
                     state.equipment[2] = payload.item
                     break;
               case armor:
                      state.equipment[3] = payload.item
                      break;
               case helm:
                      state.equipment[4] = payload.item
                      break;
               case boots:
                      state.equipment[5] = payload.item
                      break;
               default:
                  console.log("EQUIP_ITEM error");
               }
            return {
               hero: {...state.hero},
               stats: {...state.stats},
               equipment: [...state.equipment],
               inventory: [...state.inventory]
               }

      case UNEQUIP_ITEM:
            const equIndex = state.equipment.findIndex(item => item.item_id === +payload);
            const invIndex = state.inventory.findIndex(e => e === 0)
               state.inventory.splice(invIndex, 1, state.equipment[equIndex])
            const itemType = state.equipment[equIndex].item_type
               state.equipment[equIndex] = {type: `${itemType}`}
            return {
               hero: {...state.hero},
               stats: {...state.stats},
               equipment: [...state.equipment], 
               inventory: [...state.inventory]
            }

         case DELETE_ITEM:
               if (payload.equipped === "false") {
               state.inventory.splice(+payload.data, 1, 0)
               console.log("inv delete")
            } else {
               console.log("equ delete")
               switch (payload.data){
                  case weapon:
                     state.equipment[0] = {type: "weapon"};
                     break;
                     case twoHand:
                     state.equipment[1] = {type: "two-hand"};
                     break;
               case offHand:
                     state.equipment[2] = {type: "off-hand"};
                     break;
               case armor:
                      state.equipment[3] = {type: "armor"};
                      break;
               case helm:
                      state.equipment[4] = {type: "helm"};
                      break;
               case boots:
                      state.equipment[5] = {type: "boots"};
                      break;
               default:
                  console.log("DELETE_ITEM error");
               }
            }
            return {
               hero: {...state.hero},
               stats: {...state.stats},
               equipment: [...state.equipment],
               inventory: [...state.inventory]
               }

         case SELL_ITEM:
      default:
         return state;
   };
};