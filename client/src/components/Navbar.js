import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = ({ user, setUser }) => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">TravelGo</Link>
      </div>
      <ul className="navbar-links">
        {user ? (
          <>
            <li>
              <span>Explore ▾</span>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/tours">Tours</Link>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
              </ul>
            </li>

            <li>
              <span>Company ▾</span>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/careers">Careers</Link>
                </li>
                <li>
                  <Link to="/testimonials">Testimonials</Link>
                </li>
              </ul>
            </li>

            <li>
              <span>Info ▾</span>
              <ul className="dropdown-menu">
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <Link to="/terms">Terms</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>
              <button
                onClick={() => {
                  localStorage.removeItem("token");
                  setUser(null);
                }}
                className="logout-button"
              >
                Logout
              </button>
            </li>
          </>
        ) : (
          <li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
