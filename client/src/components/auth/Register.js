import React, { Fragment, useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const { username, email, password, password2 } = formData;
  return (
    <Fragment>
      <form>
        <div className="form-group mt-4">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder=""
            value={email}
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder=""
            value={username}
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
                placeholder=""
                value={password}
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
                placeholder=""
                value={password2}
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
