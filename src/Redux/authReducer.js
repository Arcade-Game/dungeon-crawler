import axios from "axios";

const initialState = {
   user: {}
}

   const SET_USER = "SET_USER",
              GET_CURRENT_USER = "GET_CURRENT_USER";

export const setUser = (user) => {
 
   return {
      type: SET_USER,
      payload: user
   }
}
export const  getCurrentUser = () => {
   let user = axios.get("/api/auth/user")
      .then(res => {
         console.log(res.data);
         return res.data
      }).catch(err => console.log(err));
   console.log(user)
   return {
      type: GET_CURRENT_USER,
      payload: user
   }
}

export default function reducer (state = initialState, action) {
   const {type, payload} = action;
   console.log(payload)
   switch(type){

      case SET_USER: 
      return {...state, user:payload};
      
      case GET_CURRENT_USER + "_FULFILLED": 
      return {...state, user:payload};

      default:
         return state;
   };
};