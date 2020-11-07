import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './Header.elements.css';

const Header = () => {
    return (
        <nav className="header-navigation d-flex align-items-center">
            <div className="container-fluid">
                <div className="row align-items-center">

                    <div className="col-md-2">
                        <img className="header-logo" src="/images/amazon.png" alt="Amazon"/>
                    </div>

                    <div className="col-md-7">
                        <div className="header-search d-flex">
                            <input type="text" className="form-control"  />
                            <div className="search-icon">
                                <FaSearch className="icon" />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;
