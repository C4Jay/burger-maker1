import React from 'react';
import clsses from './appbar.css'
import Logo from '../../logo/logo';
import NavItems from '../navitems/navitems';
import NavItem from '../navitems/navitem/navitem';

const appbar = (props) => (

    <header className={clsses.appbar}>
    <NavItem impress clicked={props.clicked} style={{cursor: 'pointer'}}>Menu</NavItem>

    <Logo height="80%"></Logo>
        <nav>
            <NavItems></NavItems>
            </nav>
    </header>

)

export default appbar;