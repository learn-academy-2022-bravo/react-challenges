
import React, { Component } from 'react'

class Rolls extends Component {
  render() {
    console.log(this.props.previousNumber)
    return (
      <div className='last'>
        <h3>Previous Number</h3>
        {this.props.previousNumber.map((card, index) => {
          return <p key={index}>{card}</p>
        })}
      </div>
    )
  }
}

export default Rolls
