import React, { Component } from 'react';

class Dice extends Component {
    render() {
        return (
            <div>
                <h3>Lucky Die</h3>
                <p>{this.props.dice}</p>
            </div>
        );
    }
}

export default Dice;