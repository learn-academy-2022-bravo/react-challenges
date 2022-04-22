import React, { Component } from 'react';


class GoodRobot extends Component {

    render() {
        return (
            <p>
           GoodRobot:
           <br></br>
           I hear you saying {this.props.value}. Is that correct? 
            </p>
        );
    }
}

export default GoodRobot;