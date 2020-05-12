import React from 'react';
import Town from './Components/Town/Town'
import routes from "./routes";
import './App.scss';
import Game from './Components/Game/Game';
import HealthBar from './Components/Animations/HealthBar/HealthBar';

function App() {
  return (
    <div className="App">
      {/* <HealthBar /> */}
      {routes}
      {/* <Town /> */}
      {/* <Game /> */}

    </div>
  );
}

export default App;
