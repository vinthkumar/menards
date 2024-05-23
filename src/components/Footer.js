import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/style.css';
import logo from '../assets/img/menards-logo-lg-no-slogan.png';
import { FaInstagram, FaFacebook, FaPinterest } from 'react-icons/fa';
import { TfiTwitterAlt } from 'react-icons/tfi';

const Footer = () => {
    return (
        <footer className="container-fluid text-light">
            <div className="row bg-secondary px-5 py-5">
                <div className="col-6 col-sm-4 col-md-2 mb-3">
                    <h6 className='footer-head'>Showroom</h6>
                    <p className="mb-2"><a href="" className="text-footer">Book on Appointment</a></p>
                    <p className="mb-2"><a href="" className="text-footer">Our Location </a></p>
                    <p className="mb-2"><a href="" className="text-footer">Virtual Tour </a></p>
                    <p className="mb-2"><a href="" className="text-footer">Kitchen Gallery </a></p>
                    <p className="mb-2"><a href="" className="text-footer">Bath Gallery </a></p>
                </div>
                <div className="col-6 col-sm-4 col-md-2 mb-3">
                    <h6 className='footer-head'>Contact Us</h6>
                    <p className="mb-2"><a href="" className="text-footer">Get In Touch</a></p>
                    <p className="mb-2"><a href="" className="text-footer">FAQ </a></p>
                </div>
                <div className="col-6 col-sm-4 col-md-2 mb-3">
                    <h6 className='footer-head'>Shop</h6>
                    <p className="mb-2"><a href="" className="text-footer">Kitchen</a></p>
                    <p className="mb-2"><a href="" className="text-footer">Bath </a></p>
                </div>
                <div className="col-6 col-sm-4 col-md-2 mb-3">
                    <h6 className='footer-head'>About Us</h6>
                    <p className="mb-2"><a href="" className="text-footer">Our Story</a></p>
                    <p className="mb-2"><a href="" className="text-footer">Join Our Team </a></p>
                </div>
                <div className="col-6 col-sm-4 col-md-2 mb-3">
                    <h6 className='footer-head'>Library</h6>
                    <p className="mb-2"><a href="" className="text-footer">Design Request Form</a></p>
                    <p className="mb-2"><a href="" className="text-footer">Get Inspired </a></p>
                    <p className="mb-2"><a href="" className="text-footer">Brochures </a></p>
                    <p className="mb-2"><a href="" className="text-footer">Blogs </a></p>
                    <p className="mb-2"><a href="" className="text-footer">Helpful Guides </a></p>
                </div>
                <div className="col-6 col-sm-4 col-md-2 mb-3">
                    <h6 className='footer-head'>My Account</h6>
                    <p className="mb-2"><a href="#" className="text-footer">Tracking Orders</a></p>
                    <p className="mb-2"><a href="#" className="text-footer">View Orders</a></p>
                    <p className="mb-2"><a href="#" className="text-footer">Submit Warranty Claim </a></p>
                    <p className="mb-2"><a href="#" className="text-footer">Book a Delivery </a></p>
                </div>
            </div>
            <div className='row bg-primary py-3'>
                <div className="col-12 d-flex flex-column flex-md-row justify-content-between align-items-center">
                    <Link className="navbar-brand px-5 mb-3 mb-md-0" to="/">
                        <img src={logo} alt="logo" height={30} />
                    </Link>
                    <div className="footer-links d-flex flex-column flex-md-row align-items-center mb-3 mb-md-0">
                        <p className="mx-4 my-1"><Link to="/sitemap" className="text-white text-decoration-none">SiteMap</Link></p>
                        <p className="mx-4 my-1"><Link to="/privacy-policy" className="text-white text-decoration-none">Privacy Policy</Link></p>
                        <p className="mx-4 my-1"><Link to="/terms-and-conditions" className="text-white text-decoration-none">Terms and Conditions</Link></p>
                        <p className="mx-4 my-1"><Link to="/cookies" className="text-white text-decoration-none">Cookies</Link></p>
                    </div>
                    <div className="social-icons d-flex px-5 mb-3 mb-md-0">
                        <a href="https://www.instagram.com" className="mx-2 text-white px-1"><FaInstagram /></a>
                        <a href="https://www.facebook.com" className="mx-2 text-white px-1"><FaFacebook /></a>
                        <a href="https://www.pinterest.com" className="mx-2 text-white px-1"><FaPinterest /></a>
                        <a href="https://twitter.com" className="mx-2 text-white px-1"><TfiTwitterAlt /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

