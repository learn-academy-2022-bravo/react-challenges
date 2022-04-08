import React, { Component } from 'react';
import BadRobot from './components/BadRobot';
import GoodRobot from './components/GoodRobot';

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
    console.log(this.state)
    return (
      <>
      <h1> Listening Robot</h1>
      <input
        type="text"
        value={this.state.userInput}
        onChange={this.handleChange}
        />
        <p>Wassup {this.state.userInput}</p>
      <GoodRobot userInput={this.state.userInput}/>
      <BadRobot userInput={this.state.userInput}/>
      </>
        
      
    )
  }
}

export default App;
