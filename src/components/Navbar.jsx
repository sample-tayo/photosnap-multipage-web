import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar({ logoSrc }) {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logoSrc} alt="logo" />
      </div>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <div className="menu-item">STORIES</div>
        <div className="menu-item">FEATURES</div>
        <div className="menu-item">PRICING</div>
        <button className="download-btn hidden">GET AN INVITE</button>
      </div>
      <button className="download-btn hide">GET AN INVITE</button>
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaBars /> : <FaTimes />}
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  logoSrc: PropTypes.string.isRequired,
};
