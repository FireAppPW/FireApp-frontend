import React, {useEffect, useState} from "react";
import "./rightSidebar.scss";
import axios from "axios";
import LogoutIcon from '@mui/icons-material/Logout';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import {NotificationData} from "./NotificationsData";
import AddIcon from "@mui/icons-material/Add";
import {googleLogout} from "@react-oauth/google";
import {Link, useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';


const CreateNotification = Link
const UserUpdate = Link
const User = Link

const RightSidebar = () => {

  const navigate = useNavigate();
  const [ profile, setProfile ] = useState([]);
  const userId = localStorage.getItem("userId")


  useEffect(
      () => {
        const cookieValue = JSON.parse(Cookies.get('google-auth'));
        if (cookieValue) {
          axios
              .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${cookieValue.access_token}`, {
                headers: {
                  Authorization: `Bearer ${cookieValue.access_token}`,
                  Accept: 'application/json'
                }
              })
              .then((res) => {
                setProfile(res.data);
              })
              .catch((err) => console.log(err));
        }
      },

      []
  );

  const logOut = () => {
    googleLogout();
    Cookies.remove('token')
    Cookies.remove('google-auth')
      localStorage.clear()
    setProfile(null);
    navigate("/")
  };


  return (
    <div className="rightSidebar">
    <div className="top">
        <UserUpdate to={"/manageuser/update/" + userId}>
            <EditOutlinedIcon className="logoutIcon"/>
        </UserUpdate>
        <LogoutIcon onClick={logOut} className="logoutIcon"/>
    </div>

      <div className="personalInfo">
        <User to={"/manageuser/" + userId} className="profilePic">
            <img src={profile.picture} alt=""/>
        </User>
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
                <div key={item.id} className="notification">
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
