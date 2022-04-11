import React, { Component } from 'react'

export default class FoodOrder extends Component {
    render() {
        const totalTaxes = this.props.total * 1.07
        return (
            <>
                <h3>CurrentOrder</h3>
                <ul className="order-list">
                    {this.props.order.map((item, index) => {
                        return (
                            <li key={index}>{item.foodName}</li>
                        )
                    })}
                </ul>
                <div>Sububtotal: ${this.props.total}</div>
                <div>Your total with tax: ${totalTaxes.toFixed(2)}</div>
            </>
        )
    }
}
