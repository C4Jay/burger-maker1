import React from 'react';
import Burger from '../../burger/burger';
import Button from '../../UI/button/button';
import clsses from './CheckoutSummary.css'
const checkoutSummary = (props) => {
    return (
        <div className={clsses.CheckoutSummary}>
            <h1>We hope it taste well</h1>
            <div style={{width: '300px', height: '300px', margin: 'auto'}}>
            <Burger ingredients={props.ingredients}></Burger>
            </div>
            <Button clicked={props.checkoutCancel} btntype="Danger">cancel</Button>
            <Button clicked={props.checkoutContinue} btntype="Success">continue</Button>
        </div>
    )

}

export default checkoutSummary