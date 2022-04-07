// --As a user, I can see an application called Dice Roller
//run yarn start so output is visible

// ----As a developer, I can create a React application with App.js as my stateful component
// clear data from App.js
// adding boilerplate react syntax, including class App, constructor/super, render/return, export
// add this.state with a key called diceFace with an array with numbers 1 through 6

// ---As a developer, I can create two child components that will accept props from App.js
// add components folder in src
// create two child components called Dice and Rolls in the components folder
// import child components into App.js

// --As a user, I can click a box and see the outcome of my current "roll"
// make onClick button within component Dice link the outcome of onClick using props to App.js

// ---As a developer, I can pass a method from App.js to my dice component to display a number between 1 and 6
// make a method in App.js called diceRoller
// make the method return a random number from our diceFace array
// call result of method in both Dice and Rolls component

// --As a user, I can see my roll logged
// when button is clicked you see a new random number 1-6 in the dice component and you see all your previous results in the Rolls component

// ---As a developer, I can pass the value of the roll to a log component
// add log code to diceRoller method

// --As a user, I can see the roll log continue to grow as I roll the dice

import React, { Component } from 'react'
import Dice from './components/Dice'
import Rolls from './components/Rolls'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      diceFace: [1, 2, 3, 4, 5, 6]
    }
  }
  render(){
    return(
      <>
      <div>
        <Dice number={ this.state.diceFace[5] } />
      </div>
      </>
    )
  }
}

export default App
