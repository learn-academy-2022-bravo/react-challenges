import React, { Component } from 'react'


class ColorChange extends Component{
  constructor(props){
    super(props)
    this.state = {
      color:["blue", "red", "green", "orange"],
      currentColor: 0
    }
}
  changeColor = () => {
    if (this.state.currentColor)
      this.setState({color: this.state.color})

  }

  render(){
    return(
      <>
      <div style={{ height:"100px",width:"100px", border:"2px solid black",backgroundColor: this.state.color }} onClick={this.changeColor} ></div>
      </>
    )
  }
}
export default ColorChange
