import React, { Component } from 'react'

class Squares extends Component{
  constructor(props){
  super(props)
  this.state = {
    bgColor: "",
  }
}


addColorChange = () => {
  const colorArray = ["green", "blue", "yellow", "red", "purple", "orange"]
  const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)]
  this.setState({bgColor: randomColor })
}

  render(){
    return(
      <>
        <button className="squares1" onClick= {this.addColorChange} style={{color: "black", background:this.state.bgColor}}> {this.state.bgColor} </button>
      </>
    )
  }
}

export default Squares
