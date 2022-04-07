import React, { Component } from 'react';

class Log extends Component {
    render() {
        return (
            <div>
                <h1>test</h1>
                {this.props.previousRoll.map((dice,index)=> {
                    return <p key = {index}>{dice}</p>
                })}
            </div>
        );
    }
}

export default Log;