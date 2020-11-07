import React from 'react';
import './Banner.elements.css';
const bannerImg = '/images/banner.jpg';

const Banner = () => {
    return (
        <div className="banner-wrapper">
            <div className="container">
                <div className="row">
                    <div className="home-banner" style={{backgroundImage: `url('${bannerImg}')`}}>  
                    </div>                    
                </div>
            </div>
        </div>
    );
};

export default Banner;
