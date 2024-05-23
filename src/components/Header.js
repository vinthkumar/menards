import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/img/menards-logo-lg-no-slogan.png';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { BiMenu } from 'react-icons/bi';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary py-3">
                <Link className="navbar-brand px-5" to="/">
                    <img src={logo} alt="logo" height={30} />
                </Link>
                <button className="navbar-toggler mx-4" type="button" onClick={toggleMenu}>
                    <BiMenu />
                </button>
                <div className={`justify-content-end collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto px-4">
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="shopDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Shop
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="shopDropdown">
                                <Link className="dropdown-item" to="/shop/category1">Shop 1</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/shop/category2">Shop 2</Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="#" id="showroomDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Showroom
                            </Link>
                            <div className="dropdown-menu" aria-labelledby="showroomDropdown">
                                <Link className="dropdown-item" to="/showroom/category1">Showroom 1</Link>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/showroom/category2">Showroom 2</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/library">Library</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav px-5">
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center" to="/my-account">
                                <FaUser className="me-2 fs-5" /> My Account
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link d-flex align-items-center" to="/my-cart">
                                <FaShoppingCart className="me-2 fs-5" /> My Cart
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
