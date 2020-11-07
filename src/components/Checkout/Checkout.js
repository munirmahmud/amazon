import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Checkout.elements.css';

const Checkout = () => {
    return (
        <>
            <div className="row">
                <div className="checkout-banner mb-4">
                    <img className="w-100" src="images/banner/banner.png" alt="Checkout banner"/>
                </div>
            </div>
            
            <h1 className="checkout-title mb-5 pb-3">Your Shopping Basket</h1>
            
            <div className="row">
                <div className="col-8">

                    <div className="row">
                        <div className="col-4">
                            <div className="checkout-product-image">
                                <img className="w-100" src="/images/products/product-1.jpg" alt="Product"/>
                            </div>
                        </div>
                        
                        <div className="col-8">
                            <div className="product-info">
                                <Link to="/"><h2>Product Title</h2></Link>
                                <div className="price d-flex">
                                    <span className="currency-sign">$</span>
                                    299.5
                                </div>
                                <div className="rating">
                                    <FaStar className="icon" />
                                    <FaStar className="icon" />
                                    <FaStar className="icon" />
                                    <FaStar className="icon" />
                                </div>
                                <button className="btn btn-cart">Remove from basket</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-6"></div>
            </div>
        </>
    )
}

export default Checkout;
