   const SET_USER = "SET_USER"

   export function setUser (user) {
      return {
         type: SET_USER,
         payload: user
      }
   }

   export default function reducer (state = {}, action) {
      const {type, payload} = action;
      switch(type){

         case SET_USER:
         return {...payload};
         
         default:
            return state;
      };
   };