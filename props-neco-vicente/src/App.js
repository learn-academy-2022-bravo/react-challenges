import './App.css';
import React, { Component } from 'react'
import DiceRoll from './components/DiceRoll'
import PreviousRoll from './components/PreviousRoll'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      diceGambler: ["One", "Two", "Three", "Four", "Five", "Six"],
      diceRoll: "",
      previousRoll: []
    }
  }

  rollDice = () => {
    let randomRoll = Math.floor(Math.random() * this.state.diceGambler.length)
    this.setState({
      diceTracker: this.state.diceGambler[randomRoll],
      previousRoll: [...this.state.previousRoll,
      this.state.diceGambler[randomRoll]]
    })
  }


  render() {
    return(
      <>
        <h1 className= 'App-header' >Dice Roller!</h1>
        <button className='button' onClick={this.rollDice}>Roll dice!</button>
        <DiceRoll card={this.state.diceRoll}/> 
        <PreviousRoll previousRoll={this.state.previousRoll} />
      </>
    )
  }
}

export default App;