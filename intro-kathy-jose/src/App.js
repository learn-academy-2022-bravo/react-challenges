import React from 'react'
import Header from './components/Header';
import Profile from './components/Profile';
import Footer from './components/Footer';
import Favorties from './components/Favorties';



class App extends React.Component {
  render() {
    return(
      <>
       <Header /> 
      <Profile />
      <Favorties/>
      <Footer />


      </>
    );
  }
}
export default App;

