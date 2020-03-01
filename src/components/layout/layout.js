import React from 'react';/* 
import Aux from '../../hoc/Auxiliary'; */
import Aux from 'react-aux';
import clsses from './layout.css'

const layout = (props) => (
    <Aux>
   <div>Tools</div>
       <main className={clsses.Content}>
           {props.children}
       </main>
   
   </Aux>
)

export default layout;