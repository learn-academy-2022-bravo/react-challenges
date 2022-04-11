import React, { Component } from 'react'
import DynamicMenu from './components/DynamicMenu'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      menu:['Lobster Roll - $20', 'Lobster Mac & Cheese - $10', 'Clam Chowder - $15'],
      plate:[]
    }
  }

  fillPlate = (item)=>{
    this.setState({plate: [...this.state.plate, item]})
  }

  render() {
    return (
      <>
      <h1>Cj and Neco's New England Eatery</h1>
      <h2>Menu</h2>
      <DynamicMenu menuItems={this.state.menu } fillPlate={this.fillPlate}/>
      <h2>My Cart</h2>
      <ul>
      {this.state.plate.map((value, index) => {
            return <li key={index}>{value}</li>
      })}
      </ul>
      </>
    )
  }
}
