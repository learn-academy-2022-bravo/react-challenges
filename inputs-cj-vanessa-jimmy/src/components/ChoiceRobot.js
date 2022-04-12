import React, { Component } from 'react'

export default class ChoiceRobot extends React.Component {

  robotRepeater = (input) => {
   return input
  }

  render() {
    return (
      <>

      <p>I am the Choice Robot: {this.robotRepeater(this.props.userInput)}</p>

      </>
    )
  }
}
