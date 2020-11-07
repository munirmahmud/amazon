import React from 'react';
import Product from './Product';
import './Product.elements.css';
import products from './products.json';

const Products = () => {
    return (
        <div className="container">
            <div className="row">
                {products.length > 0 && products.map(product => (
                     <Product key={product.id} product={product}  />
                ))}
            </div>
        </div>
    );
};

export default Products;
