import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      ipPayload: ""
    }
  }

retrieve = () => {
  fetch("https://ipapi.co/json/")
  .then(response => response.json())
  .then(payload => this.setState({ipPayload: payload}))
  .catch(error => console.log(error))
}


  render() {
    console.log(this.state.ipPayload)
    return (
      <div>
        <h1>Click the button to see IP address and location</h1>
        <button onClick={this.retrieve}>Click Here</button>
        <h3>IP Address: {this.state.ipPayload.ip} </h3>
        <h3>Location: {this.state.ipPayload.region} </h3>

      </div>
    );
  }
}

export default App;
