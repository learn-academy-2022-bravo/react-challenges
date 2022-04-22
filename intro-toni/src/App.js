
let colorArray = [ "green", "blue", "yellow", "red", "purple", "orange"]

import React, { Component } from 'react'
import Header from './component/Header'
import WhiteBox from './component/WhiteBox'

class App extends Component {
  render(){
    return(
      <>
        <Header />
        <WhiteBox />
      </>
    )
  }
}

export default App