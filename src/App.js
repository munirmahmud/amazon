import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home';

const App = () => {
    return (
        <Router>
            <Header />
            <Home />
            <Footer />
        </Router>
    );
};

export default App;
