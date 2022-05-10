import React, { Component } from 'react';
import EmptySquare from './components/EmptySquare';


class App extends Component {
  render() {
    return (
      <div>
       <h1>Click the Square if you dare!</h1> 
       <EmptySquare />
      </div>
    );
  }
}

export default App;