import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const Category = ({category}) => {
    return (
        <div className="col-3">
            <div className="category">
                <h2 className="cat-title">{category.title}</h2>
                <div className="cat-image">
                    <img src={category.image} alt={category.title} />
                </div>
                <div className="more">
                    <Link to='/'>{category.moreText}</Link>
                </div>
            </div>
        </div>
    )
}

export default Category
