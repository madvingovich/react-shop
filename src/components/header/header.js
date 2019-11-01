import React from 'react';
import { Link } from 'react-router-dom';

import './header.css';

const Header = ({ numItems, total }) => {
    return (
        <header className="jumbotron p-0">
            <div className="container py-3 d-flex align-items-center justify-content-between">
                <div className="logo"><Link to="/" className="header-link mb-0 mr-5">Re Shop</Link></div>
                <div className="menu">
                    <Link className="btn btn-primary cart-link mr-3 d-flex align-items-center" to="/cart">
                        <i className="cart-icon fa fa-shopping-cart" />
                        <span className="numItems d-flex align-items-center justify-content-center">{numItems}</span> <span className="ml-3">({total}₴</span>)
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;