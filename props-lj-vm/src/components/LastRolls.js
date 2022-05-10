import React, { Component } from 'react'

class LastRolls extends Component {
    render() {
        return (
            <>
                <h3> Previous Rolls </h3>
                {this.props.lastRolls.map((roll,index)=> {
                return <p key={index}>{roll} </p>     
                })}
            </>
        );
    }
}

export default LastRolls