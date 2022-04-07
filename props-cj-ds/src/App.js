import './App.css';
import side1 from './components/Images/side1.png'
import side2 from './components/Images/side2.png'
import side3 from './components/Images/side3.png'
import side4 from './components/Images/side4.png'
import side5 from './components/Images/side5.png'
import side6 from './components/Images/side6.png'
import diceHero from './components/Images/diceHero.png'
import React, { Component } from 'react'
import Dice from './components/Dice';
import DiceLog from './components/DiceLog';
import DiceRestartButton from './components/DiceRestartButton'


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    //   diceRollImages:[1, 2, 3, 4, 5, 6]
      diceRollImages: [side1, side2, side3, side4, side5, side6],
      currentRollDice: diceHero,
      diceRollHistory: []
    }
  }

  handleDiceRoll = () => {
    let {diceRollImages, diceRollHistory} = this.state
    let diceRoll = Math.floor(Math.random() * diceRollImages.length)
    let newDiceRoll = diceRollImages[diceRoll]
    this.setState({ currentRollImage: newDiceRoll, diceRollHistory: [...diceRollHistory, diceRoll + 1] })
  }

  handleRestartClickEvent = () => {
    this.setState({
      diceRollImages: [side1, side2, side3, side4, side5, side6 ],
      currentRollImage: diceHero,
      diceRollHistory: []
    })
  }

  render() {
      const {currentRollDice,diceRollHistory} = this.state
    return (
      <>
      <h1>Dice Roller</h1>
        <Dice handleDiceRoll={this.handleDiceRoll} currentRollDice={currentRollDice}
        />
    
        <DiceRestartButton restartGame={this.handleRestartClickEvent}/>
        <DiceLog diceLog={diceRollHistory}/>

      </>
    )
  }
}
