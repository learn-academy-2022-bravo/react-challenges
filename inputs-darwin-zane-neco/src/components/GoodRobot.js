import React, { Component } from 'react'

class GoodRobot extends Component {

  repeatInput = (input) => {
    return input
  }

  render() {
    return(
      <>
        <p>
          I am Legend: { this.repeatInput(this.props.input) }
        </p>
      </>
    )
  }
}
export default GoodRobot
