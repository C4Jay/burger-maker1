import React from 'react';/* 
import Aux from '../../hoc/Auxiliary'; */
import Aux from 'react-aux';

const layout = (props) => (
    <Aux>
   <div>Tools</div>
       <main>
           {props.children}
       </main>
   
   </Aux>
)

export default layout;