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
        {controls.map(ctrl => {
            return (
            <BuildControl key={ctrl.label} label={ctrl.label} />
        )})}
            
        </div>

    )

}

export default buildcontrols;