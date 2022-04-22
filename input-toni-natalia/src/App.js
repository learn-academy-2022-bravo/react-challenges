import React, { Component } from 'react'
import GoodRobot from './component/GoodRobot'

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
    return (
      <>
      <h1>robot
      </h1>
      <input type="text" value={this.state.userInput}onChange={this.handleChange} />
      <GoodRobot userInput={this.state.userInput}/>
      </>
    )
  }
}

export default App