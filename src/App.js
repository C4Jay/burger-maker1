import React, { Component } from 'react';
import Layout from './components/layout/layout';
import BurgerMaker from './wrppers/burgerMaker/burgermaker';
import Checkout from './wrppers/Checkout/Checkout';
import { Route } from 'react-router-dom';

class App extends Component {
  render() { 
    return (
    <div>
         <Layout>
           <Route path="/" exact component={BurgerMaker}></Route>
           <Route path="/checkout" component={Checkout}></Route>
         </Layout>
      </div>
    );
  }
}

export default App;
