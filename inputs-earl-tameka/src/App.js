import React, { Component } from 'react';
import Bad from './components/Bad';
import Good from './components/Good';
import Kanye from './components/Kanye';

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
      <h1>Robot Fortune Teller</h1>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleChange}
        />
      
      <h2>Good Robot</h2>
        <Good good={this.state.userInput} />

      <h2>Bad Robot</h2>
        <Bad bad={this.state.userInput} />

      <h2>Kanye Robot</h2>
        <Kanye kanye={this.state.userInput} />
      </>
    );
  }
}

export default App;