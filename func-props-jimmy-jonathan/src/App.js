import React, { Component } from 'react'
import DynamicMenu from './Components/DynamicMenu'
class App extends Component{

  constructor(props){
    super(props)
    this.state = {
      foodMenu: [{name: "Cheeseburger", price: 5.99}, {name: "Chicken", price: 5.99}, {name: "Fries", price: 2.99}],
      drinkMenu: [{name:"Soda", price: 1.99}, {name: "Lemonade", price: 1.99}, {name: "Water", price: 1.99}],
      foodTray: []
    }
  }


  fillTray = (item) => {
    this.setState({foodTray: [...this.state.foodTray, item]})
  }

  render() {
    return (
      <>
        <h1>Jimmy John's Menu</h1>
        <h2>Food Menu</h2>
      <DynamicMenu menuItems={ this.state.foodMenu } fillTray={this.fillTray}/>
      <h2>Drink Menu</h2>
      <DynamicMenu menuItems={ this.state.drinkMenu } fillTray={this.fillTray}/>
      <h3>What's on Your Tray?</h3>
      <ul>
        {this.state.foodTray.map((value, index) => {
            return <li key={index}>{value}</li>
        })}
      </ul>
      </>
    )
  }
}
export default App

//Psuedo Code:
//Stretch Goal:
//1: We want the total from the menu order
//<h4> in the <h3> that says "Total"
//