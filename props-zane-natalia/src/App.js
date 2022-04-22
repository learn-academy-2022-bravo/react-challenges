import './App.css';
import React, { Component } from 'react'
import DiceFace from './components/DiceFace'
import RollLog from './components/RollLog'

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
    this.setState  
    ({currentRoll: this.state.dice[randomRoll],
      previousRoll:[... this.state.previousRoll, this.state.dice [randomRoll]] })
  }

  render() {
    return (
      <>
      <div className='App'>
        <h1>Do you roll the dice or does the dice roll you?</h1>
        <img src="https://www.publicdomainpictures.net/pictures/380000/nahled/premium-isolate-dice-gold-and-black.png" alt="test"/>
        <br></br>
        <br></br>
        <button onClick={this.rollDice}>Roll the Dice!</button>
        <DiceFace dice={this.state.currentRoll}/>
        <RollLog previousRoll={this.state.previousRoll} />
        </div>
      </>
    )
  }
}
export default DiceRoller;
