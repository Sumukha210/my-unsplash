import React, { useEffect, useState } from "react";
import { Redirect, useHistory } from "react-router-dom";

const SignUP = () => {
  const history = useHistory();

  const [isRedirect, setIsRedirect] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {}, []);

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      {isRedirect && <Redirect to="/" />}
      <div className="validationPage">
        <div className="validationPage__container">
          <form className="form" onSubmit={handleSubmit}>
            <div className="form__group">
              <label htmlFor="name">User Name:-</label>
              <br />
              <input
                type="text"
                name="name"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="myName kumar"
                id="name"
              />
            </div>

            <div className="form__group">
              <label htmlFor="email">Email id:-</label>
              <br />
              <input
                type="text"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="myname@gmail.com"
                id="email"
              />
            </div>

            <div className="form__group">
              <label htmlFor="password">Password:-</label>
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
              <button type="submit">Signup</button>
            </div>
          </form>

          <div className="validationPage__extra">
            <h4 className="title">
              Already have an account?
              <span onClick={() => history.push("/login")}>
                click here to login
              </span>
            </h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUP;
