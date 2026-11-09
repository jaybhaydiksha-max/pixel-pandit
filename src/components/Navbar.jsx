import React from 'react';
import './style/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header>
      <div className="container1">
        <div className="contain">
          <div className="logo">
            <img src="/assets/logo.png" alt="Logo" width="70px" />
          </div>
          <div className="heading">
            <h1>Pixel Pandits</h1>
          </div>
        </div>
        <nav className="nav">
          <ul>
            <li><Link className="n1" to="/home">Home</Link></li>
            <li><Link className="n1" to="/about">About</Link></li>
            <li><Link className="n1" to="/contactus">Contact Us</Link></li>
            <li><Link className="n1" to="/Faqs">FAQs</Link></li>
          </ul>
        </nav>
        <div className="rig">
          <ul>
            <li><Link className="l1" to="/login">Login</Link></li>
            <li><Link className="l1" to="/login">Signup</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
