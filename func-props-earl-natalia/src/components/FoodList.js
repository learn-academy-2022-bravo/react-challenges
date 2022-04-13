import React, { Component } from 'react'

class FoodList extends Component {
  render(){
    return(
      <>
      <ul>
      {this.props.foodList.map (value => {
        return(
          <li>
            <button onClick={ () => this.props.bag(value) }>
              {value}
            </button>
          </li>
        )
      })}
      </ul>
      </>
    )
  }
}
export default FoodList
