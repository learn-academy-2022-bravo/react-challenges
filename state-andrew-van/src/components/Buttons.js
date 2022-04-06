
import React, { Component } from 'react'
import Squares from './Squares'

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      removeButton: false,
    };
  }

 toggelButton = () => {
    this.setState({removeButton: !this.state.removeButton });
  };

  render() {
    const { removeButton } = this.state;
    return (
      <div>
        <button onClick={() => this.toggleButton()}>Remove a Square</button>
        {removeButton ? <Squares title="Hello React"/> : null}
      </div>
    );
  }
}

export default Buttons
