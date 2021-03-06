import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark shadow-sm">
      <Link className="navbar-brand" to="/">
        OnSchedule
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <Link className="nav-item nav-link active mr-3" to="/login">
            Login<span className="sr-only">(current)</span>
          </Link>
          <Link className="nav-item nav-link active" to="/register">
            Register <span className="sr-only">(current)</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
