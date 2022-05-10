import React, { Component } from 'react'

class AmazingMenu extends Component {
    render() {
      return (
        <>
          <ul>
            {this.props.menuItems.map(value => {
                return (
                <li>
                  <button onClick={ () => this.props.fillOrder(value) }>
                    {value } 
                </button>
                  </li>
                )
            })}
          </ul>
        </>
      )
    }
  }

export default AmazingMenu