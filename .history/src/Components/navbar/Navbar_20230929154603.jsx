import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      {/* Navbar Start */}
      <div className="container-fluid p-0 nav-bar">
        <nav className="navbar navbar-expand-lg bg-none navbar-dark py-3">
          <Link to="/" className="navbar-brand">
            <h1 className="m-0 display-4 font-weight-bold text-uppercase text-white">
              Gymnast
            </h1>
          </Link>
          <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav ml-auto p-4 bg-secondary">
              <Link className="nav-item nav-link active" to="/">
                Home
              </Link>
              <Link className="nav-item nav-link" to="/about">
                About Us
              </Link>
              <Link className="nav-item nav-link" to="/feature">
                Our Features
              </Link>
              <Link className="nav-item nav-link" to="/classes">
                Classes
              </Link>
              <div className="nav-item dropdown">
                <button
                  className="nav-link btn btn-link"
                  onClick={toggleDropdown}
                >
                  Profile
                </button>
                {isDropdownOpen && (
                  <div className="dropdown-menu text-capitalize">
                    <Link to="/profile" className="dropdown-item">
                      Profile
                    </Link>
                    <Link to="/account" className="dropdown-item">
                      Account
                    </Link>
                    <Link to="/settings" className="dropdown-item">
                      Settings
                    </Link>
                    <Link to="/logout" className="dropdown-item">
                      Log Out
                    </Link>
                  </div>
                )}
              </div>
              <Link className="nav-item nav-link" to="/login">
                Login
              </Link>
            </div>
          </div>
        </nav>
      </div>
      {/* Navbar End */}
    </>
  );
};

export default Navbar;
