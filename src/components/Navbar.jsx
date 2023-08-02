// App.js
import { useState } from "react";
import "../styles/navbar.css";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">Logo</div>
      <div className={`menu ${menuOpen ? "open" : ""}`}>
        <div className="menu-item">Home</div>
        <div className="menu-item">About</div>
        <div className="menu-item">Services</div>
        <button className="download-button">Download</button>
      </div>
      {/* <div className={menuOpen ? "" : "hide"}>
        <button className="download-button">Download</button>
      </div> */}
      <div className="menu-icon" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
}
