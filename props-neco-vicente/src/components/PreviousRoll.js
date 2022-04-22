import React, { Component } from 'react'

class PreviousRoll extends Component {
  render() {
    console.log(this.props.previousRoll)
    return (
      <div className='last'>
      <h3>Previous Roll</h3>
        {this.props.previousRoll.map((roll, index) => {
          return <p key={index}>{roll}</p>
        })}
      </div>
    )
  }
}

export default PreviousRoll