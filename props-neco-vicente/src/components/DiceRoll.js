import React, { Component } from 'react'

class DiceRoll extends Component {
  render() {
    return (
      <div className='tile'>
        <h3>Dice Roll</h3>
        <p>{this.props.diceroll}</p>
      </div>
    )
  }
}

export default DiceRoll