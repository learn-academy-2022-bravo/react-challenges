import React, { Component } from 'react'

class Squares extends Component{
  constructor(props){
  super(props)
  this.state = {
    bgColor: "",
  }
}

addColorChange = () => {
  this.setState({bgColor: "blue"})
}

// changeText =(text) => {
//   this.setState ({text})
// }

  render(){
    return(
      <>
        <p>Breaks: {this.state.breaks}</p> {/* this.state.breaks is connecting to the "addBreak" function  */}
        <button className="squares1" onClick= {this.addColorChange} style={{color: "black", background:this.state.bgColor}}> {this.state.bgColor} </button>
      </>
    )
  }
}

export default Squares
