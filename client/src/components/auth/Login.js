import React, { Fragment, useState } from "react";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <div className="card mt-5 shadow">
        <div className="card-body">
          <h3 className="card-title text-center">Welcome Back</h3>
          <p className="text-center">Log in to OnSchedule</p>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group mt-4">
              <label htmlFor="username">Username</label>
              <input
                type="username"
                className="form-control mt-1"
                id="username"
                name="username"
                aria-describedby="emailHelp"
                placeholder=""
                value={username}
                onChange={(e) => onChange(e)}
              />
            </div>
            <div className="form-group mt-2">
              <label htmlFor="password">Password</label>
              <input
                type="text"
                className="form-control mt-1"
                id="password"
                name="password"
                placeholder=""
                value={password}
                onChange={(e) => onChange(e)}
              />
            </div>
            <button type="submit" className="btn btn-primary mt-2 mb-3">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
