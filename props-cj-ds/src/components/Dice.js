import React, { Component } from 'react'

export default class Dice extends Component {
  render() {
    return (
      <div className="dice-container">
        <h2>Click to roll the dice!</h2>
        <img
          className="dice-img"
          src={this.props.currentRollImage}
          onClick={this.props.handleDiceRoll}
        />
      </div>
    )
  }
}
