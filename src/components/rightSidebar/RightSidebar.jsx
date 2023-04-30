import React from "react";
import "./rightSidebar.scss";
import profilePic from  "../../assets/images/firefighter1.jpg"
import LogoutIcon from '@mui/icons-material/Logout';
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';

const RightSidebar = () => {
  return (
    <div className="rightSidebar">
    <div className="top">
        <LogoutIcon className="logoutIcon"/>
    </div>

      <div className="personalInfo">
        <div className="profilePic">
            <img src={profilePic} alt=""/>
        </div>
        <div className="profileName">John Doe</div>
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
        <h2>Notifications</h2>
        <div className="notification">
          <div className="square">
            <ErrorOutlineOutlinedIcon className="icon"/>
          </div>
          <p className="info">Your role has been changed</p>
          <p className="date">7:00 Pm</p>
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
