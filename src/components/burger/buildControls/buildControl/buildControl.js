import React from 'react'
import clsses from './buildcontrol.css';

const buildcontrol = (props) => (
    <div className={clsses.buildControl}>
        <div className={clsses.label}>{props.label}</div>
        <button className={clsses.Less}>less</button>
        <button className={clsses.More}>more</button>
    </div>
)

export default buildcontrol;