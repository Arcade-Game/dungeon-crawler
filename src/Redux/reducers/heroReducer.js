const initialState = {
   hero:{},
   stats:{},
   inventory:[0, 0, 0, 0, 0, 0, 0, 0],
   equipment: [{type: "weapon"}, {type: "two-hand"}, {type: "off-hand"}, {type: "armor"}, {type: "helm"}, {type: "boots"}]
   }


const SELECT_HERO = "SELECT_HERO",
          UPDATE_INVENTORY = "UPDATE_INVENTORY",
          EQUIP_ITEM = "EQUIP_ITEM",
          UNEQUIP_ITEM = "UNEQUIP_ITEM",
          DELETE_ITEM = "DELETE_ITEM",
          weapon = "weapon",
          twoHand = "two-hand",
          armor = "armor",
          offHand = "off-hand",
          helm = "helm",
          boots = "boots";


export const selectHero = (hero) => {
   return {
      type: SELECT_HERO,
      payload: hero
   }
}

export const updateInventory = (data,index) => {
// console.log(hero)
   // let data = hero.inventory
console.log(data)
data.map(item => {
   console.log(item)
   return {
   type: UPDATE_INVENTORY,
   payload: item
   }
})

}

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

   export const deleteItem = (item) => {
      return {
         type: DELETE_ITEM,
         payload: item
      }
   }



export default function reducer (state = initialState, action) {
   const {type, payload} = action;
   console.log(payload)
   switch(type){
      
      case SELECT_HERO: 
         payload.equipment.map(item => {
            switch (item.item_type){
               case weapon:
                   return state.equipment[0] = item
               case twoHand:
                   return state.equipment[1] = item
               case offHand:
                     return state.equipment[2] = item
               case armor:
                   return state.equipment[3] = item
               case helm:
                   return state.equipment[4] = item
               case boots:
                   return state.equipment[5] = item
            }})
         return {...state, 
            hero: {file_id: payload.file_id, hero_name: payload.hero_name, class_name: payload.class_name, level: payload.level, gold: payload.gold}, 
            stats: {health: payload.health, attack: payload.attack, armor: payload.armor, strength: payload.strength, agility: payload.agility},
            equipment: [...state.equipment],
            inventory: 
            [state.inventory[0] = payload.inventory[0] || 0,
            state.inventory[1] = payload.inventory[1] || 0,
            state.inventory[2] = payload.inventory[2] || 0,
            state.inventory[3] = payload.inventory[3] || 0,
            state.inventory[4] = payload.inventory[4] || 0,
            state.inventory[5] = payload.inventory[5] || 0,
            state.inventory[6] = payload.inventory[6] || 0,
            state.inventory[7] = payload.inventory[7] || 0]
         }; 

      case UPDATE_INVENTORY:
         let index = state.inventory.findIndex(e => e === 0)
         if (index !== -1){
            return {...state, ...state.inventory[index] = payload}
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
            return {hero: {...state.hero},
            stats: {...state.stats},
            equipment: [...state.equipment], 
            inventory: [...state.inventory]}


            case DELETE_ITEM:
               return state

      default:
         return state;
   };
};