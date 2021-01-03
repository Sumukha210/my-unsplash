import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {}, []);

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div className="validationPage">
      <div className="validationPage__container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form__group">
            <label htmlFor="email">Email id:-</label>
            <br />
            <input
              type="text"
              name="email"
              value={email}
              placeholder="myname@gmail.com"
              onChange={e => setEmail(e.target.value)}
              id="email"
            />
          </div>

          <div className="form__group">
            <label htmlFor="password">password:-</label>
            <br />
            <input
              type="text"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="myname123@"
              id="password"
            />
          </div>

          <div className="form__group">
            <button type="submit">Login</button>
          </div>
        </form>
        <div className="validationPage__extra">
          <h3 className="title">
            New user?
            <span onClick={() => history.push("/signup")}>
              click here to create an account
            </span>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Login;
