// Challenge: Color Box

// User Stories

// As a user, I can see a white square on the screen

// As a user, when I click on the square the name of a color appears in the box
// As a user, each time I click the box I see a new color name
// As a user, I can cycle through a list of color names, one per click - green, blue, yellow, red, purple, orange
// As a user, when I click the box, the background changes to match the name of the color name displayed in the box
// As a user, I can see many color boxes on the page all acting independently of one another
// Stretch

// As a user, I can see a button to add or remove color boxes
// As a user, when I click the add button, I can add one colorbox that acts independently of the other colorboxes
// As a user, when I click the remove button, I can remove one colorbox

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: "NULL",
    }
  }

  randomColor = () => {

    let colorSelection = ["green", "blue", "yellow", "red", "purple", "orange"]
    let randomizer = colorSelection[Math.floor(Math.random() * colorSelection.length)]

    this.setState({ colors: randomizer })
  }

  render() {

    return (
      <div>
        <div id="theBox" style={{
          border: "5px solid black",
          width: "100px",
          height: "100px",
          backgroundColor: "white",
          color: 'black'
        }} onClick={this.randomColor}>
          {this.state.colors}
        </div>
        <button id="theButton" onClick={this.randomColor}>Name of Color</button>
      </div>
    )
  }
}
