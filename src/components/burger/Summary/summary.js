import React from 'react'
import Aux from 'react-aux';

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
            <p>Continue to checkout</p>

        </Aux>
    )

}

export default Summary;