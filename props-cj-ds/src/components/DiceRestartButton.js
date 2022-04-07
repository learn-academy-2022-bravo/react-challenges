import React, { Component } from 'react'

export default class DiceRestartButton extends Component {
    render() {
        return (
            <div className="restart-button-container">
                <button onClick={this.props.handleRestartClickEvent}>Restart Button</button>
            </div>
        )
    }
}
