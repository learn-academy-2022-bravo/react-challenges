import React from 'react'
import Header from './Components/Header'
import Profile from './Components/Profile'
import Footer from './Components/Footer'
import Favorites from './Components/Favorites'


class App extends React.Component {
  render (){
    return (
      <>
      <Header />
      <Profile/>
      <Favorites/>
      <Footer/>
      </>
    )
  }
}

export default App










// Challenges
// As a user, I can see a Header component with the title of your app
// As a user, I can see a Profile component with information about you and your partner
// As a user, I can see a Footer component with your cohort name
// As a user, I can see a Favorites component with a list of top five favorites (ie. Top 5 Favorite TV Shows, Top 5 Favorite Songs, Top 5 Favorite Taco Shops)
// As a user, I can see a customized browser tab
