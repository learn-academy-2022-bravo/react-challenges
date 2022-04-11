import React, { Component } from 'react'
import FoodList from './components/FoodList'

class App extends Component{
  constructor(props){
  super(props)
  this.state = {
    foodList: ["Chicken 5", "Eggs 2", "Bread 3", "Bagels 4"],
    orderList: []
  }
}
  bag = (item) => {
    this.setState({orderList: [...this.state.orderList, item]})
  }

  render(){
    return(
      <>
      <h1>Food Options</h1>
      <ul>
       <FoodList foodList= {this.state.foodList} bag={this.bag}/>
      </ul>
      <h2>Ordered Food</h2>
      <ul>
      {this.state.orderList.map(value => {
        return <li>{value}</li>
      })}
      </ul>
      </>
    )
  }
}

export default App
