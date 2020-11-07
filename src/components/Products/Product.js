import React from 'react';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    return (
        <div key={product.id} className="col-4">
            <div className="single-product">
                <div className="product-image">
                    <img className="w-100" src={product.image} alt={product.name} />
                </div>
                <div className="product-body">
                    <Link to="/"><h2>{product.title}</h2></Link>
                    <div className="author">By {product.author}</div>
                    <div className="price d-flex">
                        <span className="currency-sign">$</span>
                        {product.price}
                    </div>
                </div>
                <button className="btn btn-cart">Add to Cart</button>
            </div>
        </div>
    );
};

export default Product;
