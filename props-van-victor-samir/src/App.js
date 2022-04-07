import React, { Component } from 'react';
import Dice from './components/Dice'
import Rolls from './components/Rolls'
class App extends Component {
  constructor(props){
    super(props)
    this.state = {}

  }
 render() {
    return (
      <div>
        <p>Dice Roll</p>
      <Dice />
      <Rolls />



      </div>
    );
  }
}

export default App;