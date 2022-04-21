import React, { Component } from 'react';


class BadRobot extends Component {

 badify = (input) => {
    let theBlah = ["B", "L", "A", "H", " "]
    let theBlahArray = input.split("").map((value, index) => {
        return theBlah[index % theBlah.length]
    }) 
    return theBlahArray.join("")
 }
  render() {
        return (
            <div>
            <h1> Bad Robot </h1>
                <p>I hear you saying {this.badify(this.props.userInput)}</p>
            </div>
        );
    }
}

export default BadRobot