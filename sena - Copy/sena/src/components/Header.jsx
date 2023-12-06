import React, { useState, useEffect } from 'react';
import logo from '../components/assets/vocsenalogo.png';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuActive(!mobileMenuActive);
    document.body.classList.toggle('overflow-hidden');
  };
  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
      <div className="header-content">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <h1 className="header-title">
          <b>Vocsena</b> services
        </h1>

        {/* Mobile Menu Icon */}
        <div
          className={`mobile-menu-icon ${mobileMenuActive ? 'active' : ''}`}
          onClick={toggleMobileMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Navigation Menu */}
        <nav className={`nav-header ${mobileMenuActive ? 'active' : ''}`}>
          <Link to='/Website' className='nav-item'>Websites</Link>
          <Link to="/pricing" className="nav-item">
            Contact
          </Link>

          <Link to="/testimonials" className="nav-item">
            Testimonials
          </Link>

          <Link to="/pricing" className="nav-item">
           Meet
          </Link>
        </nav>

        <div className="header-buttons">
          <Link to="/Contact" className="login-in-button">
            Contact
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
