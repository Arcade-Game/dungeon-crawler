import {combineReducers} from "redux";
import authReducer from "./reducers/authReducer";
import heroReducer from "./reducers/heroReducer";
import heroesReducer from "./reducers/heroesReducer";
import titlesReducer from './reducers/titlesReducer';

const rootReducer = combineReducers({
   auth: authReducer,
   heroes: heroesReducer,
   hero: heroReducer,
   title: titlesReducer,
})

export default rootReducer;