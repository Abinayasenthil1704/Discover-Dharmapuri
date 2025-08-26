import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaHome,
  FaMapMarkedAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className="quick-links">
        <h4>Quick Links</h4>
        <div className="quick-icons">
          <Link to="/"><FaHome size={24} /></Link>
          <Link to="/places"><FaMapMarkedAlt size={24} /></Link>
          <Link to="/contact"><FaEnvelope size={24} /></Link>
        </div>
      </div>

      <div className="footer-links">
        <div>
          <h4>Explore</h4>
          <ul>
            <li>🌳 Hogenakkal Falls</li>
            <li>🏞️ Theerthamalai Temple</li>
            <li>🏰 Athiyaman Fort</li>
            <li>🌲 Kottai Kovil Hills</li>
            <li>🛕 Chenraya Perumal Temple</li>
          </ul>
        </div>

        <div>
          <h4>Contact Info</h4>
          <p>📍 <strong>Dharmapuri Tourism Department</strong><br /> Near Bus Stand, Dharmapuri, TN - 636701</p>
          <p>📞 <strong>+91 98765 43210</strong></p>
          <p>✉️ <strong>info@dharmapuri-tourism.in</strong></p>
          <p>🕘 <strong>Office Hours:</strong> Mon - Sat, 9 AM to 6 PM</p>
        </div>

        <div>
          <h4>Follow Us</h4>
          <p>Stay connected for the latest tourism updates and events:</p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{new Date().getFullYear()} Discover Dharmapuri.</p>
      </div>
    </footer>
  );
}

export default Footer;
