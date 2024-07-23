import React from 'react';
import './App.css';
import HeaderNav from './components/Navbar/Navbar';
import CartElements from './components/Cart/CartElements';
import { CartProvider } from './store/CartContext';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import ProductDetails from '../src/components/ProductDetails/ProductDetails'; // 

function App() {
  return (
    <CartProvider>
      <Router>
        <HeaderNav />
        <Switch>
          <Route path="/store" component={CartElements} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/product/:id" component={ProductDetails} /> {/* Add the ProductDetails route */}
          <Route exact path="/" component={() => <div>Home</div>} />
        </Switch>
      </Router>
    </CartProvider>
  );
}

export default App;
