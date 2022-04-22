import React, { Component } from 'react'
import ChallengeList from './components/ChallengeList'
import Box from './components/Box'
class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      totalBoxes: [],
      addBox: 1


    }
  }
addBox = () => {
  this.setState({
    totalBoxes: [...this.state.totalBoxes,this.state.addBox]
})}
removeBox = () => {
    this.state.totalBoxes.pop()
  
}


  render(){
    return(
      <>
      <div>
        <button onClick={this.addBox}>Add a Box</button>
        <button onClick={this.removeBox}>Remove a Box</button>
        <p>{this.state.totalBoxes}</p>

        
        <Box />
        {/* {this.state.totalBoxes.map((card, index) => {
          <p key={index}>{card}</p>})} */}
        <ChallengeList />
      </div>  
    </>
    )
  }
}
export default App