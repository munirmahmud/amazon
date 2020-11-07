import React from 'react';
import { FaSearch } from 'react-icons/fa';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Header.elements.css';

const Header = () => {
    return (
        <nav className="header-navigation d-flex align-items-center">
            <div className="container-fluid">
                <div className="row align-items-center">

                    <div className="col-md-2">
                        <Link to="/">
                        <img className="header-logo" src="/images/amazon.png" alt="Amazon"/>
                        </Link>
                    </div>

                    <div className="col-md-8">
                        <div className="header-search d-flex">
                            <input type="text" className="form-control"  />
                            <div className="search-icon">
                                <FaSearch className="icon" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2">
                        <div className="header-nav d-flex justify-content-between">
                            <div className="header-option d-flex flex-column">
                                <span className="option">Hello, Guest</span>
                                <span className="option">Signin</span>
                            </div>
                            <div className="header-option d-flex flex-column">
                                <span className="option">Returns</span>
                                <span className="option">Orders</span>
                            </div>
                            <div className="header-option d-flex flex-column">
                                <span className="option">Your</span>
                                <span className="option">Prime</span>
                            </div>
                            <div className="header-option cart-option d-flex position-relative align-items-center">
                                <div className="cart-icons">
                                    <span className="cart-count">0</span>
                                    <span className="cart-icon"><FiShoppingCart /></span>
                                </div>
                                <span className="cart-text">Cart</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;
