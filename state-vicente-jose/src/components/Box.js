import React, {Component} from 'react'

class Box extends Component {
    constructor(props){
        super(props)
        this.state = {
            colors: "blue"

        }
    }
        addColor = () => {
        let colorSelection = ["green", "blue", "yellow", "red", "purple", "orange"]
        let randomizer = colorSelection[Math.floor(Math.random() * colorSelection.length)]

        this.setState({colors: randomizer})
        }
    render() {
    return (
    <div onClick={this.addColor} >
    <p>{this.state.colors}</p>
    </div>
    )
}
} 



export default Box