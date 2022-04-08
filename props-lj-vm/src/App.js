
import React, {Component} from 'react'
import Roll from './components/Roll'
import LastRolls from './components/LastRolls'
import Dice1 from './components/images/Dice1.png'
import Dice2 from './components/images/Dice2.png'
import Dice3 from './components/images/Dice3.png'
import Dice4 from './components/images/Dice4.png'
import Dice5 from './components/images/Dice5.png'
import Dice6 from './components/images/Dice6.png'




class App extends Component {
    constructor (props){
   super (props) 
   this.state = { 
     diceRolls: [Dice1, Dice2, Dice3, Dice4, Dice5, Dice6],
     currentRoll: 0,
     previousRolls: []
   }
}
  
rollDice = () => {
  let randomNum = Math.floor(Math.random()*this.state.diceRolls.length)
  this.setState({
  currentRoll: this.state.diceRolls[randomNum],
  previousRolls: [...this.state.previousRolls,
  this.state.diceRolls[randomNum]]
})
}

clearRolls = () => {
  this.setState({previousRolls:[]
  })
}



render(){
  return(
    <>
      <h1> Dice Roller </h1>
      <button onClick = {this.rollDice}> Roll Dice </button>
      <button onClick = {this.clearRolls}> Clear Roll </button>
      <Roll roll = {this.state.currentRoll} />
      <LastRolls lastRolls = {this.state.previousRolls} />
    </>
    ) 
  }
}



export default App
