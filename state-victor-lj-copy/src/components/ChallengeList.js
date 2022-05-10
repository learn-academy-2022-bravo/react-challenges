import React, { Component} from 'react'

class ChallengeList extends Component{
    constructor(props){
        super(props)
        this.state = {

        }
    }



render(){
    return(
        <>
        <h1>Challenge: Color Box</h1>
        <h2> User Stories</h2>
        <ul>
            <li><input type="checkbox" />As a user, I can see a white square on the screen</li>
            <li><input type="checkbox" />As a user, when I click on the square the name of a color appears in the box</li>
            <li><input type="checkbox" />As a user, each time I click the box I see a new color name</li>
            <li><input type="checkbox" />As a user, I can cycle through a list of color names, one per click - green, blue, yellow, red, purple, orange</li>
            <li><input type="checkbox" />As a user, when I click the box, the background changes to match the name of the color name displayed in the box</li>
        </ul>
        <h2>Stretch</h2>
        <ul>
            <li><input type="checkbox" />As a user, I can see a button to add or remove color boxes</li>
            <li><input type="checkbox" />As a user, when I click the add button, I can add one colorbox that acts independently of the other colorboxes</li>
            <li><input type="checkbox" />As a user, when I click the remove button, I can remove one colorbox</li>
        </ul>
        </>
        )
    }
}

export default ChallengeList