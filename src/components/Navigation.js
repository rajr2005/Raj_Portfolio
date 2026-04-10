import React, { useState } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import './Navigation.css';

const Navigation = ({ isDarkMode, toggleDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (e) => {
    const target = e.target.getAttribute('href');
    if (target?.startsWith('#')) {
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">
          <span className="logo-icon">{'< '}</span>
          <span className="logo-text">Raj R</span>
          <span className="logo-icon">{' />'}</span>
        </div>

        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <a href="#about" onClick={handleNavClick} className="nav-link">About</a>
          <a href="#skills" onClick={handleNavClick} className="nav-link">Skills</a>
          <a href="#projects" onClick={handleNavClick} className="nav-link">Projects</a>
          <a href="#contact" onClick={handleNavClick} className="nav-link">Contact</a>
        </div>

        <div className="nav-actions">
          <button 
            className="theme-toggle"
            onClick={toggleDarkMode}
            title="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button 
            className="menu-toggle"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
