As a user, I can see a page with a text input.
check
As a developer, I have one parent component that holds state (logic or smart component).
check
As a developer, I have an input in my parent component.
check
As a user, I see titles of three robots waiting for my text.
check
As a developer, I have three child components that do not hold state (display or dumb component).
check
As a user, when I enter text I see the three robots responses update in real time.
2/3 complete
As a developer, I can call an onChange method on the input tag.
done check
As a developer, I can pass the updated state as props to the child components.
check
As a developer, I can see the child components display the user input.
check
As a user, I see my "Good Robot" repeating exactly what I type.
check
As a user, I see my "Bad Robot" saying BLABLA.... One character for every character I type.
1 = BLABLA 1 = B
As a developer, I can create modification to the user input text by creating a method in my child component.
As a user, I see a third robot that is the developer's choice.



LJ thoughts
components folder
three files
good robot.js
    easiest
bad robot.js
     thoughts?
        any user input will equal BLABLAB
        any text input will do  BLABLA
        hello my name is Van = expected output BLABA
        H = B e = L
            function that takes in a string
            .split for new array
            index(0)??
            let new array = string.split   
        More thoughts
        BLABA = (string) => {
          this.setState ({userinput: string.spilt })
        }    
        badRobotArray = []
        for (let i = 0; i < needsomethinghere.length; i++){
          badRobotArray.push(BLA)
        }
          return badRobotArray 
        }

kanybebot.js
    2nd easiest??
