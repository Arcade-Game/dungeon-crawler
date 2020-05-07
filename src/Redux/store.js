import {createStore, combineReducers, applyMiddleware} from "redux";
import authReducer from "./authReducer";
import saveReducer from './saveReducer';
import promiseMiddleware from "redux-promise-middleware";

const rootReducer = combineReducers({
   auth: authReducer,
   save: saveReducer
})

export default createStore (rootReducer, applyMiddleware(promiseMiddleware));