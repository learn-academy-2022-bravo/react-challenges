import React, { Component } from 'react';

class Roll extends Component {
    render() {
        return (
            <>
            <h2> Roll the dice! </h2>
            <p>{this.props.roll}</p>
            </>
        );
    }
}

export default Roll