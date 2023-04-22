import React from "react";
import "./leftSidebar.scss";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import AssessmentOutlinedIcon from "@mui/icons-material/AssessmentOutlined";

const LeftSidebar = () => {
  return (
    <div className="leftsidebar">
      <div className="appicon">
        <img
          style={{ height: "50px" }}
          src="https://www.clipartmax.com/png/middle/36-367029_image-result-for-fire-icon-fire-icon-png.png"
          alt=""
        />
        <span>FireApp</span>
      </div>
      <div className="sidebarItems">
        <ul>
          <li className="sidebarItem">
            <SpaceDashboardOutlinedIcon className="icon" />
            <span>Emergencies</span>
          </li>
          <li className="sidebarItem">
            <CalendarTodayOutlinedIcon className="icon" />
            <span>Management</span>
          </li>
          <li className="sidebarItem">
            <EmailOutlinedIcon className="icon" />
            <span>Courses</span>
          </li>
          <li className="sidebarItem">
            <AssessmentOutlinedIcon className="icon" />
            <span>Workshops</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;
