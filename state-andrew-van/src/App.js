import React, { Component } from 'react'
import Squares from './components/Squares'
import Buttons from './components/Buttons'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      colors: ["red", "yellow", "orange", "green", "blue", "purple"],
      currentColor: ""
    }
  }

handleColorSelection = () => {
  this.setState({currentColor: this.state.colors[0]})
}

  render(){
    return(
      <>
        <h1>Click the Square!!</h1>
        <div className= "color-box" onClick ={this.state.currentColorSelection} style={{backgroundColor: this.state.currentColor}}> {this.state.currentColor}
        </div>
      </>
    )
  }
}

export default App
