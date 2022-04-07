import React, { Component } from 'react'

export default class Dice extends Component {
  render() {
    return (
      <div className='dice' onClick = {this.props.onClick}>

          <p>{this.props.dice}</p>
          <p>Click Box to Roll </p>
      </div>
    )
  }
}
