import React, { Component } from 'react'

class App extends Component {
    constructor(props){
      super(props)
      this.state ={
        color:["red"]
      }
    }
  render() {
    return (
      <>
      <h1>Color Box</h1>
      <div style={{ height:"100px", width:"100px",backgroundColor: this.state.color}}></div>
    </>
    )
  }
}

export default App
