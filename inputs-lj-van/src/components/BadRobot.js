
import React, { Component } from 'react'

class BadRobot extends React.Component {

weAreYelling = (input) => {
  return input.toUpperCase()
}

  render() {
    return (
      <>
      <h3> Bad Robot </h3>
      <p> I hear you saying {this.props.userInput} is that correct? </p>
      </>
    );
  }
}

export default BadRobot
