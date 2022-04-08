import React, { Component } from 'react'
import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state={
      userInput: ""
    }
  }

  handleChange = (a) => {
    this.setState({userInput: a.target.value})
  }

  render() {
    return (
     <>
     <h1>Header</h1>
     <input
     type="text"
     value={this.state.userInput}
     onChange={this.handleChange}
     />
     <GoodRobot userInput={this.state.userInput} />
     <BadRobot userInput={this.state.userInput} />
     </>
    )
  }
}
