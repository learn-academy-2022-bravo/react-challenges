import React, { Component } from 'react';
import '/Users/learnacademy/Desktop/react-challenges/react-challenges/state-zane-meka/src/App.css'

class ColorSquarePractice extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentColor: 'white',
            colorWheel: ['blue', 'green']
        }
    }

    // Establish variable with array of colors
    // Parse through colors using index
    
    
    changeColor = () => {
        let newColor = this.state.colorWheel.map()
        this.setState({currentColor: newColor})
    }
    
    render() {
        
        let {currentColor} = this.state

        return (
            <div>
                <table onClick={this.changeColor}>
                    <tr>
                        <td>{currentColor}</td>
                    </tr>
                </table>
            </div>
        );
    }
}

export default ColorSquarePractice;