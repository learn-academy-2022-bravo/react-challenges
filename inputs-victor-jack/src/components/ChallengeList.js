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
        <li><input type="checkbox" />	As a user, I can see a page with a text input.	</li>
        <li><input type="checkbox" />	As a developer, I have one parent component that holds state (logic or smart component).	</li>
        <li><input type="checkbox" />	As a developer, I have an input in my parent component.	</li>
        <li><input type="checkbox" />	As a user, I see titles of three robots waiting for my text.	</li>
        <li><input type="checkbox" />	As a developer, I have three child components that do not hold state (display or dumb component).	</li>
        <li><input type="checkbox" />	As a user, when I enter text I see the three robots responses update in real time.	</li>
        <li><input type="checkbox" />	As a developer, I can call an onChange method on the input tag.	</li>
        <li><input type="checkbox" />	As a developer, I can pass the updated state as props to the child components.	</li>
        <li><input type="checkbox" />	As a developer, I can see the child components display the user input.	</li>
        <li><input type="checkbox" />	As a user, I see my "Good Robot" repeating exactly what I type.	</li>
        <li><input type="checkbox" />	As a user, I see my "Bad Robot" saying BLABLA.... One character for every character I type.	</li>
        <li><input type="checkbox" />	As a developer, I can create modification to the user input text by creating a method in my child component.	</li>
        <li><input type="checkbox" />	As a user, I see a third robot that is the developer's choice.	</li>

        </ul>
        <h2>Stretch</h2>
        <ul>
            <li>None</li>
        </ul>
        </>
        )
    }
}

export default ChallengeList