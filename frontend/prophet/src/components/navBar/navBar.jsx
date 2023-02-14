import React from "react";
import "./navBar.css";

import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg  custome-navbar navbar-light bg-light fixed-top pb-3 pt-3 ">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="nav navbar-nav">
            <li className="nav-item active">
              <Link to="/" className="nav-link " aria-current="page">
                الكُتُب
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link " aria-current="page">
                عن الموقع
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
