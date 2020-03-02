import React from 'react'
import Aux from 'react-aux';
import Button from '../../UI/button/button';

const Summary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return <li>{igKey} : {props.ingredients[igKey]}</li>
    })

    return (
        <Aux>
            <h3>Your burger</h3>
            <p>delicious burger with following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <h3>Price: {props.price}</h3>
            <p>Continue to checkout</p>
            <Button btntype="Danger" clicked={props.buycancel}>cancel</Button>
            <Button btntype="Success" clicked={props.buycontinue}>continue</Button>

        </Aux>
    )

}

export default Summary;