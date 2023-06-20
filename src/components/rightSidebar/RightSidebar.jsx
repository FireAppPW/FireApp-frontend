import React, {useEffect, useState} from "react";
import "./rightSidebar.scss";
import LogoutIcon from '@mui/icons-material/Logout';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import AddIcon from "@mui/icons-material/Add";
import {googleLogout} from "@react-oauth/google";
import {Link, useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import {PROFILE_DEPARTMENT_ID, PROFILE_ROLE, PROFILE_USER_ID} from "../../constants";
import {getDepartmentById} from "../../services/DepartmentService";
import {getAllEmergencies} from "../../services/EmergencyService";


const CreateEmergency = Link
const UserUpdate = Link
const User = Link

const RightSidebar = () => {

    const navigate = useNavigate();
    const [emergencyData, setEmergencyData] = useState([]);
    const [profile, setProfile] = useState({})

    const emergencyColors = ["#96FF71BD", "#FFDD71BD", "#FF7971BD","#FF7971BD"]
    const emergencyIconColors = ["#5AFD21", "#F9BE00", "#FE564C", "#FE564C"]
    function sortNull() {
        return function (a, b) {
            if (a.dateTimeClosed === null) {
                return -1;
            }
            if (b.dateTimeClosed === null) {
                return 1;
            }
        };
    }


    const [departmentData, setDepartmentData] = useState([]);

  useEffect(
      () => {
          setProfile(JSON.parse(localStorage.getItem("google-profile")))
          getDepartmentById(PROFILE_DEPARTMENT_ID).then((response) => setDepartmentData(response))
          getAllEmergencies().then((response) => setEmergencyData(response.sort(sortNull())))
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
        <UserUpdate to={"/manageuser/update/" + PROFILE_USER_ID}>
            <EditOutlinedIcon className="logoutIcon"/>
        </UserUpdate>
        <LogoutIcon onClick={logOut} className="logoutIcon"/>
    </div>

      <div className="personalInfo">
        <User to={"/manageuser/" + PROFILE_USER_ID} className="profilePic">
            <img src={profile.picture} alt=""/>
        </User>
        <div className="profileName">{profile.name}</div>
        <div className="profileRole">{PROFILE_ROLE}</div>
      </div>
      <div className="departmentInfo">
        <h2>Fire Department</h2>
        <div className="departmentCard">
          <div className="content">
            <div className="id">
              <p>{PROFILE_DEPARTMENT_ID}</p>
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
          <h2>Recent Emergencies</h2>
          <CreateEmergency to="/newEmergency" className="addNotification" style={PROFILE_ROLE === ("User") ? {display: "none"} : null}>
            <AddIcon className="icon"/>
          </CreateEmergency>
        </div>


        {
          emergencyData.slice(0, 3).map((item) =>{
              console.log(item)
            return (
                <div key={item.id} className="notification">
                  <div className="square" style={{backgroundColor: emergencyColors[item.dangerousLevel]}}>
                    <ErrorOutlineOutlinedIcon className="icon" style={{color: emergencyIconColors[item.dangerousLevel]}}/>
                  </div>
                  <p className="info">{item.city + ", " + item.country}</p>
                  <p className="date">{item.dateTimeCreated.slice(0,10)}</p>
                </div>
            );
          })
        }
      </div>
    </div>
  );
};

export default RightSidebar;
