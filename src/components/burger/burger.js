import React from 'react';
import clsses from './burger.css';
import BurgerIngredient from './burgerIngredients/burgeringredients';

const burger = (props) => {

    let trnsformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey]) /* props.ingredients[igKey] gives a number */].map((_, i) => {
          return <BurgerIngredient key={igKey + i} type={igKey} />
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);

    if(trnsformedIngredients.length === 0) {
        trnsformedIngredients = <p>Please put ingredients</p>
        
    }


    return (
        <div className={clsses.burger}>
        <BurgerIngredient type="bread-top"/>
        {trnsformedIngredients}
        <BurgerIngredient type="bread-floor"/>
        </div>


    )
}

export default burger;