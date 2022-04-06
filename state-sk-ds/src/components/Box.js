import React, { Component } from 'react'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            colors: "",
            backgroundColor: "white"
        }
    }

    randomColor = () => {

        let colorSelection = ["green", "blue", "yellow", "red", "purple", "orange"]
        let randomizer = colorSelection[Math.floor(Math.random() * colorSelection.length)]

        this.setState({ colors: randomizer, backgroundColor: randomizer })
    }

    render() {

        return (
            <div>
                <div id="theBox" style={{
                    border: "1px solid black",
                    width: "100px",
                    height: "100px",
                    backgroundColor: this.state.backgroundColor,
                    color: 'black'
                }} onClick={this.randomColor}>
                    {this.state.colors}
                </div>
                {/* <button id="theButton" onClick={this.randomColor}>Change Color of Box</button> */}
            </div>
        )
    }
}
