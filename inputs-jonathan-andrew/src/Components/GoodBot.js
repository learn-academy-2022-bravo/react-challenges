import React, { Component } from 'react'

class GoodBot extends Component {



  render() {
    return(
      <>
        <p>
          I hear you saying { (this.props.goodBotKeep) }. Is that correct?
        </p>
      </>
    )
  }
}
export default GoodBot