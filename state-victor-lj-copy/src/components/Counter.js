import React, { Component } from 'react'

class Counter extends Component{
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
  }

  handleChange = () => {
    let newCount = this.state.count + 1
    this.setState({count: newCount})
  }

  render(){
    let {count} = this.state

    return(
      <>
        <h2>Counter: {count}</h2>
        <button onClick = {this.handleChange}>
          Press Me!
        </button>
      </>
    )
  }
}

export default Counter