import React, { Component } from 'react';

class Good extends Component {
    
    repeat = (input) => {
        return input
    }
    
    
    render() {
        return (
            <>
                <p>
                    Good Robot says: 
                    {this.repeat(this.props.good)}
                </p>
            </>
        );
    }
}

export default Good;