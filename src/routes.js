import React from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "./Components/Auth";
import Town from "./Components/Town/Town";
// import Story from
import Game from './Components/Game/Game';
import Death from './Components/Game/Death/Death';
import HealthBar from './Components/Animations/HealthBar/HealthBar';
import MapEditor from './Components/MapEditor/MapEditor';
import {MapEditorProvider} from './context/MapEditorContext';
import {GameProvider} from './context/GameContext';

export default (
   <Switch>
      <Route path='/editor' component = {MapEditor} />
      <Route exact path="/" component = {Auth} />
      <Route path="/town" component = {Town} />
      {/* <Route path="/story" component = {Story}/> */}
      <Route path="/game" component = {Game} />
      <Route path="/death" component = {Death} />
      <Route path='/health' component = {HealthBar} />
   </Switch>

)