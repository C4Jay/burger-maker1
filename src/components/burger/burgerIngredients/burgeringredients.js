import React, { Component } from 'react'
import clsses from './burgeringredients.css';
import PropTypes from 'prop-types';

class BurgerIngredients extends Component {

    render () {
        let ingredient = null;

        switch (this.props.type) {
            case ('bread-floor'):
                 ingredient = <div className={clsses.BreadFloor}/>;
                 break;
            case ('bread-top'):
                 ingredient = (
                     <div className={clsses.BreadTop}>
                     <div className={clsses.Seeds1}></div>
                     <div className={clsses.Seeds2}></div>
                     </div>
                 );
                 break;
            case ('meat'):
                  ingredient = <div className={clsses.Meat}></div>
                  break;
            case ('cheese'):
                   ingredient = <div className={clsses.Cheese}></div>
                   break;
            case ('bacon') :
                   ingredient = <div className={clsses.Bacon}></div>
                   break;
            case ('salad'):
                   ingredient = <div className={clsses.Salad}></div>
                   break;
            default:
                   ingredient = null;
            
        }
    
        return ingredient
    

    }
   

}

BurgerIngredients.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredients;