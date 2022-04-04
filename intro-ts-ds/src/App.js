import React, { Component } from 'react'
import BravoComponent from './components/BravoComponent'
import Profile from './components/Profile'

export default class App extends Component {
  render() {
    return (
      <div>
        <BravoComponent />
        <Profile />
      </div>
    )
  }
}
