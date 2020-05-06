import React from 'react';
import Town from './Components/Town/Town'
import routes from "./routes";
import './App.scss';
import Game from './Components/Game/Game';

function App() {
  return (
    <div className="App">
      {routes}
      {/* <Town /> */}
      {/* <Game /> */}

    </div>
  );
}

export default App;
