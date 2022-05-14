import React, { Component } from 'react';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      ipPayload: "",
      // chuckPayload: null
      // cocktailPayload: null
    }
  }

retrieve = () => {
  fetch("https://ipapi.co/json/")
  .then(response => response.json())
  .then(payload => this.setState({ipPayload: payload}))
  .catch(error => console.log(error))
}

// getChuckNorris = () => {
//   // const apiKey = (cannot figure out how to hide api key therefore not listed here - Tameka)
//   fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random?rapidapi-key=' + apiKey)
//   .then(response => response.json())
//   .then(payload => this.setState({chuckPayload: payload.value}))
//   .catch(error => console.log(error))
// }

// randomCocktail = () => {
//   fetch("www.thecocktaildb.com/api/json/v1/1/random.php")
//   .then(response => response.json())
//   .then(payload => console.log(payload))
//   .catch(error => console.log(error))
// }


  render() {
    return (
      <>
        <h1>Click the button to see IP address and location</h1>
        <button onClick={this.retrieve}>Click Here</button>
        <h3>IP Address: {this.state.ipPayload.ip} </h3>
        <h3>Location: {this.state.ipPayload.region} </h3>

        <br />
        <br />
        <br />

        {/* <h1>Click THIS button if you want to make a cocktail</h1>
        <button onClick={this.randomCocktail}>Bottoms Up</button>
        <p>{this.state.cocktailPayload}</p> */}


        {/* <h1>What would Chuck Norris do?</h1>
        <button onClick={this.getChuckNorris}>Walker Texas Ranger</button>
        <p>{this.state.chuckPayload}</p> */}

      </>
    );
  }
}

export default App;
