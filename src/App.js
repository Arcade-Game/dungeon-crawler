import React from 'react';
import Footer from './Components/Footer/Footer'
import routes from "./routes";
import './App.css';

function App() {
  return (
    <div className="App">
      {routes}
      <Footer />
    </div>
  );
}

export default App;
