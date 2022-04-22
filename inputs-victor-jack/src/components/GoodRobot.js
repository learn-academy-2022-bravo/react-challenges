import React, { Component } from 'react';





class Robot extends Component {
    render() {
        return (
            <div>
                <h2>Good Robot</h2>
                <p>
                    {this.props.userInput}
                </p>
            </div>
        );
    }
}

export default Robot;