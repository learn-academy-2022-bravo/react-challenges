import React, { Component } from 'react';
import Dice from './components/Dice'
import Rolls from './components/Rolls'
import './App.css'
class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      diceRolls: ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50","51","52","53","54","55","56","57","58","59","60","61","62","63","64","65","66","67","68","69","70","71","72","73","74","75","76","77","78","79","80","81","82","83","84","85","86","87","88","89","90","91","92","93","94","95","96","97","98","99","100","101","102","103","104","105","106","107","108","109","110","111","112","113","114","115","116","117",
      "118","119","120", "122"],
      currentDice: "",
      previousRolls: []
    }
  }


  rollDice = () => {
    let randomRoll = Math.floor(Math.random() * this.state.diceRolls.length)
    this.setState({
      currentDice: this.state.diceRolls[randomRoll],
      previousRolls: [...this.state.previousRolls,
      this.state.diceRolls[randomRoll]]
    })
  }

  refreshPage = () => {
      window.location.reload(false);
    }

  render() {
    return(
      <div className='nothing'>
        <h1>Roll Dice</h1>
        <button onClick={this.refreshPage}>Reset Rolls</button>
        <div className='master'>
        <Dice dice={this.state.currentDice} onClick = {this.rollDice}/>
        <Rolls previousRolls={this.state.previousRolls} />
      </div>
      </div>
    )
  }
}

export default App;



// make our click box to roll button to be on actual box
// onclick on dice.js from apps.js
