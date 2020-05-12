import {combineReducers} from "redux";
import authReducer from "./reducers/authReducer";
import heroReducer from "./reducers/heroReducer"
import heroesReducer from "./reducers/heroesReducer"

const rootReducer = combineReducers({
   auth: authReducer,
   heroes: heroesReducer,
   hero: heroReducer,
})

export default rootReducer;