import React, { Component } from 'react';

class Rolls extends Component {
    render() {
        return (
         <>
         <h4>Rolls</h4>
         {this.props.rolls.map((previousRoll, index) => {
            return <p key={index}>{previousRoll}</p>
         })}
            
        </>
        )
    }
}
export default Rolls