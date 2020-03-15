import React, { Component } from 'react';
import CheckoutSummary from '../../components/SingleOrder/CheckoutSummary/CheckoutSummary'
import {Route} from 'react-router-dom';
import ContactData from './Contactdata/Contactdata';

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
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {}
        for(let param of query.entries()) {
            ingredients[param[0]] = +param[1]
        }
        this.setState({ingredients: ingredients})
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

            <Route path={this.props.match.path + '/contact-data'}
            render={() =>(<ContactData ingredients={this.state.ingredients}></ContactData>)}></Route>
            </div>

        )
    }

}

export default Checkout;