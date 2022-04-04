import React from 'react'
import Header from './components/Header'
import Profile from './components/Profile'
import Footer from './components/Footer'
import Favorites from './components/Favorites'
class App extends React.Component {
  render() {
    return(
      <>
        <Header />
        <Profile />
        <Favorites />
        <Footer />

      </>
    )
  }
}

export default App


// As a user, I can see a Header component with the title of your app
// As a user, I can see a Profile component with information about you and your partner
// As a user, I can see a Footer component with your cohort name
// As a user, I can see a Favorites component with a list of top five favorites (ie. Top 5 Favorite TV Shows, Top 5 Favorite Songs, Top 5 Favorite Taco Shops)
// As a user, I can see a customized browser tab
