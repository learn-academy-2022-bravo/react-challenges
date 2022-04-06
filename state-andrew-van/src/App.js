import React, { Component } from 'react'
import Squares from './components/Squares'
import Buttons from './components/Buttons'

class App extends Component{
  render(){
    return(
      <>
        <h1>Click the Square!!</h1>
        <Buttons />
        <Squares />
        <Squares />
        <Squares />
        <Squares />
        <Squares />
      </>
    )
  }
}

export default App
