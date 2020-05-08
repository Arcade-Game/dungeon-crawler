import {combineReducers} from "redux";
import authReducer from "./reducers/authReducer";
import heroReducer from "./reducers/heroReducer"
import heroesReducer from "./reducers/heroesReducer"
import saveReducer from './reducers/saveReducer';


const rootReducer = combineReducers({
   auth: authReducer,
   heroes: heroesReducer,
   hero: heroReducer,
   save: saveReducer
})

export default rootReducer;