
import React, { Component } from 'react';
import Dice from './components/Dice';
import Log from './components/Log';
import "./App.css"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dice: [ 1, 2, 3, 4, 5, 6],
      currentDice: [],
      previousRoll: []
    }
  }

rollDice = () => {
  let randomDice = Math.floor(Math.random() * this.state.dice.length)
  this.setState({currentDice: this.state.dice[randomDice],
  previousRoll: [...this.state.previousRoll,
  this.state.dice[randomDice]]})

}




  render() {
    return (
      <div onClick={this.rollDice}>
        <Dice roll = {this.state.currentDice}/>
        <Log previousRoll = {this.state.previousRoll}/>
      </div>
    );
  }
}

export default App;