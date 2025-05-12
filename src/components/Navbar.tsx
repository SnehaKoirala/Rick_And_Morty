import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Rick and Morty</span>
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/characters"
            className={location.pathname === "/characters" ? "active" : ""}
          >
            Character Table
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
