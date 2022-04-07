import React, { Component } from 'react'

export default class Dice extends Component {
  render() {
    return (
      <div className='dice'>
          <h1>Dice:</h1>
          <p>{this.props.dice}</p>
      </div>
    )
  }
}
