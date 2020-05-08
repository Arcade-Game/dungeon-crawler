   const SET_HERO_LIST = "SET_HERO_LIST"

   export const setHeroList = (data) => {
      return {
         type: SET_HERO_LIST,
         payload: data
      }
   }

   export default function reducer (state = {}, action) {
      const {type, payload} = action;
      switch(type){

         case SET_HERO_LIST: 
         return {...state, heroList: payload};
         
         default:
            return state;
      };
   };