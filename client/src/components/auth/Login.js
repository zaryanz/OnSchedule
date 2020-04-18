import React, { Fragment, useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  return (
    <Fragment>
      <form>
        <div className="row mt-4">
          <div className="col">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="username"
                className="form-control"
                id="username"
                placeholder=""
                value={username}
              />
            </div>
          </div>
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
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Sign In
        </button>
      </form>
    </Fragment>
  );
};

export default Login;
