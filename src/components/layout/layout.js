import React, { Component } from 'react';/* 
import Aux from '../../hoc/Auxiliary'; */
import Aux from 'react-aux';
import clsses from './layout.css'
import Appbar from '../navs/appbar/appbar';
import HamburgMenu from '../navs/navitems/hamburgmenu/hamburgmenu';




class Layout extends Component {   

    state = {
        showMenu : true
    }

    HamburgClosedHandler = () => {
        this.setState({showMenu: false})
    }

    hamburgOpenHandler = () => {
        console.log("hamburgOpenHandler")
        this.setState({showMenu: true})
    }


    render () {
        return (
    <Aux>
   <Appbar clicked={this.hamburgOpenHandler}></Appbar>
   
   <HamburgMenu open={this.state.showMenu} close={this.HamburgClosedHandler}></HamburgMenu>
       <main className={clsses.Content}>
           {this.props.children}
       </main>
   
   </Aux>
        )
    }
}

export default Layout;