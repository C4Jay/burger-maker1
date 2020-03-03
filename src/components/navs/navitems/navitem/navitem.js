import React from 'react'
import clsses from './navitem.css';

const navitem = (props) => (
    /* {/* <li className={props.impress ? clsses.active : null}>
     */
     <li className={clsses.navitem}>
     <a href={props.link}
     onClick={props.clicked}>
    {props.children}</a>
    </li>
)

export default navitem;