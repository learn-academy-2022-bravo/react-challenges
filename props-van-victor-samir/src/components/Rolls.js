import React, { Component } from 'react'

export default class Rolls extends Component {
  render() {
    return (
        <div className='rolls'>
          <h1>Previous Roll</h1>
          {this.props.previousRolls.map((roll, index) => {
            return <p key={index}>{roll}</p>
          })}
        </div>
      )
  }
}
