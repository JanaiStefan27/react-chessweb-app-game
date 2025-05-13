// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>ChessWeb App</h3>
        <p>&copy; {new Date().getFullYear()} Toate drepturile rezervate.</p>
        <ul className="footer-links">
          <li>
            <a href="/about">Despre</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/services">Servicii</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
