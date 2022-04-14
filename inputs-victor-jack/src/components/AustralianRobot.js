import React, { Component } from 'react';

class AustralianRobot extends Component {

    render() {
        return (
            <div >
                <h2>Australian Robot</h2>
                <p className= 'australian'>
                    {this.props.userInput}
                </p>
            </div>
        );
    }
}

export default AustralianRobot;