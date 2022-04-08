import React, { Component } from 'react'

class DiceFace extends Component {
  render(){
    return (
      <div className='face'>
      <h3>Roll Fate</h3>
      <p>{this.props.dice}</p>
      </div>
    )
  }
}
export default DiceFace
