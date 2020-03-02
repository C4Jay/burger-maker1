import React from 'react';
import clsses from './receipt.css';
import Aux from 'react-aux';
import Backdrop from '../backdrop/backdrop';

const receipt = (props) => (
    <Aux>
        <Backdrop show={props.show} clicked={props.recieptclosed}></Backdrop>
    <div
     className={clsses.receipt}
     style={{
         transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity : props.show ? '1' : '0'
     }}>
        {props.children}
    </div>
    </Aux>

)

export default receipt;