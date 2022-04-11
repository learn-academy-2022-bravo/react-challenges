import React, { Component } from 'react'

export default class FoodOrder extends Component {
    render() {
        const totalTaxes = this.props.total * 1.07
        return (
            <>
                <h3>My Order</h3>
                <ul>
                    {this.props.order.map((item, index) => {
                        return (
                            <li key={index}>{item.foodName}</li>
                        )
                    })}
                </ul>
                <div>Your subtotal: ${this.props.total}</div>
                <div>Your total with tax: ${totalTaxes.toFixed(2)}</div>
            </>
        )
    }
}
