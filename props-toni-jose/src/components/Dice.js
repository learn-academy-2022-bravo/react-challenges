import React, { Component } from 'react';


class Dice extends Component {
    render() {
        return (
            <div className='box'>
              <h1>Test</h1> 
              
              <p>{this.props.roll}</p> 
            </div>
        );
    }
}

export default Dice;