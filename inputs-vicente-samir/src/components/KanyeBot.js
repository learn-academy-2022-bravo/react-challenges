import React, { Component } from 'react';

class KanyeBot extends Component {

    render() {
        return (
            <p>
           KanyeBot
           <br></br>
           I'm gonna let you finish but Beyonce is {this.props.value}.
            </p>
        );
    }
}

export default KanyeBot;