import {createStore, applyMiddleware} from "redux";
import rootReducer from "./store";
import {loadState, saveState} from "./localStorage";
import throttle from "lodash/throttle";
import promiseMiddleware from "redux-promise-middleware";

const configureStore = () => {
const persistedState = loadState();
const store = createStore(rootReducer, persistedState ,applyMiddleware(promiseMiddleware));

store.subscribe(throttle(() => {
   saveState({
      auth: store.getState().auth,
      heroes: store.getState().heroes,
      hero: store.getState().hero
   });
}, 1000));

   return store;
};

export default configureStore;
