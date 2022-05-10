import React, { Component } from 'react'
// import mockNasaData from './nasaMock.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nasaData: "",
      earthPhoto: null
    }
  }

  componentDidMount() {
    const apiKey = process.env.REACT_APP_MY_NASA_API_KEY
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${apiKey}`)
    .then(response => response.json())
    .then(payload => this.setState({nasaData: payload.photos}))
    .catch(error => console.log(error))
  }

  getPic = () => {
    let randomPhoto = Math.floor(Math.random() * this.state.nasaData.length)
    this.setState({earthPhoto: this.state.nasaData[randomPhoto].img_src})
  }

  render() {
    console.log(this.state.earthPhoto)
    return(
      <>
        <h1>Earth Pics</h1>
        <button onClick={this.getPic}>Get a Earth Pic</button>
        <br />
        <br />
        {this.state.earthPhoto &&
          <img src={this.state.earthPhoto} alt="earth rover" height="200px"/>
        }
      </>
    )
  }
}
export default Appgitgit add