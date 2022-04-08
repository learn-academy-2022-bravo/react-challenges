import React, { Component } from 'react'

class BadRobot extends Component {

  blahInput = (input) => {

    return input
  }

  render() {
    return(
      <>
        <p>
          Why are you yelling: { this.blahInput(this.props.input) }
        </p>
      </>
    )
  }
}
export default BadRobot
