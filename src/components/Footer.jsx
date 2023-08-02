import {
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaLinkedin,
} from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="social-logo-container">
          <div className="footer-logo">Logo</div>
          <div className="social-icons">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter className="icon" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="icon" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="icon" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
          </div>
        </div>

        <nav className="footer-menu">
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">STORIES</a>
            </li>
            <li>
              <a href="#">FEATURES</a>
            </li>
            <li>
              <a href="#">PRICING</a>
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
