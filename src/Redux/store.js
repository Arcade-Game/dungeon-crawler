import {createStore, combineReducers, applyMiddleware} from "redux";
import authReducer from "./authReducer";
import heroReducer from "./heroReducer"
import saveReducer from './saveReducer';
import promiseMiddleware from "redux-promise-middleware";

const rootReducer = combineReducers({
   auth: authReducer,
   hero: heroReducer,
   save: saveReducer
})

export default createStore (rootReducer, applyMiddleware(promiseMiddleware));