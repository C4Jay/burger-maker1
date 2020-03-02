import React, { Component } from 'react'
import Aux from 'react-aux';
import Burger from '../../components/burger/burger';
import BuildControls from '../../components/burger/buildControls/buildcontrols';
import Reciept from '../../components/UI/Receipt/receipt';
import Summary from '../../components/burger/Summary/summary';
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
}

class BurgerMaker extends Component {

    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        },
        totalPrice: 8,
        buyable: false,
        buying: false
    }

    buycontinueHandler () {
        alert('Continue')
    }

    buycancelHandler = () => {
        this.setState({buying: false})
    }

    buyHandler = () => {
        this.setState({buying : true})
    }

    newbuystate  (ingredients)  {
      
        const sum = Object.keys(ingredients) //array
        .map(igKey => {
            return ingredients[igKey];
        })
        .reduce((sum, el) => {
            return sum + el
        },0);
        this.setState({buyable: sum > 0});
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
        this.newbuystate(updatedIngredients);


    }
    
    minusIngredientHandler = (type) => {
        console.log("minusIngredientHandler")
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0 ){return}
        const updatedCount = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        } 
        updatedIngredients[type] = updatedCount
        const pricePluse = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - pricePluse;
        this.setState({ingredients: updatedIngredients, totalPrice: newPrice});
        this.newbuystate(updatedIngredients)


    }

    render () {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0
        }
        return (
            <Aux>
            <Reciept recieptclosed={this.buycancelHandler} show={this.state.buying}>
                <Summary 
                price={this.state.totalPrice}
                ingredients={this.state.ingredients}
                buycancel={this.buycancelHandler}
                buycontinue={this.buycontinueHandler}></Summary>
            </Reciept>
              <Burger ingredients={this.state.ingredients}/>
               
              <BuildControls
              price={this.state.totalPrice} 
              ingredientsPlus = {this.plusIngredientHandler}
              ingredientsMinus = {this.minusIngredientHandler}
              disabledprops = {disabledInfo}
              buyable = {this.state.buyable}
              buying = {this.buyHandler}
              />
              
            </Aux>
            
        )
    }
}

export default BurgerMaker;