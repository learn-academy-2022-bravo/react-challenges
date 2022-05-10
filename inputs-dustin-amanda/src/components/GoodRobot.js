import React, { Component } from 'react';


class GoodRobot extends Component {
  render() {
        return (
            <div>
                <h1>Good Robot</h1>
                <p> {this.props.userInput} </p>
                
            </div>
        );
    }
}

export default GoodRobot