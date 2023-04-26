import React from "react";
import "./register.scss";
import screen from  "../../assets/images/screen.png"


const Register = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="left-container">
          <div className="texts">
            <h2>Welcome to Fire App</h2>
            <p>Lorem ipsum dolor sit amet </p>
          </div>

          <form className="form">
            <div className="formInput">
              <label htmlFor="">Name</label>
              <input type="text" />
              <span className="bar"/>
            </div>
            <div className="formInput">
              <label htmlFor="">Username</label>
              <input type="text" />
              <span className="bar"/>
            </div>
            <div className="formInput">
              <label htmlFor="">Email</label>
              <input type="text" />
              <span className="bar"/>
            </div>
            <div className="formInput">
              <label htmlFor="">Password</label>
              <input type="password"/>
              <span className="bar"/>
            </div>
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
      <div className="right">
        <h2>All in one Dashboard</h2>
        <img  src={screen} alt="fireSpot"/>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
      </div>
    </div>
  );
};

export default Register;
