import React from "react";
import logo from "../assets/Images/logo.png";
import Info from "./Info";
import { Link } from "react-router-dom";

function Headers() {
  return (
    <div className="container headers">
      <Info />
      <div className="header">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/interface">Interface</Link>
          </li>
        </ul>
        <div className="apply">
          <img src={logo} alt="logo" />
        </div>
        <ul className="right">
          <li>
            <Link to="/perfectly">Perfectly</Link>
          </li>
          <li>
            <Link to="/customers">Customers</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Headers;
