import React, {useEffect} from "react";
import "./login.scss";
import screen from "../../assets/images/screen.png";
import google_logo from "../../assets/icons/google-logo.svg";
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import axios from "axios";




const Login = () => {
    const navigate = useNavigate();

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => {
            Cookies.set('googleAuth', JSON.stringify(codeResponse));
            navigate("/emergencies")
        },
        onError: (error) => console.log('Login Failed:', error)
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
