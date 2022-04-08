import React, { Component } from 'react'
import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'
import KanyeBot from './components/KanyeBot'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      goodRobot: "",
      badRobot: "",
      kanyeBot: ""
    }
  }

  handleChange = (e) => {
    this.setState({
      goodRobot: e.target.value,
      badRobot: 'BLABLA',
      kanyeBot: e.target.value
    });
  }

  render() {
    return(
      <>
      <h1> Say Something: </h1>
        <input
          type="text"
          value={this.state.goodRobot}
          onChange={this.handleChange}
        />
        <GoodRobot value={this.state.goodRobot}/>
        <BadRobot value={this.state.badRobot}/>
        <KanyeBot value={this.state.kanyeBot}/>

      </>
    )
    }
  }
export default App

