import React, { Component } from 'react';

class Kanye extends Component {
    
    repeat = (input) => {
        return input
    }

    render() {
        return (
            <>
                <p>
                Kanye only cares about Kanye
                {this.repeat(this.props.kanye)}
                </p>
            </>
        );
    }
}

export default Kanye;