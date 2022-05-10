import React, { Component } from 'react'

class WhiteBox extends Component {
  constructor(props){
    super(props)
    this.state = {
      color: i
    }
  }

  handleChange = () => {
    let colorArray = [ "green", "blue", "yellow", "red", "purple", "orange"]
    for (var i = -1; i < colorArray.length; i++) {
      return (i);
      
     }
    this.setState({color: i} )
  }
    
  render(){
    return(
        <>
      <div>
            <div id="aBox" style = {{
                    border: "7px solid black",
                    width: "150px",
                    height: "150px"
                }} >
             {this.state.color}</div>
            <button onClick = {this.handleChange}> click to change color</button>
        </div>
      </> 
    )
  }
}

export default WhiteBox