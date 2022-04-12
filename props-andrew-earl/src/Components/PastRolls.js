import React, { Component } from "react"



class PastRolls extends Component {
    render() {
        return (
            <> 
            <h1>Past Rolls</h1>
                {this.props.pastRolls.map((card, index)=>{
                    return <p key = {index}>{card}</p>
                })}
            </>
        )
    }
}

export default PastRolls 