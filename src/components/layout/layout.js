import React from 'react';/* 
import Aux from '../../hoc/Auxiliary'; */
import Aux from 'react-aux';
import clsses from './layout.css'
import Appbar from '../navs/appbar/appbar';

const layout = (props) => (
    <Aux>
   <div><Appbar></Appbar></div>
       <main className={clsses.Content}>
           {props.children}
       </main>
   
   </Aux>
)

export default layout;