import React, { Component } from 'react';
import Dice from './components/Dice';


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      dieFace: ['1', '2', '3', '4', '5', '6'],
      currentFace: '',
      previousFace: []
    }
  }


  rollDice = () => {
    let randomDie = Math.floor(Math.random() * this.state.dieFace.length)
    this.setState({
      currentFace: this.state.dieFace[randomDie],
      previousFace: [...this.state.previousFace, this.state.dieFace[randomDie]]
    })
  }



  render() {
    return (
      <>
        <h1>Roll the Die</h1>
        {/* <h3>{this.state.currentFace}</h3>
        <h3>{this.state.previousFace}</h3> */}

        <button onClick={this.rollDice}>ROLL</button>
        
        <Dice dice={this.state.currentFace} />
       
      </>
    );
  }
}

export default App;
