import React, { Component } from 'react'

class AddTotal extends Component {
  render(){
    return(
      <>
      <ul>
      {this.props.foodPrice.map (value => {
        return(
          <li>
            <button onClick={ () => this.props.price(value) }>
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
export default AddTotal
