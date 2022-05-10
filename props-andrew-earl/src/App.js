import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import Outcome from './Components/Outcome'
import PastRolls from './Components/PastRolls'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      die: [1, 2, 3, 4, 5, 6],
      currentRoll: "",
      pastRolls: [],
      reset: 0
    }
  }





dieRoller = () => {
  let randomRoll = Math.floor(Math.random() * this.state.die.length)
  this.setState({
    currentRoll : this.state.die[randomRoll],
    pastRolls : [...this.state.pastRolls, this.state.die[randomRoll]]
  })
}

resetLog = () => {
  this.setState({
    pastRolls: []
  })
}








render(){
  console.log(this.state.currentRoll)
  return(
    <>
    
    <h1>Dice Roller</h1>

    <button onClick={this.dieRoller}>Roll the Dice</button>

    <button onClick={this.resetLog}>Reset</button>

    <Outcome card={this.state.currentRoll}/>
    <PastRolls pastRolls= {this.state.pastRolls}/>
    </>
      )
    }
}

export default App



// need button linked to function
// need onClick to run function 
// need to link <button> to clear pastRolls
// we need function to reset numbers
