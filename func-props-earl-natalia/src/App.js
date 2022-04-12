import React, { Component } from 'react'
import FoodList from './components/FoodList'
import AddTotal from './components/AddTotal'

class App extends Component{
  constructor(props){
  super(props)
  this.state = {
    foodList: [ "Chicken 5" , "Eggs 2", "Bread 3", "Bagels 4" ],
    foodPrice: [5,2,3,4],

    foodArray: [
      {name: "Chicken", price: 5},
      {name: "Eggs", price: 2},
      {name: "Beard", price: 3},
      {name: "Bagels", price: 4},
      ],

    orderList: [],
    orderPrice: [],
    total: []
  }
}
  bag = (item) => {
    this.setState({orderList: [...this.state.orderList, item]})
  }

  price =(number) => {
    this.setState({orderPrice: [...this.state.orderPrice, number]})
    }

  totalPrice = (number) => {
    this.setState({total: [...this.state.total, number] })
  }


  render(){
    return(
      <>
      <h1>Food Options</h1>
      <ul>
       <FoodList
       foodList= {this.state.foodList}
       bag={this.bag}
       />

      </ul>
      <h2>Ordered Food</h2>
      <ul>
      {this.state.orderList.map(value => {
        return <li>{value}</li>
      })}
      </ul>

      <h3>Total</h3>
      <AddTotal
      foodPrice = {this.state.foodPrice}
      price = {this.price}
      />

      <ul>
      {this.state.orderPrice.map(value => {
        return <li>{value}</li>
      })}
      </ul>

      </>
    )
  }
}

export default App
