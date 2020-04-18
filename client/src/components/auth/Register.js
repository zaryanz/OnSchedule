import React, { Fragment, useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const { username, email, password, password2 } = formData;
  return (
    <Fragment>
      <form>
        <div className="form-group mt-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailHelp"
            placeholder=""
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            placeholder=""
            value={username}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder=""
                value={password}
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label htmlFor="password2">Confirm password</label>
              <input
                type="password"
                className="form-control"
                id="password2"
                name="password2"
                placeholder=""
                value={password2}
                onChange={(e) => onChange(e)}
              />
            </div>
          </div>
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Sign Up
        </button>
      </form>
    </Fragment>
  );
};

export default Register;
