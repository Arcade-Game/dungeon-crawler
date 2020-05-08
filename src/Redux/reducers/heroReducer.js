const SELECT_HERO = "SELECT_HERO"

export const selectHero = (hero) => {
   return {
      type: SELECT_HERO,
      payload: hero
   }
}

export default function reducer (state = {}, action) {
   const {type, payload} = action;
   switch(type){

      case SELECT_HERO: 
      return {...state, ... payload};
      
      default:
         return state;
   };
};