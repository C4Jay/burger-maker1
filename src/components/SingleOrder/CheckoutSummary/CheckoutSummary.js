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
            <Button btnType="Danger">cancel</Button>
            <Button btnType="Success">continue</Button>
        </div>
    )

}

export default checkoutSummary