import React, { Component } from 'react';


class BadRobots extends Component {
    render() {
        return (
           <p>
          BadRobot: 
          <br></br>
           I hear you saying {this.props.value}. Is that correct? 
            </p>
        );
    }
}

export default BadRobots;