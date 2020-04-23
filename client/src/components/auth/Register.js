import React, { Fragment, useState } from "react";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
  });
  const [errors, setErrors] = useState([]);

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const res = axios
      .post("http://localhost:5000/users", formData)
      .then((res) => console.log(res))
      .catch((error) => console.log(error.response));
  };

  const { username, email, password, password2 } = formData;
  return (
    <Fragment>
      <div className="card mt-5 shadow">
        <div className="card-body">
          <form onSubmit={(e) => onSubmit(e)}>
            <h3 className="card-title text-center">New here?</h3>
            <p className="text-center">Create an account today</p>
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
            <div className="form-group mt-2">
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
              <p value={errors.username} />
            </div>
            <div className="row mt-2">
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
            <button type="submit" className="btn btn-primary mt-2 mb-3">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;
