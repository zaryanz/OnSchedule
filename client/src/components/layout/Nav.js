import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        OnSchedule
      </a>
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
        <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/">
            Home <span className="sr-only">(current)</span>
          </Link>
          <Link className="nav-item nav-link active" to="/login">
            Login <span className="sr-only">(current)</span>
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
