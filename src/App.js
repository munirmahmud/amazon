import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Checkout from './pages/CheckoutPage';
import Home from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/products" component={ProductsPage} />
                <Route path="/checkout" component={Checkout} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
