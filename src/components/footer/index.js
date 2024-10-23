import React from "react";
import "./index.css"; // Ensure this file includes the necessary CSS for styling.
import img1 from "../../assets/images/SONFM.png";
import img2 from "../../assets/images/saudimade_logo.png";

const Footer = () => {
  return (
    <footer className="footer unique-footer">
      <div className="wrapper">
        <div className="footer__container">
          <div className="footer__section">
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
          </div>

          <div className="footer__section">
            <p>
              For any complaints or concerns, please reach out to:
              <a href="mailto:support@sawaride.app" className="footer__link">
                &nbsp; support@sawaride.app
              </a>
            </p>
          </div>

          <div className="footer__section">
            <p>Registered Address:</p>
            <p>
              Street #61, Al Nadwah Dist, Riyadh, Kingdom of Saudi Arabia, 14813
            </p>
          </div>

          <div className="footer__images">
            <a href="https://saudiopennetwork.com">
              <img
                src={img1}
                alt="saudi open network"
                className="footer__image"
              />
            </a>
            <a href="https://saudimade.sa/en">
              <img src={img2} alt="saudi made" className="footer__image" />
            </a>
          </div>
        </div>
      </div>

      <p className="rights">
        © Sawa Mobility Solutions Company Limited 2024 • All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
