const initialState = {
   heroList: {}
}

   const SET_HERO_LIST = "SET_HERO_LIST"

export const setHeroList = (data) => {
   console.log("data", data)
   return {
      type: SET_HERO_LIST,
      payload: data
   }
}

export default function reducer (state = initialState, action) {
   const {type, payload} = action;
   console.log(payload)
   switch(type){

      case SET_HERO_LIST: 
      return {...state, heroList:payload};
      
      default:
         return state;
   };
};