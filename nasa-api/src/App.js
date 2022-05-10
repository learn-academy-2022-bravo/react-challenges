import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers'
import React, { Component } from 'react'

export default class App extends Component {
  constructor (props) {
    super(props)  
    this.state = {
      nasaData: " ", 
      marsPhoto: null, 
    }
  }

componentDidMount () {
  const apiKey = process.env.NASA_API_KEY 
  fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY
  `)
  .then(response => response.json())
  .then(payload => this.setState({nasaData: payload.photos}))
  .catch(error => console.log(error))
}

getPic = () => {
  let randomPhoto = Math.floor(Math.random() * this.state.nasaData.length) 
  this.setState({marsPhoto: this.state.nasaData[randomPhoto].img_src})
}


  render() {
    console.log(this.state.marsPhoto)
    return (
      <>
        <h1>Mars Rover Pics</h1>
        <button onClick={this.getPic}>Get a Mars Pic</button>
        <br /> 
        <br />
        {this.state.marsPhoto && 
            <img src={this.state.marsPhoto} alt="mars rover" height="800px"/>
        }
      </>  
    )
  }
}

