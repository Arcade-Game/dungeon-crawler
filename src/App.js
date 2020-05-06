import React from 'react';
import Town from './Components/Town/Town'
import routes from "./routes";
import './App.scss';
import Game from './Components/Game/Game';
import CombatStats from './Components/CombatStats/CombatStats'

function App() {
  return (
    <div className="App">
      {routes}
      {/* <Town /> */}
      {/* <Game /> */}
      {/* <CombatStats /> */} 
    </div>
  );
}

export default App;
