import React from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "./Components/Auth";
import Dashboard from "./Components/Dashboard"
// import Story from
import Game from './Components/Game/Game'

export default (
   <Switch>
      <Route exact path="/" component = {Auth}/>
      <Route exact ="/dashboard" component = {Dashboard}/>
      {/* <Route path="/story" component = {Story}/> */}
      <Route path="/game" component = {Game}/>
   </Switch>

)