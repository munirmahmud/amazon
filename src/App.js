import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Checkout from './pages/Checkout';
import Home from './pages/Home';

const App = () => {
    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/checkout" component={Checkout} />
            </Switch>
            <Footer />
        </Router>
    );
};

export default App;
