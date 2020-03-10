import React, { Component } from 'react';
import CheckoutSummary from '../../components/SingleOrder/CheckoutSummary/CheckoutSummary'

class Checkout extends Component {
    state = {

        ingredients: {
            salad: 1,
            cheese: 0,
            bacon: 0,
            meat: 0
        }, 
    }

    render () {
        return (
            <div>
            <CheckoutSummary ingredients={this.state.ingredients}></CheckoutSummary>
            </div>

        )
    }

}

export default Checkout;