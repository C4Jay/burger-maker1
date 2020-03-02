import React from 'react';
import clsses from './receipt.css';

const receipt = (props) => (
    <div
     className={clsses.receipt}
     style={{
         transform: props.show ? 'translateY(0)' : 'translateY(-100vh)', opacity : props.show ? '1' : '0'
     }}>
        {props.children}
    </div>

)

export default receipt;