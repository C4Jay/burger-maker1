import React, { Component } from 'react'
import Aux from 'react-aux';
import Burger from '../../components/burger/burger';

class BurgerMaker extends Component {
    render () {
        return (
            <Aux>
              <Burger/>   
            </Aux>
            
        )
    }
}

export default BurgerMaker;