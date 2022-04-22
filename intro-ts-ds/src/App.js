import React, { Component } from 'react'
import BravoComponent from './components/BravoComponent'
import Favorites from './components/Favorites'
import Footer from './components/Footer'
import Profile from './components/Profile'


export default class App extends Component {
  render() {
    return (
      <div>
        <BravoComponent />
        <Profile />
        <Favorites />
        <Footer />
        
      </div>
    )
  }
}
