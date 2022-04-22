import React, { Component } from 'react';
import '/Users/learnacademy/Desktop/react-challenges/react-challenges/state-zane-meka/src/App.css';

class EmptySquare extends Component {
    constructor(props){
        super(props)
        this.state = {
            defaultColor: "Feed Me Colors", 
            colorWheel: ["white", "blue", "green", "yellow"]
        }
      }
    
      colorChange = () => {
        let newColor = this.state.colorWheel.map[0] += 1
        this.setState({newColor})
      }  

    
    render() {
        return (
            <>
            <table onClick={this.colorChange}> 
                <tr>
                    <td>
                     {this.state.defaultColor}
                    </td>
                </tr>
            </table>
            </>
        );
    }
}

export default EmptySquare;