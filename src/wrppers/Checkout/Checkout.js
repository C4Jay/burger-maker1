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

    componentDidMount() {
        console.log(this.props)
    }

    checkoutCancelHandler = () => {
        this.props.history.push('/')

    }

    checkoutContinueHandler = () => {
        this.props.history.replace('/checkout/contact-data')

    }



    render () {
        return (
            <div>
            <CheckoutSummary
            checkoutCancel={this.checkoutCancelHandler}
            checkoutContinue={this.checkoutContinueHandler}
            ingredients={this.state.ingredients}></CheckoutSummary>
            </div>

        )
    }

}

export default Checkout;