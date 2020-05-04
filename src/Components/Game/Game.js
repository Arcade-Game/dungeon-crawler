import React, {Component} from 'react';
import './Game.scss';
import Map from './Map';
import {mapObjects} from './mapObjects';

class Game extends Component {
  constructor(){
    super()
    this.state = {
      grid: mapObjects,
      charX: 15,
      charY: 14,
      heightWidth: 800,
      viewRowCols: 9
    }
  }
  
  checkWall = (x, y) => {
    return this.state.grid[y][x].type === 'wall' ? true : false
  }
  
  checkChest = (x, y) => {
    return this.state.grid[y][x].type === 'chest' ? this.state.grid[y][x].type = 'empty' : null
  }
  
  move = ({keyCode}) => {
    
    if(keyCode === 37){
      // this.checkChest(this.state.charX-1, this.state.charY)
      return this.checkWall(this.state.charX-1, this.state.charY) === false ? (this.setState({charX: this.state.charX-1}), this.checkTile()) : null
    } else if(keyCode === 38){
      // this.checkChest(this.state.charX, this.state.charY-1)
      return this.checkWall(this.state.charX, this.state.charY-1) === false ? this.setState({charY: this.state.charY-1}) : null
    } else if(keyCode === 39){
      // this.checkChest(this.state.charX+1, this.state.charY)
      return this.checkWall(this.state.charX+1, this.state.charY) === false ? this.setState({charX: this.state.charX+1}) : null
    } else if(keyCode === 40){
      // this.checkChest(this.state.charX, this.state.charY+1)
      return this.checkWall(this.state.charX, this.state.charY+1) === false ? this.setState({charY: this.state.charY+1}) :  null
    }
  }
  
  checkTile = () => {
    console.log('DING1', this.state.grid[this.state.charY][this.state.charX].type)
    switch(this.state.grid[this.state.charY][this.state.charX].type){
      case "chest":
        console.log("DING")
        this.state.grid[this.state.charY][this.state.charX].type = 'empty'
        break;
    }
  }

  render() {
    console.log(this.state.charX, this.state.charY)
    console.log(this.state.grid)

    return (
      <div className="wrapper" role="button" tabIndex="0" onKeyDown={e => this.move(e)}>
        <div className="Game">
          <Map charX={this.state.charX} charY={this.state.charY} heightWidth={this.state.heightWidth} viewRowCols={this.state.viewRowCols} grid={this.state.grid} />
        </div>
      </div>
    );

  }
}

export default Game;
