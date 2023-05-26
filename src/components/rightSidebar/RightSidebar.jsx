import React, {useEffect, useState} from "react";
import "./rightSidebar.scss";
import axios from "axios";
import LogoutIcon from '@mui/icons-material/Logout';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import {NotificationData} from "./NotificationsData";
import AddIcon from "@mui/icons-material/Add";
import {googleLogout} from "@react-oauth/google";
import {Link, useLocation, useNavigate} from 'react-router-dom';


const CreateNotification = Link

const RightSidebar = () => {

  const location = useLocation();
  const navigate = useNavigate();
  const [ profile, setProfile ] = useState([]);
  useEffect(
      () => {
        if (location.state.user) {
          axios
              .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${location.state.user.access_token}`, {
                headers: {
                  Authorization: `Bearer ${location.state.user.access_token}`,
                  Accept: 'application/json'
                }
              })
              .then((res) => {
                setProfile(res.data);
              })
              .catch((err) => console.log(err));
        }
      },
      [ location.state.user ]
  );

  const logOut = () => {
    googleLogout();
    setProfile(null);
    navigate("/")
  };


  return (
    <div className="rightSidebar">
    <div className="top">
        <LogoutIcon onClick={logOut} className="logoutIcon"/>
    </div>

      <div className="personalInfo">
        <div className="profilePic">
            <img src={profile.picture} alt=""/>
        </div>
        <div className="profileName">{profile.name}</div>
        <div className="profileRole">SysAdmin</div>
      </div>
      <div className="departmentInfo">
        <h2>Fire Department</h2>
        <div className="departmentCard">
          <div className="content">
            <div className="id">
              <p>ID</p>
            </div>
            <div className="info">
                <h2>Fire Department Name</h2>
                <p>Total Applications</p>
            </div>
          </div>
        </div>
      </div>
      <div className="notifications">
        <div className="notification-top">
          <h2>Notifications</h2>
          <CreateNotification to="/newNotification" className="addNotification">
            <AddIcon className="icon"/>
          </CreateNotification>
        </div>

        {
          NotificationData.map((item) =>{
            return (
                <div className="notification">
                  <div className="square" style={{backgroundColor: item.color}}>
                    <ErrorOutlineOutlinedIcon className="icon" style={{color: item.iconColor}}/>
                  </div>
                  <p className="info">{item.info}</p>
                  <p className="date">{item.date}</p>
                </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default RightSidebar;
