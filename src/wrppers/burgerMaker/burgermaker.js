import React, { Component } from 'react'
import Aux from 'react-aux';
import Burger from '../../components/burger/burger';
import BuildControls from '../../components/burger/buildControls/buildcontrols';


const INGREDIENT_PRICES = {
    salad: 0.5,
    cheease: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerMaker extends Component {

    state = {
        ingredients: {
            salad: 1,
            cheese: 0,
            bacon: 1,
            meat: 0
        },
        totalPrice: 8
    }

    plusIngredientHandler = (type) => {
        console.log("plusIngredientHandler")
        const oldCount = this.state.ingredients[type]
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        }
        updatedIngredients[type] = updatedCount;
        const pricePlus = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + pricePlus;
        this.setState({totalPrice : newPrice, ingredients: updatedIngredients});


    }
    
    minusIngredientHandler = (type) => {
        console.log("minusIngredientHandler")
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        } 
        updatedIngredients[type] = updatedCount
        const pricePluse = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - pricePluse;
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});


    }

    render () {
        return (
            <Aux>
              <Burger ingredients={this.state.ingredients}/>
              <BuildControls 
              ingredientsPlus = {this.plusIngredientHandler}
              ingredientsMinus = {this.minusIngredientHandler}
              />   
            </Aux>
            
        )
    }
}

export default BurgerMaker;