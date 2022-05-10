import React, { Component } from 'react';
import Dice from './components/Dice';
import Rolls from './components/Rolls';
import './App.css'


class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      dieFace: ['1', '2', '3', '4', '5', '6'],
      currentFace: '',
      previousFace: []
    }
  }


  rollDice = () => {
    let randomDie = Math.floor(Math.random() * this.state.dieFace.length)
    this.setState({
      currentFace: this.state.dieFace[randomDie],
      previousFace: [...this.state.previousFace, this.state.dieFace[randomDie]]
    })
  }

  restartGame = () => {
    this.setState({
      currentFace: '',
      previousFace: []
    })
  }

  render() {
    return (
      <>
        <h1>Roll the Die</h1>
        {/* <img src='https://qph.cf2.quoracdn.net/main-qimg-4bb6cff128976013b84c5cce1ddbef64' /> */}

        <button onClick={this.rollDice}>ROLL</button>  <button onClick={this.restartGame}>RESTART</button>

        <div className='container'>
        <table> 
          <tr>
            <td>
            <Dice dice={this.state.currentFace} />
            </td>
          </tr>
        </table>
      
        
       
        <table className='table1'>
          <tr>
            <td>
              <Rolls rolls={this.state.previousFace} />
            </td>
          </tr>
        </table>
        </div>

      </>
    );
  }
}

export default App;
