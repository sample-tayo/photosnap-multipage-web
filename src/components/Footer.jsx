import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import PropTypes from "prop-types";
import { BsArrowRight } from "react-icons/bs";
import "../styles/footer.css";
import { NavLink } from "react-router-dom";

function Footer({ logoSrc }) {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="social-logo-container">
          <div className="footer-logo">
            <img
              src={logoSrc}
              alt="logo"
              style={{ color: "#fff", fill: "#fff" }}
            />
          </div>
          <div className="social-icons">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" color="#fff" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="icon" color="#fff" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="icon" color="#fff" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="icon" color="#fff" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" color="#fff" />
            </a>
          </div>
        </div>

        <nav className="footer-menu">
          <ul>
            <li>
              <NavLink to="/">HOME</NavLink>
            </li>
            <li>
              <NavLink to="/stories">STORIES</NavLink>
            </li>
            <li>
              <NavLink to="/features">FEATURES</NavLink>
            </li>
            <li>
              <NavLink to="/pricing">PRICING</NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <div className="footer-right-container">
        <div className="footer-right-text">
          <p>GET AN INVITE</p>
          <BsArrowRight />
        </div>
        <div>
          <p>&copy; 2023 All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
Footer.propTypes = {
  logoSrc: PropTypes.string.isRequired,
};
