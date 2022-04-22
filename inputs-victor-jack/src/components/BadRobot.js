import React, { Component } from 'react';

class BadRobot extends Component {



    // {this.props.previousCard.map((card, index) => {
    //     return <p key={index}>{card}
// console.log(badRobotTextArray)



    badRobotTranslater = (banana) => {
        // let characterCounter = banana.length 
        // banana.split("").map((value, index) => {
        //     return <p key={index}>{value}</p>
        // })

        return banana.split("").map(value => "BLAH! ")
      }

    render() {


        
        return (
            <div>
                <h2>Bad Robot</h2>

                    { this.badRobotTranslater(this.props.userInput)}
                {/* {this.props.userInput.split("").map((value, index) => {
                return  key={index}>{value} */}


 
            </div>
        );
    }
}

export default BadRobot;