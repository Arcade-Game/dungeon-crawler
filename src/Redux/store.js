import {createStore, combineReducers, applyMiddleware} from "redux";
import authReducer from "./authReducer";
import heroReducer from "./heroReducer"
import promiseMiddleware from "redux-promise-middleware";

const rootReducer = combineReducers({
   auth: authReducer,
   hero: heroReducer
})

export default createStore (rootReducer, applyMiddleware(promiseMiddleware));