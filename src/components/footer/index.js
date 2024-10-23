import React from "react";
import "./index.css"; // Ensure this file includes the necessary CSS for styling.
import img1 from "../../assets/images/SONFM.png";
import img2 from "../../assets/images/saudimade_logo.png";

const Footer = () => {
  return (
    <footer className="footer unique-footer">
      <div className="footer__container">
        <p className="footer__text">Follow us on social media:</p>
        <div className="footer__social">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <i className="ri-facebook-line"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <i className="ri-twitter-line"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <i className="ri-linkedin-line"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <i className="ri-instagram-line"></i>
          </a>
        </div>
        <div className="footer__images">
          <img
            src={img1}
            alt="saudi open network"
            className="footer__image"
          />
          <img
            src={img2}
            alt="saudi made "
            className="footer__image"
          />
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
