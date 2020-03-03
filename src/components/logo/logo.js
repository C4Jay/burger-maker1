import React from 'react';
import burgerlogo from '../../assets/imgs/burger-logo.png';
import clsses from './logo.css';

const logo  = (props) => (
    <div className={clsses.logo} style={{height: props.height}}>
        <img src={burgerlogo} alt="burger"></img>
    </div>

)

export default logo;