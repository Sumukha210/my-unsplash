import React, { useState } from "react";

const UserAccount = () => {
  const [editable, setEditable] = useState(false);

  return (
    <div className="userAccount">
      <div className="userAccount__container">
        <form className="form">
          <h1 className="userAccount__title">User Profile:-</h1>
          <figure>
            <img src="/logo192.png" alt="" />
          </figure>

          <div className="form__group">
            <label htmlFor="username">User name:-</label>
            <br />
            <input type="text" name="name" id="username" />
          </div>

          <div className="form__group">
            <label htmlFor="email">Email id:-</label>
            <br />
            <input type="text" name="email" id="username" />
          </div>

          <div className="form__group">
            <label htmlFor="password">Password:-</label>
            <br />
            <input type="text" name="password" id="password" />
          </div>

          <div className="form__group">
            <label htmlFor="Confirm__password">Confirm Password:-</label>
            <br />
            <input type="text" name="confirmPassword" id="Confirm__password" />
          </div>

          <div className="btn__group">
            <button className="save-btn">save</button>
            <button className="cancel-btn">cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserAccount;
