import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router} from 'react-router-dom';
import { LastLocationProvider } from 'react-router-last-location';
import {Provider} from "react-redux";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from "./Redux/configureStore"
import {MapEditorProvider} from './context/MapEditorContext';
import {GameProvider} from './context/GameContext';

const store = configureStore();

ReactDOM.render(
  <Router>
      <GameProvider>
    <MapEditorProvider>
        < LastLocationProvider >
          <Provider store={store}> 
            <React.StrictMode>
              <App />
            </React.StrictMode>
          </Provider>
        </LastLocationProvider>
    </MapEditorProvider>
      </GameProvider>
    
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
