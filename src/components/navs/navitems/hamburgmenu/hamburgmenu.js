import React from 'react';
import Logo from '../../../logo/logo';
import NavItems from '../navitems';
import clsses from './hamburgmenu.css';
import Aux from 'react-aux';
import Backdrop from '../../../UI/backdrop/backdrop';

const hamburgmenu = (props) => {
    let fixedclsses = [clsses.HamburgMenu, clsses.Close];
    if(props.open) {
        fixedclsses = [clsses.HamburgMenu, clsses.Open]
    }


       if(props.hamburgshow) {
         return null
       }

    return (

        <Aux>
                  
            <Backdrop show={props.open} /* className={clsses.backdrophamburg} */ clicked={props.close} /> 
            <div className={fixedclsses.join(' ')}>
            <h3 onClick = {props.close}>menu</h3>
            
            <Logo height="11%" style={{marginRight: '19px'}}></Logo>
            <nav>
                <NavItems style={{marginTop: '32px'}} className={clsses.navitems}></NavItems>
            </nav>
        </div>
        </Aux> 


    )
}

export default hamburgmenu;