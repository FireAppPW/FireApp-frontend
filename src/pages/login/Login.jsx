import React from "react";
import "./login.scss";
import screen from "../../assets/images/screen.png";
import google_logo from "../../assets/icons/google-logo.svg";
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import axios from "axios";
import jwt from "jwt-decode";




const Login = () => {
    const navigate = useNavigate();


    const login = useGoogleLogin({
        onSuccess: async tokenResponse => {
            Cookies.set('google-auth', JSON.stringify(tokenResponse),{ expires: 1 });
            axios
                .post("https://api.fireapp.website/account/login", {"code": tokenResponse.access_token})
                .then((response) => {
                    Cookies.set('token', JSON.stringify(response.data), { expires: 1 });
                    localStorage.setItem("user", JSON.stringify(jwt(response.data.accessToken)))
                    localStorage.setItem("userId", "3")
                    console.log(response)
                    navigate("/emergencies")
                })
                .catch(err => console.log(err))

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
