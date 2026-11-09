// src/components/Footer.js
import { Link } from 'react-router-dom';
import React  from 'react';
import './style/Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section">
          <img src="/assets/Logo.png" alt="Logo" className="footer-logo" />
          <p>
            Pixel Pandits is an online platform that helps users detect deep fakes in images and videos. By
            leveraging advanced algorithms, our service analyzes uploaded content to determine its authenticity.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contactus">Contact us</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Customer Service</h3>
          <ul>
            <li><Link to="/faqs">FAQs</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <br />
          <div className="social-media-links">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/insta.png" alt="Instagram" />Instagram
           </a>
           <br />
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/assets/linkdin.png" alt="LinkedIn" />Linkdin
            </a>
          </div>
        </div>
        <div className="footer-section">
          <h3>Stay Updated</h3>
          <br />
          <p>For Any Query Then Fill This</p>
          <form action="/subscribe" method="post">
            <input type="email" name="email" placeholder="Enter your email" />
            <button type="submit" className="btn">Subscribe</button>
          </form>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <br />
          <p>Email: <a href="mailto:support@vericlear.com">support@pixel pandits.com</a></p>
          <p>Phone: <a href="tel:+1234567890">+1 (234) 567-890</a></p>
          <p>Address: xyz city </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 pixel Pandits. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
