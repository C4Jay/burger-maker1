import React, { Component } from 'react'
import Aux from 'react-aux';
import Burger from '../../components/burger/burger';

class BurgerMaker extends Component {

    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0
        }
    }


    render () {
        return (
            <Aux>
              <Burger ingredients={this.state.ingredients}/>   
            </Aux>
            
        )
    }
}

export default BurgerMaker;