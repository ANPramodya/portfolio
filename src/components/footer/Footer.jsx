import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io";
import { FiInstagram } from "react-icons/fi";
import "./footer.css";

const Footer = () => {
  return (
    <section id="footer">
      <div className="footer-container">
        <h2>ANPRAMODYA</h2>
        <div className="footer-links">
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-icons">
          <a href="https://facebook.com">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com">
            <IoLogoTwitter />
          </a>
          <a href="https://twitter.com">
            <FiInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
