import React, { Component } from 'react'

class BadBot extends Component {

//   imNotListening = (input) => {
//     return input({this.props.badInput})
//   }

  render() {
    return(
      <>
        <p>
          Im not listening { (this.props.badBotChange) }
        </p>
      </>
    )
  }
}
export default BadBot















//output is going to be the amount of characters as there is in the input box
//we want it to change the input characters to "BLA" and repeat "BLA" continuously until the inputted characters end

// option1
//whatever word is passed through the argument, it is taken back up to the parameter, and we can loop through that parameter to change the characters to "BLA" 

// option2
