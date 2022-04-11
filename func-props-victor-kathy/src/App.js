import React, { Component } from 'react';
import Order from './components/Order'


class App extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      foodList: ["Chicken", "Fish", "Pretzles", "Cookies", "Bread"],
      foodPrice: [8, 10, 6, 5, 4],
      order: []
    }
  }



  render() {
    return (
      <div className='everything'>
        <h1>This is a test</h1>
        <Order />
      </div>
    );
  }
}

export default App;