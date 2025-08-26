import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    window.location.href = '/';
  };

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          Discover Dharmapuri
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={`nav-menu ${menuOpen ? 'active' : ''}`}>
          {!isLoggedIn && (
            <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
          )}
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          {isLoggedIn && (
            <>
              <li><Link to="/places" onClick={closeMenu}>Places</Link></li>
              <li><Link to="/guides" onClick={closeMenu}>Guides</Link></li>
              <li><Link to="/feedback" onClick={closeMenu}>Feedback</Link></li>
              <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
              <li><Link to="/profile" onClick={closeMenu}>👤</Link></li>
              <li
                style={{ cursor: 'pointer', color: 'red' }}
                onClick={() => {
                  closeMenu();
                  handleLogout();
                }}
              >
               ⏻
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
