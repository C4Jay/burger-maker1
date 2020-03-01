import React, { Component } from 'react';
import Layout from './components/layout/layout';
import BurgerMaker from './wrppers/burgerMaker/burgermaker';

class App extends Component {
  render() { 
    return (
    <div>    
         <Layout>
           <BurgerMaker></BurgerMaker>
         </Layout>
      </div>
    );
  }
}

export default App;
