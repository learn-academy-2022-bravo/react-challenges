import React, { Component } from 'react'

class BadRobot extends Component {

  blahInput = (input) => {
    let newStr = this.props.input.split('')
    let newStr2 = newStr.splice(null,this.props.input.length, 'b', 'l', 'a')
    return newStr2.join("")
    }
    // console.log(wordManipulator(this.props.greeting))

  render() {
    return(
      <>
       <h1>Baaaaad Robot</h1>
        <input
          type="text"     
        />
        <p>
          I, Robot.: { this.blahInput(this.props.input) }
        </p>
      </>
    )
  }
}
export default BadRobot
