import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearch(searchTerm.toLowerCase());
    setSearchTerm("");
  };

  return (
    <div>
      <nav
        className={`navbar fixed-top navbar-expand-lg ${
          isScrolled ? "navbar-colored" : "navbar-transparent"
        }`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            NewsOn
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gradient-text">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/business">
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/entertainment">
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/general">
                  General
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/health">
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/science">
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/sports">
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/technology">
                  Technology
                </Link>
              </li>
            </ul>
            <form className="d-flex" onSubmit={handleSubmit}>
              <input
                className="form-control me-2 search-input gradient-text"
                type="search"
                placeholder="Search News..."
                aria-label="Search"
                value={searchTerm}
                onChange={handleInputChange}
              />
              <button className="btn btn-search gradient-text" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
