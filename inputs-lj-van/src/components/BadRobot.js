
import React, { Component } from 'react'

class BadRobot extends React.Component {

  blaBla = (string) => {
    let splitArray = string.split("")
      
  let badRobotArray = []
  for(let i = 0; i<splitArray.length; i++) {
    badRobotArray.push("B","L","A")
  }
    return badRobotArray 
  }


  render() {
    return (
      <>
      <h3> Bad Robot </h3>
      <p> I hear you saying {this.blaBla(this.props.userInput)} is that correct? </p>
      </>
    );
  }
}

export default BadRobot
