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
import {CONFIG} from "../../constants";


const CreateNotification = Link
const UserUpdate = Link
const User = Link

const RightSidebar = () => {

    const navigate = useNavigate();

    const [profile, setProfile] = useState({})

    const profileUser = JSON.parse(localStorage.getItem("user"))
    const profileRole = profileUser.roles
    const profileDepartmentId = profileUser.departmentId
    const profileUserId = profileUser.userId

    const [departmentData, setDepartmentData] = useState([]);

  useEffect(
      () => {
          setProfile(JSON.parse(localStorage.getItem("google-profile")))
          axios
              .get(`https://department.fireapp.website/department/${profileDepartmentId}`, CONFIG)
              .then((response) => {
                  setDepartmentData(response.data.data);
              })
              .catch((error) => console.log(error))
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

  const logOut = () => {
    googleLogout();
    Cookies.remove('token')
    Cookies.remove('google-auth')
      localStorage.clear()
    navigate("/")
  };


  return (
    <div className="rightSidebar">
    <div className="top">
        <UserUpdate to={"/manageuser/update/" + profileUserId}>
            <EditOutlinedIcon className="logoutIcon"/>
        </UserUpdate>
        <LogoutIcon onClick={logOut} className="logoutIcon"/>
    </div>

      <div className="personalInfo">
        <User to={"/manageuser/" + profileUserId} className="profilePic">
            <img src={profile.picture} alt=""/>
        </User>
        <div className="profileName">{profile.name}</div>
        <div className="profileRole">{profileRole}</div>
      </div>
      <div className="departmentInfo">
        <h2>Fire Department</h2>
        <div className="departmentCard">
          <div className="content">
            <div className="id">
              <p>{profileDepartmentId}</p>
            </div>
            <div className="info">
                <h2>{departmentData.name}</h2>
                <p>{departmentData.email}</p>
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
