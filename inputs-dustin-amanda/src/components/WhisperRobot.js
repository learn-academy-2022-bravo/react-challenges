import React, { Component } from 'react';


class WhisperRobot extends Component {
  render() {
        return (
            <div>
                <h1>Whisper Robot</h1>
                <p className="whisper"> {this.props.userInput} </p>
                
            </div>
        );
    }
}

export default WhisperRobot