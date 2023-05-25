import React from "react";
import "./login.scss";
import screen from "../../assets/images/screen.png";
import google_logo from "../../assets/icons/google-logo.svg";
import { useGoogleLogin } from '@react-oauth/google';




const Login = () => {

    const login = useGoogleLogin({
        onSuccess: tokenResponse => console.log(tokenResponse),
    });

  return (
      <div className="container">
          <div className="left">
              <div className="left-container">
                  <div className="texts">
                      <h2>Welcome to Fire App</h2>
                      <p>Lorem ipsum dolor sit amet </p>
                  </div>

                  <div className="sign-in" onClick={() => login()}>
                      <div className="content" >
                          <img src={google_logo} alt=""/>
                          <p>Sign In with google</p>
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

export default Login;
