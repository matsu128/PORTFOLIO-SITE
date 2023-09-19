import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handlePortfolioClick = (event) => {
    event.preventDefault();
    window.location.href = '/';
  };

  return (
    <header className={`header ${menuOpen ? 'menu-open' : ''}`} id="header">
      <div className="header-content">
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </div>
        <p onClick={handlePortfolioClick}>PortFolio</p>
        <ul className={`navbar ${menuOpen ? 'active' : ''}`}>
          <li className="navbar-item">
            <a href="#banner" onClick={toggleMenu}>
              About
            </a>
          </li>
          <li className="navbar-item">
            <a href="#projects" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li className="navbar-item">
            <a href="#skills" onClick={toggleMenu}>
              Skills
            </a>
          </li>
          <li className="navbar-item">
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
