import React from 'react';
import clsses from './backdrop.css';

const backdrop = (props) => (
    props.show ? <div className={clsses.backdrop} onClick={props.clicked}></div> : null
)

export default backdrop;