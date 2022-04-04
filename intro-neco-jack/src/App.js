import React from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Footer from './components/Footer'

class App extends React.Component{
  render() {
    return(
      <>
      <Header />
      <Profile />
      <Footer />
      </>
    )
  }
}

export default App