import React, { Component } from 'react'
import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'
import KanyeBot from './components/KanyeBot'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      userInput: ""
    }
  }

  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({userInput: e.target.value})
  }

  render(){
    return(
      <>
      <h1> Robo Active Listening </h1>
      <p> Say Something </p>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
        />
        <GoodRobot userInput = {this.state.userInput} />
        <BadRobot userInput = {this.state.userInput} />
        <KanyeBot userInput = {this.state.userInput} />
      </>
    )
  }
}
export default App
