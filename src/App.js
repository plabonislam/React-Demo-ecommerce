import React from 'react';
import Navbar from "./components/navbar.js"
import Tagline from "./components/tagline.js"
import Feature from "./components/feature.js"
import Subscription from "./components/subscription.js"
import Product from "./components/products.js";
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";

import './App.css';
import data from "./data.js"
import About from './components/about.js';
import Footer from './components/footer.js';
import Cartpage from './components/cartpage.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Tagline />
            <Feature />
            <Subscription />
            <Product />
            <About />
          </Route>
          <Route path="/product" exact>
            <Product />
          </Route>

          <Route path="/about" exact>
            <About />
          </Route>

          <Route path="/cart" exact>
            <Cartpage />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
