import React, { Component } from 'react'

class WillSmithRobot extends Component {

  KeepMyWifeInput = (input) => {
    return input.toUpperCase()
  }

  render() {
    return(
      <>
        <p>
          Why are you yelling: { this.KeepMyWifeInput(this.props.input) }
        </p>
      </>
    )
  }
}
export default WillSmithRobot
