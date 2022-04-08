import React, { Component } from 'react'
import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'
import WillSmithRobot from './components/WillSmithRobot'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput: ""
      
    }
  }

  handleChange = (e) => {
    this.setState({userInput: e.target.value})
  }

  render() {
    console.log(this.props.userInput)
    return(
      <>
        <h1>Goooood Robot</h1>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
        />
        <GoodRobot input={this.state.userInput} />
        <BadRobot input={this.state.userInput} />
      </>
    )
  }
}
export default App
