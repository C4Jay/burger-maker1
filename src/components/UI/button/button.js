import React from 'react';
import clsses from './button.css';

const button = (props) => {
    return (
        <button
        className={[clsses.button, clsses[props.btntype]].join(' ')}
        onClick={props.clicked}
        >{props.children}</button>
    )
}

export default button;