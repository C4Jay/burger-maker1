import React, { Component } from 'react';
import Layout from './components/layout/layout';
import BurgerMaker from './wrppers/burgerMaker/burgermaker';
import Checkout from './wrppers/Checkout/Checkout';


class App extends Component {
  render() { 
    return (
    <div>    
         <Layout>
           <BurgerMaker></BurgerMaker>
           <Checkout></Checkout>
         </Layout>
      </div>
    );
  }
}

export default App;
