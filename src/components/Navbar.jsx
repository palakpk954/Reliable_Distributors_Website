import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();
  const { cartItems, toggleCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Calculator', path: '/calculator' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <Link to="/" className="logo">
          <i className="fa-solid fa-fire-extinguisher"></i> Reliable Distributors
        </Link>
        <nav>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path} 
                  className={location.pathname === link.path ? 'active' : ''}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="nav-actions">
              <button className="icon-btn" onClick={toggleTheme} title="Toggle Dark Mode">
                {isDarkMode ? <i className="fa-solid fa-sun"></i> : <i className="fa-solid fa-moon"></i>}
              </button>
              <button className="icon-btn cart-btn" onClick={toggleCart} title="Quote Cart">
                <i className="fa-solid fa-cart-shopping"></i>
                {cartItems.length > 0 && <span className="cart-badge">{cartItems.length}</span>}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
