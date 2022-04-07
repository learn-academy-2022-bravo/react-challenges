
import React, { Component } from 'react';
import Dice from './components/Dice';
import Log from './components/Log';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dice: [ 1, 2, 3, 4, 5, 6],
      currentDice: []
    }
  }

rollDice = () => {
  let randomDice = Math.floor(Math.random() * this.state.dice.length)
  this.setState({currentDice: this.state.dice[randomDice]})
}







  render() {
    return (
      <div>
        <Dice />
        <Log />
      </div>
    );
  }
}

export default App;