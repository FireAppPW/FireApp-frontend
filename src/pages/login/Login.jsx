import React from "react";
import "./login.scss";
import screen from "../../assets/images/screen.png";
import google_logo from "../../assets/icons/google-logo.svg";
import { useGoogleLogin } from '@react-oauth/google';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import jwt from "jwt-decode";
import {PROFILE_DEPARTMENT_ID} from "../../constants";
import {getGoogleProfile, getJWT} from "../../services/LoginService";
import {getUserById, putUser} from "../../services/UserService";




const Login = () => {
    const navigate = useNavigate();


    const login = useGoogleLogin({
        onSuccess: async tokenResponse => {
            // GENERATE JWT
            getJWT(tokenResponse)
                .then((response) => {
                    const token = response.data
                    const jwt_user = jwt(response.data.accessToken)

                    Cookies.set('token', JSON.stringify(token), { expires: 1 });
                    localStorage.setItem("user", JSON.stringify(jwt_user))

                    // TAKE GOOGLE PROFILE
                    getGoogleProfile(tokenResponse)
                        .then((res) => {
                            const google_profile = res.data

                            getUserById(PROFILE_DEPARTMENT_ID,jwt_user.userId).then((user) => {
                                const user2=
                                    {
                                        "activationCode": user.activationCode,
                                        "addressLine1": user.addressLine1,
                                        "addressLine2": user.addressLine2,
                                        "birthDate": user.birthDate,
                                        "city": user.city,
                                        "country": user.country,
                                        "email": user.email,
                                        "fireDepartmentId": parseInt(user.fireDepartmentId),
                                        "firstName": user.firstName,
                                        "lastName": user.lastName,
                                        "isActivated": user.isActivated,
                                        "isDeleted": user.isDeleted,
                                        "position": user.position,
                                        "shift": user.shift,
                                        "role": {
                                            "id": parseInt(user.role.id)
                                        },
                                        "profilePicture": google_profile.picture
                                    }
                                putUser(PROFILE_DEPARTMENT_ID, jwt_user.userId, user2)
                            })
                            localStorage.setItem("google-profile", JSON.stringify(google_profile))
                            navigate("/emergencies")
                        })
                })
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
