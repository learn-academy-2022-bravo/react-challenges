import React, { Component } from 'react';

class Bad extends Component {
    
    sayBla = (input) => {
        // string to array
        let inputArray = input.split('')
         

        // let mappedArray = inputArray.map(value => {
        //     if (typeof inputArray[value] == 'string'){
        //         return inputArray[value] = 'B' 
        //     }
        // })
            // if (typeof inputArray[0] == 'string'){
            //   return inputArray[0] = 'B' 
            // } 
            // } else if (typeof inputArray[1] == 'string'){
            //     return inputArray[1] = 'L'  
            // } else if (typeof inputArray[2] == 'string'){
            //     return inputArray[2] = 'A'  
            // }
        // map to replace letters
        // inputArray.map(value,index => )
    }

    render() {
    
        return (
            <>
                <p>
                Bad Robot says: 
                {/* replace input with 'B', 'L', 'A' */}
                
                {this.sayBla(this.props.bad)}
                </p>
            </>
        );
    }
}

export default Bad;