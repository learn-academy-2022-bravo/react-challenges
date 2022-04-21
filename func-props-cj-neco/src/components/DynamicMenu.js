import React, { Component } from 'react'

export default class DynamicMenu extends Component {
  render() {
    return (
      <>
        <ul>
          {this.props.menuItems.map(value => {
            return(
              <li>
                <button onClick={ () => this.props.fillPlate(value) }>
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




