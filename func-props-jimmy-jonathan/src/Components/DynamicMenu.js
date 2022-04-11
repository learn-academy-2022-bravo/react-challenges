import React, { Component } from 'react'

class DynamicMenu extends Component {
  render() {
    return (
     <>
      <ul>
        {this.props.menuItems.map(value => {
          return(
            <li>
              <button onClick={ () => this.props.fillTray(value) }>
                {value}
              </button>
            </li>
          )
        })}
      </ul>
    </>
    )
  }
}

export default DynamicMenu
