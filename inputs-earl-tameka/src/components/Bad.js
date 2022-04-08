import React, { Component } from 'react';

class Bad extends Component {
    
    // ** This replaces BLA for each word typed **
    // sayBla = (input) => {
    //     return input.split(' ').map(value => 'BLA ')
    // }

    sayBla = (input) => {
    const list = input.split('')
    return list.map((currElement, index) => {
        if (index % 4 == 0){
            return currElement = 'B'
        } else if (index % 4 == 1) {
            return currElement = 'L'
        } else if (index % 4 == 2) {
            return currElement = 'A'
        } else if (index % 4 == 3) {
            return currElement = ' '
        }
    })
}


    render() {
    
        return (
            <>
                <p>
                Bad Robot says:  
                <p>{this.sayBla(this.props.bad)}</p>
                </p>
            </>
        );
    }
}

export default Bad;
