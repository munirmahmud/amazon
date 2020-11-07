import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/products" component={ProductsPage} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
