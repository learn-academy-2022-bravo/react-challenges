import React, { Component } from 'react'

class Dice extends Component{
  render(){
    return(
      <h1>The number is { this.props.number }!</h1>
    )
  }
}
export default Dice