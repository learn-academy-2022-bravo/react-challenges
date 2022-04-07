import React, { Component } from 'react'

export default class Dice extends Component {
  render() {
    return (
      <div className="game-container">
          <h2>Click to Roll the Dice!</h2>
      <img src={this.props.currentRollDice}
            className="dice-img"
            onClick={this.props.handleDiceRoll}
      />
      </div>
    )
  }
}
