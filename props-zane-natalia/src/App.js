import './App.css';
import React, { Component } from 'react'
import DiceFace from './components/DiceFace'

class DiceRoller extends Component {
  constructor(props){
    super(props)
    this.state = {
      dice: ["1", "2", "3", "4", "5", "6"],
      currentRoll: "",
      previousRoll: []
    }
  }
  rollDice = () => {
    let randomRoll = Math.floor(Math.random() * this.state.dice.length)
    this.setState ({currentRoll: this.state.dice[randomRoll]})
  }

  render() {
    return (
      <>
        <h1>Roll Dice</h1>
        <button onClick={this.rollDice}>Roll the Dice!</button>
        <DiceFace dice={this.state.currentRoll}/>
      </>
    )
  }
}
export default DiceRoller;
