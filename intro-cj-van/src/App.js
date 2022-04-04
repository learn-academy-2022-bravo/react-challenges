import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Profile from './components/Profile'
import Footer from './components/Footer'
import Favorites from './components/Favorites'
import LeastFavorites from './components/LeastFavorites'

class App extends Component{
render(){
  return (
    <>
      <div className="App">
          <Header />
          <Profile />
          <Favorites />
          
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            >
            Learn React
          </a>
        </header>
        <LeastFavorites />
        <Footer />
      </div>
      </>
    );
  }
}
export default App
