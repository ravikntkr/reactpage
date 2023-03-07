import React from "react";
import "./App.css";
import "./Responsive.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";

let Header = () => (
  <header>
    <section className="logoArea">
      <img src={logo} alt="Ravikant" className="logo" />
    </section>
    {/* Navbar */}
    <nav>
      <ul className="menu">
        <Link to="/" style={{ textDecoration: "none" }}>
          <li className="menuItems">Home</li>
        </Link>
        <Link to="/courses" style={{ textDecoration: "none" }}>
          <li className="menuItems">Courses</li>
        </Link>
        <Link to="/contact" style={{ textDecoration: "none" }}>
          <li className="menuItems">Contact</li>
        </Link>
        <li className="menuItems">Login/Signup</li>
      </ul>
    </nav>
    {/* Button */}
  </header>
);

export default Header;
