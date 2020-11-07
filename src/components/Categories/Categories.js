import React from 'react';
import Category from './Category';
import categories from './category-data.json';
import './Category.elements.css';

const Products = () => {
    return (
        <div className="container -mt-400">
            <div className="row">
                
                {categories.length > 0 && categories.map(category => (
                    <Category key={category.id} category={category} />
                ))}
                
            </div>
        </div>
    );
};

export default Products;
