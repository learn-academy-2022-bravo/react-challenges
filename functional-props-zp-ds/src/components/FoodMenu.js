import React, { Component } from 'react'

export default class FoodMenu extends Component {
    render() {
        return (
            <>
                <ul>
                    {this.props.menu.map((item, index) => {
                        return (
                            <div key={index}>
                                <li>{item.foodName}, ${item.foodPrice}</li>
                                {/* <img src={item.image} alt={`"Menu Item Photo" ${item.name}`} /> */}
                                <br />
                                <button onClick={() => { this.props.addItem(item) }}>Add Item</button>
                            </div>
                        )
                    })}
                </ul>
            </>
        )
    }
}
