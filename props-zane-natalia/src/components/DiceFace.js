import React, { Component } from 'react'

class DiceFace extends Component {
  render(){
    return (
      <div>
      <h3>Dice Face</h3>
      <p>{this.props.dice}</p>
      </div>
    )
  }
}
export default DiceFace
