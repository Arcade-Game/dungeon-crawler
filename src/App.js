import React from 'react';
import Footer from './Components/Footer/Footer'
import routes from "./routes";
import './App.scss';
import Game from './Components/Game/Game';
import CombatStats from './Components/CombatStats/CombatStats'

function App() {
  return (
    <div className="App">
      {/* {routes}
      <Footer /> */}
      <Game />
      <CombatStats />
    </div>
  );
}

export default App;
