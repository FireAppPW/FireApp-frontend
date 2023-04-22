import React from "react";
import "./rightSidebar.scss";

const RightSidebar = () => {
  return (
    <div className="rightsidebar">
      <div className="personalinfo">
        <div className="profilepic"></div>
        <div className="profilename"></div>
        <div className="profilerole"></div>
      </div>
      <div className="departmentinfo"></div>
      <div className="notifications">
        <span>Notifications</span>
        <div className="notification"></div>
      </div>
    </div>
  );
};

export default RightSidebar;
