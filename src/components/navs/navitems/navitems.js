import React from 'react'
import clsses from './navitems.css';
import NavItem from './navitem/navitem';

const navitems = () => (

        <ul className={clsses.navitems}>
        <NavItem link="/" impress>burger maker</NavItem>
        <NavItem link="/">checkout</NavItem>

        </ul>
)

export default navitems;