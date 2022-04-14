import React, { Component } from 'react';

class Rolls extends Component {
    render() {
        return (
            <div> 
                <h3>Previous Rolls</h3>
                {this.props.rolls.map((rolls, index) => {
                    return <p key={index}>{rolls}</p>   
                }
                )}
            </div>
        );
    }
}

export default Rolls;