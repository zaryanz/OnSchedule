import React, { Fragment, useState } from "react";

const Login = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
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
                name="username"
                placeholder=""
                value={username}
                onChange={(e) => onChange(e)}
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
                name="password"
                placeholder=""
                value={password}
                onChange={(e) => onChange(e)}
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
