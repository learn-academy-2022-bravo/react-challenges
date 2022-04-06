import React, { Component } from 'react'

class BoxColor extends Component {
  constructor(props){
    super(props)
    this.state = {
      color:["white", "red", "blue", "purple"]
      
    }
  }
  changeColor = () => {
    for (let i=0; i < this.state.color.length; i++){
      let nextColor=0
      this.setState({color: this.state.color[i]})
    }
  }

  // colorPicker = this.state.color.map((value , index) => {
  //   this.setState({color: this.state.color[index]})
  // })

  render(){
    return(
      <div style={{ height:"100px", width:"100px", border: "2px solid black",backgroundColor: this.state.color}}
      onClick= {this.changeColor}>

      </div>
    )
  }
}

export default BoxColor
