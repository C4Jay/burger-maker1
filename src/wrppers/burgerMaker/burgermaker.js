import React, { Component } from 'react'
import Aux from 'react-aux';
import Burger from '../../components/burger/burger';
import BuildControls from '../../components/burger/buildControls/buildcontrols';

class BurgerMaker extends Component {

    state = {
        ingredients: {
            salad: 1,
            cheese: 0,
            bacon: 1,
            meat: 0
        }
    }

    render () {
        return (
            <Aux>
              <Burger ingredients={this.state.ingredients}/>
              <BuildControls />   
            </Aux>
            
        )
    }
}

export default BurgerMaker;