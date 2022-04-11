import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      menuItems: ["burger", "hotdog", "fried pickles"],
      menuPrices: [5, 3, 2],
      order: []
    }
  }

  // function that passes these values into a new list


  render() {
    return (
      <div>
        <h1>Menu Application</h1>
        <tr>
          <th>Menu Item</th>
          <th>Price</th>
        </tr>
        <tr>
          {this.state.menuItems.map(value => {
            return <li>{value}</li>
          })}
        </tr>
        <ul>
          {this.state.menuItems.map(value => {
            return <li>{value}</li>
          })}
        </ul>
        <h2>Ordered Items</h2>
      </div>
    );
  }
}

export default App;
