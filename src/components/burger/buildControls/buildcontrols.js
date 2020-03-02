import React from 'react';
import clsses from './buildcontrols.css';
import BuildControl from './buildControl/buildControl';

const controls = [
    { label: 'Salad', type: 'salad'},
    { label: 'Bacon', type: 'bacon'},
    { label: 'Cheese', type: 'cheese'},
    { label: 'Meat', type: 'meat'}
]
const buildcontrols = (props) => {
    return (
        
        <div className={clsses.buildControls}>
        <p style={{textAlign: 'center', fontWeight: 'bold'}}>Current Price : <strong>{props.price.toFixed(1)}</strong></p>
        {controls.map(ctrl => {
            return (
            <BuildControl key={ctrl.label}
             label={ctrl.label} 
             moreplus={() => props.ingredientsPlus(ctrl.type)} 
             lessminus={() => props.ingredientsMinus(ctrl.type)}
             disabledprops={props.disabledprops[ctrl.type]}/>
        )})}
        <button className={clsses.Orderbutton}
        disabled={!props.buyable}
        onClick={props.buying}
        >CHECKOUT</button>
            
        </div>

    )

}

export default buildcontrols;