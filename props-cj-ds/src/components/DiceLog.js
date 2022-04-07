import React, { Component } from 'react'

export default class DiceLog extends Component {
  render() {
    return (
      <div >
          <h2>Previous Dice Rolls History</h2>
        <div className="log-container">
          {this.props.diceLog.map((value, index) => {
              return <h3 key={index}>{value}</h3>
          })}

        </div>

      </div>
    )
  }
}