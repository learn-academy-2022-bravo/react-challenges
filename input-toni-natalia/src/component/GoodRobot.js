import React,{Component} from 'react'

class GoodRobot extends Component {  
    weAreMimicking = (banana) => {
    return banana
  }
    render() {
        return(
            <>
            <h2>Good Robot Repeats You</h2>
            <p>{this.weAreMimicking(this.props.userInput)}</p>
            </>
        )
    }
}

export default GoodRobot