import React from "react";
import "./register.scss";

const Register = () => {
  return (
    <div className="container">
      <div className="left">
        <h2>Welcome to Fire App</h2>
        <form className="form">
          <div className="formInput">
            <label htmlFor="">Name</label>
            <input type="text" placeholder="Name" />
          </div>
          <div className="formInput">
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="right"></div>
    </div>
  );
};

export default Register;
