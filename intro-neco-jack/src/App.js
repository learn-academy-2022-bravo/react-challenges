import React from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Favorites from './components/Favorites'
import Footer from './components/Footer'
import Title from './components/Title'


class App extends React.Component{
  render() {
    return(
      <>
      <Header/>
      <Profile />
      <Favorites/>
      <Footer />
      </>
    )
  }
}

export default App
