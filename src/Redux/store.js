import {createStore, combineReducers, applyMiddleware} from "redux";
import authReducer from "./authReducer";
import promiseMiddleware from "redux-promise-middleware";

const rootReducer = combineReducers({
   auth: authReducer
})

export default createStore (rootReducer, applyMiddleware(promiseMiddleware));