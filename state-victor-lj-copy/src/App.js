import React, { Component } from 'react'
import ChallengeList from './components/ChallengeList'
import Box from './components/Box'


class App extends Component{

  render(){
    return(
      <>
        <ChallengeList />
        <Box />
      </>
    )
  }
}

export default App