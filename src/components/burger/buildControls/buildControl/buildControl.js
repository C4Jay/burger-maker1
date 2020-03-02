import React from 'react'
import clsses from './buildcontrol.css';

const buildcontrol = (props) => (
    <div className={clsses.buildControl}>
        <div className={clsses.label}>{props.label}</div>
        <button className={clsses.Less} onClick={props.lessminus}>less</button>
        <button className={clsses.More} onClick={props.moreplus}>more</button>
    </div>
)

export default buildcontrol;