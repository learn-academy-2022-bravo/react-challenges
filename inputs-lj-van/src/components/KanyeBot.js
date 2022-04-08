
import React, { Component } from 'react'

class KanyeBot extends React.Component {

weAreYelling = (input) => {
  return input.toUpperCase()
}

  render() {
    return (
      <>
      <h3>  Kanye Robot </h3>
      <p> I'm gonna let you finish but Beyonce is {this.props.userInput} </p>
      </>
    );
  }
}

export default KanyeBot
