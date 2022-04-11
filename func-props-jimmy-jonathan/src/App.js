import React, { Component } from 'react'
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      foodMenu = ["Cheeseburger $5.99", "Chicken $5.99", "Fries $2.99"]
      drinkMenu = ["Soda $1.99", "Lemonade $1.99", "Water $1.99"]
    }
  }

  render(){
    return(
      <>
        <h1>Jimmy John's Menu</h1>
        <ul>
        <li>Cheeseburger</li>
        <li>Chicken Sandwich</li>
        <li>Fries</li>
        <li>Soda</li>
        <li>Lemonade</li>
        <li>Water</li>
        </ul>
      </>
    )
  }
}
export default App
