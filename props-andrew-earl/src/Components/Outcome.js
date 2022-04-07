import React, { Component } from "react"



class Outcome extends Component {
    render() {
        return (
            <> 
            <h1>Current Roll</h1>

            <p>{this.props.card}</p>
            </>
        )
    }
}

export default Outcome 