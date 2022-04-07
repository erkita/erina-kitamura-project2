import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="nav-links main-title" onClick={closeMobileMenu}>
          Wordle
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-close" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links boxes" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/how-to-play"
              className="nav-links boxes"
              onClick={closeMobileMenu}
            >
              How To Play
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/easy"
              className="nav-links boxes"
              onClick={closeMobileMenu}
            >
              Easy
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/medium"
              className="nav-links boxes"
              onClick={closeMobileMenu}
            >
              Medium
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/hard"
              className="nav-links boxes"
              onClick={closeMobileMenu}
            >
              Hard
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
