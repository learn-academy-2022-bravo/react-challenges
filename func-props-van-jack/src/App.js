import React, { Component } from 'react';
import MenuOrdered from './components/MenuOrdered'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      menuItems: [
        {food: "burger", price: 5},
        {food: "hotdog", price: 3},
        {food: "fried pickles", price: 2}],
      order: []
    }
  }


  // function that passes these values into a new list

  fillOrder = (item) => {
     this.setState({order: [...this.state.order, item]})
   }

console.log(this.state.menuItems.food);

  render() {
    return (
      <>
        <h1>Menu Application</h1>
        <tr>
        <MenuOrdered selectedItems ={ this.state.menuItems.food } fillOrder ={this.fillOrder} />
        </tr>
        <h2>Ordered Items</h2>

        <ul>
        {this.state.order.map((value, index) => {
          return <li key={index}>{value}</li>
  })}
      </ul>
      </>
    );
  }
}

export default App;
