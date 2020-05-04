import React, {Component} from 'react';
import './Game.scss';
import Map from './Map';
import {mapObjects} from './mapObjects';
import Footer from '../Footer/Footer';
import Inventory from '../Inventory';
import axios from 'axios';


class Game extends Component {
  constructor(){
    super()
    this.state = {
      grid: mapObjects,
      charX: 15,
      charY: 14,
      heightWidth: 700,
      viewRowCols: 9
    }
  }
  
  checkWall = (x, y) => {
    return this.state.grid[y][x].type === 'wall' ? true : false
  }

  checkTile = (x, y) => {
    switch(this.state.grid[y][x].type){
      case "chest":
        let newGrid = [...this.state.grid]
        newGrid[y][x] = {type: "empty"}
        this.setState({grid: newGrid})
        this.openChest()
        break;
    }
  }

  openChest = () => {
    axios.get(`/api/item`).then(res => console.log("res.data", res.data))
  }
  
  getKeyCode = (keyCode) => {
    const {charX, charY} = this.state
    if(keyCode === 37){
      return this.checkWall(charX-1, charY) === false ? (this.setState({charX: charX-1}), this.checkTile(charX-1, charY)) : null
    } else if(keyCode === 38){
      return this.checkWall(charX, charY-1) === false ? (this.setState({charY: charY-1}), this.checkTile(charX, charY-1)) : null
    } else if(keyCode === 39){
      return this.checkWall(charX+1, charY) === false ? (this.setState({charX: charX+1}), this.checkTile(charX+1, charY)) : null
    } else if(keyCode === 40){
      return this.checkWall(charX, charY+1) === false ? (this.setState({charY: charY+1}), this.checkTile(charX, charY+1)) :  null
    }
  }

  move = ({keyCode}) => {
    this.getKeyCode(keyCode)
  }
  

  render() {
    console.log(this.state.charX, this.state.charY)
    console.log(this.state.grid)

    return (
      <div className="wrapper" role="button" tabIndex="0" onKeyDown={e => this.move(e)}>
        <div className="Game">
          <Map charX={this.state.charX} charY={this.state.charY} heightWidth={this.state.heightWidth} viewRowCols={this.state.viewRowCols} grid={this.state.grid} />
        <Footer />
        <Inventory />
        </div>
      </div>
    );

  }
}

export default Game;
