// As a developer, I am tasked with creating a food ordering application in React.
// This is the first iteration of an application that is going to be much larger in the future, so I am tasked with creating a solid foundation from which the code base can grow.

// As a user, I can see an application that has a list of food items and the price of each item

// As a user, I can select an item I wish to order

// As a user, I can see the items I have selected displayed on the page

// Stretch Challenges

// As a user, I can see the total cost of my current order
// As a user, I can see both the base total of my food selections and the total that includes sales tax
// As a user, I can see the total that includes sales tax rounded to two decimals
// As a user, I can see an image of my food selection on the menu

import React, { Component } from 'react'
import FoodMenu from './components/FoodMenu'
import FoodOrder from './components/FoodOrder'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: [
        { foodName: "Spaghetti", foodPrice: 5 },
        { foodName: "Fettuccinni Alfredo", foodPrice: 15 },
        { foodName: "Noodles", foodPrice: 10 }
      ],
      order: [],
      total: 0
    }
  }

  addItem = (newItem) => {
    let runningTotal = this.state.total
    this.setState({ order: [...this.state.order, newItem], total: runningTotal += newItem.foodPrice })
  }

  render() {
    return (
      <>
        <FoodMenu
          menu={this.state.menu}
          addItem={this.addItem}
        />
        <FoodOrder
          order={this.state.order}
          total={this.state.total}
        />
      </>
    )
  }
}
