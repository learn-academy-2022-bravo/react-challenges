import React, { Component } from "react"
import GoodBot from './Components/GoodBot'
import BadBot from './Components/BadBot'
import CustomBot from './Components/CustomBot'


class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      userInput: "",
      badOutput: "BLA"
    }
  }

  badChange = (e) => {
    this.setState({badInput: e.target.value})
  }


  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({userInput: e.target.value})
  }

  render(){
    return(
      <>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
        />





        <GoodBot goodBotKeep={this.state.userInput}/>
        <BadBot badBotChange={this.state.userInput}/>
      </>
    )
  }
}
export default App
