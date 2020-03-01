import React from 'react';
import clsses from './burger.css';
import BurgerIngredient from './burgerIngredients/burgeringredients';

const burger = (props) => {
    return (
        <div className={clsses.burger}>
        <BurgerIngredient type="bread-top"/>
        <BurgerIngredient type="cheese"/>
        <BurgerIngredient type="meat"/>
        <BurgerIngredient type="bread-floor"/>
        </div>


    )
}

export default burger;