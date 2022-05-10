import React from 'react' 
import Header from './Components/Header' 
import Footer from './Components/Footer' 
import Ranked from './Components/Ranked' 
import Playlist from './Components/Playlist' 


class App extends React.Component {
  render(){
      return (
        <>
        <h1> Hi Orvab!! </h1>
        <Header/>
        <Footer/>
        <Ranked/>
        <Playlist/>
        
        </>
      )
  }
}
export default App 