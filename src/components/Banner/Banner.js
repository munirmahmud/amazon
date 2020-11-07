import React from 'react';
import './Banner.elements.css';
const bannerImg = '/images/banner.jpg'

const Banner = () => {
    return (
        <div className="banner-wrapper">
            <div className="container-fluid">
                <div className="row">

                    <div className="home-banner" style={{backgroundImage: `url('${bannerImg}')`}}>

            <h1>Banner Added</h1>   
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Banner;
