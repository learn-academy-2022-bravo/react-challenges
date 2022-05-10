import React, { Component } from 'react'

class Dice extends Component{
  render(){
    return(
    <div class = "diceRolls">
      <h1 onClick = {this.props.roll}>{ this.props.number }</h1>
    </div>
    )
  }
}
export default Dice
