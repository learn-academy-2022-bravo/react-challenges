import React, { Component } from 'react'

class RollLog extends Component {
  render() {
    return (
      <div className='log'>
        <h3> Roll History </h3>
        {this.props.previousRoll.map((dice,index)=>{
          return <p key={index}> {dice} </p>
        })}
      </div>
    )
  }
}
export default RollLog