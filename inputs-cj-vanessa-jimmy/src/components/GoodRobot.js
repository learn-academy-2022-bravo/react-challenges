import React, { Component } from 'react'

export default class GoodRobot extends React.Component {

  robotRepeater = (input) => {
   return input
  }
    
  render() {
    return (
      <>

      <p>I am the Good Robot: {this.robotRepeater(this.props.userInput)}</p>

      </>
    )
  }
}
