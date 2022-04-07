// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;


import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Profile from './components/Profile'
import Favorites from './components/Favorites'

class App extends React.Component{
  render(){
    return(
      <>
        <p>hello</p>
        <Header/>
        <Profile/>
        <Favorites/>
        <Footer />
      </>
    )
  }
}

export default App
