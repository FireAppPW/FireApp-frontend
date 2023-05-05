import React from "react";
import "./register.scss";
import screen from  "../../assets/images/screen.png"
import google_logo from  "../../assets/icons/google-logo.svg"


const Register = () => {
  return (
    <div className="container">
      <div className="left">
        <div className="left-container">
          <div className="texts">
            <h2>Welcome to Fire App</h2>
            <p>Lorem ipsum dolor sit amet </p>
          </div>

          <div className="sign-up">
            <div className="content">
              <img src={google_logo} alt=""/>
              <p>Sign Up with google</p>
            </div>
          </div>
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
