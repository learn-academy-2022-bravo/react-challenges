import React, { Component } from 'react'
import './App.css';
import Order from './Components/Order';


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      lunchMenu: [
        {item: 'steak', price: '$25'},
        {item: 'chicken', price: '$25'},
        {item: 'tofu', price: '$25'},
      ],

      // menu: ['Steak', 'Ox Tails', 'Chicken', 'Tofu'],
      // price: ['$25', '$20', '$15', '$15'], 
      ourOrder: []
    }
  }


  fillPlate = (item) => {
    this.setState({ourOrder: [...this.state.ourOrder, item.price + ' ' + item.item]})
  }



render() {
  console.log(this.state.lunchMenu)
  return (
      <>


      <Order menuItems={this.state.lunchMenu} fillPlate = {this.fillPlate}/>


      <h3>Your Order:</h3>
            {this.state.ourOrder.map(value=> {
              return <li>{value}</li>
            })}



      </>
    );
  }
}
export default App;
