import React, { Component } from 'react'
import AmazingMenu from './components/AmazingMenu'

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      foodMenu: ["Carne Asada $8.99", "Burritos $6.99", "Enchiladas $9.99", "Tortas $8.50"],
      order: []
    }
  }
  fillOrder = (item) => {
    this.setState({order: [...this.state.order, item]})
  }

  render() {
    return (
      <>
      <h1>Mexican Food Menu</h1>
      <AmazingMenu menuItems={ this.state.foodMenu } fillOrder={this.fillOrder}/>
      <h2> Your Order: </h2>
      <ul>
        {this.state.order.map(value => {
          return <li>{value}</li>
        })}
      </ul>
      <h3> Your Total: </h3>
      </>
    )
  }
}

export default App 


// Pseudo Code 
// create a function that adds the total of all items in our order 
// 