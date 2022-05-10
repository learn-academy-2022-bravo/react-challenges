import React, { Component } from 'react'

class MenuOrdered extends Component {
  render() {
    return (
      <>
        <ul>
          {this.props.selectedItems.map(value => {
            return(
              <li>
                <button onClick={ () => this.props.fillOrder(value) }>
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

export default MenuOrdered
