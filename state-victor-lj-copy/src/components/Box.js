import React, { Component } from 'react'
class Box extends Component{
  constructor(props){
    super(props)
    this.state = {
      breaks: 0,
      color: [""]
    }
  }
  colorOrder = () => {
     let colors = ["green", "blue", "yellow", "red", "purple", "orange"]
  
    if (this.state.breaks === colors.length - 1) {
      this.setState({breaks: this.state.breaks -= colors.length - 1})

    }else{
      this.setState({breaks: this.state.breaks + 1})
      this.setState({color: ["green", "blue", "yellow", "red", "purple", "orange"]})
    }
  }
  render(){
    return(
      <>
      <div onClick={this.colorOrder} style={{ border: "5px solid black",height: "250px",width: "250px", background: this.state.color[this.state.breaks]}}>
      <p>{this.state.color[this.state.breaks]} </p>
      {this.props.totalBoxes.map((card, index) => {
          return <p key={index}>{card}</p>
        })}
      </div>
      </>
    )
  }
}
export default Box