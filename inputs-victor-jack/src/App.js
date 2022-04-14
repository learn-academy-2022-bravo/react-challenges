
import './App.css';
import React, { Component } from 'react';
import GoodRobot from './components/GoodRobot'
import BadRobot from './components/BadRobot'
import AustralianRobot from './components/AustralianRobot'


class App extends Component {
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



  render() {
    return (
      <div>
        <h1>Robo Active Listening</h1>
        <input 
          type      = "text"
          value     = {this.state.userInput}
          onChange  = {this.handleChange}
        />
        <GoodRobot userInput={this.state.userInput}/>
        <BadRobot userInput={this.state.userInput}/>
        <AustralianRobot userInput={this.state.userInput}/>
      </div>
    );
  }
}

export default App;