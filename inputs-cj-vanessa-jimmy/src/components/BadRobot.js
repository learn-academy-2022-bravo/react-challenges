import React, { Component } from 'react'

export default class BadRobot extends React.Component {
  
  robotBad = (string) => {
    let blahArray = ["B","L","A","H"]
    return string.replace(string[0],blahArray[0])
  }
    
  render() {
    return (
      <>

      <p>I am the Bad Robot: {this.robotBad(this.props.userInput)}</p>

      </>
    )
  }
}
