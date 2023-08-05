import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navbar({ logoSrc }) {
  const [menuOpen, setMenuOpen] = useState(true);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to="/">
          <img src={logoSrc} alt="logo" />
        </NavLink>
      </div>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <div className="menu-item">
          <NavLink to="/stories"> STORIES </NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="/features"> FEATURES </NavLink>
        </div>
        <div className="menu-item">
          <NavLink to="/pricing"> PRICING </NavLink>
        </div>
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
