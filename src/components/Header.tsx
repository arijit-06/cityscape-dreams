import React, { useState } from 'react';
import { Menu, X, Search, MapPin, User } from 'lucide-react';
import '../styles/Header.css';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="header__container">
        {/* Logo */}
        <div className="header__logo">
          <MapPin className="header__logo-icon" />
          <span className="header__logo-text">Explore India</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="header__nav">
          <a href="#destinations" className="header__nav-link">Destinations</a>
          <a href="#experiences" className="header__nav-link">Experiences</a>
          <a href="#culture" className="header__nav-link">Culture</a>
          <a href="#travel-guide" className="header__nav-link">Travel Guide</a>
          <a href="#about" className="header__nav-link">About</a>
        </nav>

        {/* Actions */}
        <div className="header__actions">
          <button className="header__search-btn" aria-label="Search">
            <Search size={20} />
          </button>
          <button className="header__user-btn" aria-label="User account">
            <User size={20} />
          </button>
          <button className="header__cta-btn">
            Plan Trip
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="header__mobile-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="header__mobile-menu">
          <nav className="header__mobile-nav">
            <a href="#destinations" className="header__mobile-link" onClick={toggleMobileMenu}>
              Destinations
            </a>
            <a href="#experiences" className="header__mobile-link" onClick={toggleMobileMenu}>
              Experiences
            </a>
            <a href="#culture" className="header__mobile-link" onClick={toggleMobileMenu}>
              Culture
            </a>
            <a href="#travel-guide" className="header__mobile-link" onClick={toggleMobileMenu}>
              Travel Guide
            </a>
            <a href="#about" className="header__mobile-link" onClick={toggleMobileMenu}>
              About
            </a>
          </nav>
          <div className="header__mobile-actions">
            <button className="header__mobile-cta">Plan Trip</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;