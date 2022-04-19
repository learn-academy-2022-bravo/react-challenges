import React, { Component } from 'react'

class Box extends Component{
  constructor(props){
    super(props)
    this.state = {
      color:["rgb(158, 52, 235)","rgb(158, 52, 0)"]
    }
  }

  addBreak = () => {
    this.setState({})
  }


  render(){
    return(
      <>
      <div style={{ height: "250px",width: "250px", border: "5px solid blue" }}> onClick ={this.colorName}
    </div>
      </>
    )
  }
}

export default Box