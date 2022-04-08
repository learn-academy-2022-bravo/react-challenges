import React, { Component } from 'react'

class Dice extends Component {
  render() {
   return (
     <>
      <h3>Dice Component</h3>
      <p>{this.props.dice}</p>  
     </>
    )
  }
}

export default Dice