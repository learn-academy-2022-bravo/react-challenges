import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      nasaData: "",
      marsPhoto: null
    }
  }

  componentDidMount(){
    fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY`)
    .then(response => response.json())
    .then(payload => this.setState({nasaData: payload.photos}))
    .catch(error => console.log(error))
  }

  getPic = () => {
    let randomPhoto = Math.floor(Math.random() * this.state.nasaData.length)
    this.setState({marsPhoto: this.state.nasaData[randomPhoto].img_src})
  }

  render() {
    console.log(this.getPic)
    return (
      <>
        <h1>If you can see this you are loading correctly</h1>
        <button onClick={this.getPic}>you can see this button</button>
        {this.state.marsPhoto &&
        <img src={this.state.marsPhoto} alt="Mars Rovor" height="200px"/>
        }
      </>
    )
  }
}

export default App;