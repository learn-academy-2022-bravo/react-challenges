import './App.css';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ipPayload:""
    }
  }

getInfo = () => {
  fetch("https://ipapi.co/json/")
  .then(response => response.json())
  .then(payload => this.setState({ipPayload: payload}))
}
  render() {
    return (
      <>
      <h1>Our Location and IP Address</h1>
      <button onClick={this.getInfo}>Click Here</button>
      <p>Your IP address is: {this.state.ipPayload.ip}</p> 
    </>
    )
  }
}


