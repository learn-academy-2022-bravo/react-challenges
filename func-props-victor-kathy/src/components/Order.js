import React, { Component } from 'react';

class Order extends Component {
    render() {
        return (
            <div>
                {this.props.food.map((value, index) => {
                    return(
                        <li>
                            <p>
                                One
                            </p>
                            <p>
                                two
                            </p>
                        </li>
                    )
                })}
            </div>
        );
    }
}

export default Order;