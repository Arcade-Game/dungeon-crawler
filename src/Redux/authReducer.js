import axios from "axios";

const initialState = {
   user: {}
}

const REGISTER_USER = "REGISTER_USER",
            LOGIN_USER = "LOGIN_USER",
            LOGOUT_USER = "LOGOUT_USER",
            GET_CURRENT_USER = "GET_CURRENT_USER";

export  const registerUser = (username, password) =>{
   let user = axios.post("/api/auth/register", {username, password})
      .then(({data}) => {
         console.log(data);
         return data
      }).catch(err => console.log(err));
   console.log(user)
   return {
      type: REGISTER_USER,
      payload: user
   }
}

export const loginUser = (username, password) => {
   // const {username, password} = user;
   let user = axios.post("/api/auth/login", {username, password})
      .then(res => {

         return res.data
      }).catch(err => console.log(err));
   console.log(user)
   return {
      type: LOGIN_USER,
      payload: user
   }
};

export const logoutUser = () => {

 return {
    type: LOGIN_USER,
    payload: axios.post("/api/auth/logout")
 }
};

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
      case REGISTER_USER + "_FULFILLED": 
      return {...state, user:payload};
      
      case REGISTER_USER + '_REJECTED':
            return { ...state, error: payload }

      case LOGIN_USER + "_FULFILLED": 
      return {...state, user:payload};

      case LOGIN_USER + '_REJECTED':
            return { ...state, error: payload }

      case GET_CURRENT_USER + "_FULFILLED": 
      return {...state, user:payload};

      case LOGOUT_USER : 
      return {user: {} };

      default:
         return state;
   };
};