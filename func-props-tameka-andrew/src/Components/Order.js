import React, { Component } from 'react';

class Order extends Component {
    render() {
        return (
            <div>
                <ul>
                {this.props.menuItems.map(value => {
                    return <li><button onClick={ () => this.props.fillPlate(value) }>
                        {value.item}</button></li>
                })}
                </ul>
            </div>
        );
    }
}

export default Order;