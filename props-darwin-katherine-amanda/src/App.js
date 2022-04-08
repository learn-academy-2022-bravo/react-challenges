import './App.css';
import React, { Component } from 'react'
import Dice from './components/Dice'
import Rolls from './components/Rolls'

class App extends Component {
  constructor(props){
    super(props) 
    this.state = {
      diceSides: [1,2,3,4,5,6],
      currentRoll: [], 
      previousRoll: []
    }
  }
rollDice = () => {
  let randomRoll = Math.floor(Math.random() *
  this.state.diceSides.length)
  this.setState({
    currentRoll: this.state.diceSides
    [randomRoll],
    previousRoll: [...this.state.previousRoll,
    this.state.diceSides[randomRoll]]

  })
}
  render() {
    return (
      <>
      <h1> Dice Roller </h1>
      <img src="https://cdn.shopify.com/s/files/1/1476/1216/products/d6-big-transparent-blue_1024x1024.png?v=1586987170" width="200px" height="220px"/>
      <br/>
      <button onClick={this.rollDice}> Roll the Dice</button>
      <Dice dice={this.state.currentRoll}/>
      <Rolls rolls={this.state.previousRoll}/>

      </>
        
    )
  }
}

export default App;

