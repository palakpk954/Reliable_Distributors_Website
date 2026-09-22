import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-info">
          <h3>Reliable Distributors</h3>
          <p>Your trusted partner for certified fire safety equipment, professional installation, and maintenance services.</p>
        </div>
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Info</h4>
          <p><i className="fa-solid fa-phone"></i> +91 7976315557</p>
          <p><i className="fa-solid fa-envelope"></i> info@reliabledistributors.com</p>
          <div className="social-links">
            <a href="#"><i className="fa-brands fa-facebook"></i></a>
            <a href="#"><i className="fa-brands fa-twitter"></i></a>
            <a href="#"><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Reliable Distributors. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
