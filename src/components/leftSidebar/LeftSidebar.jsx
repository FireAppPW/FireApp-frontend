import React from "react";
import "./leftSidebar.scss";

// import rage from  "../../assets/images/rage.png"
import {SideBarData} from "./LeftSideBarData";
import SubMenu from "./LeftSideBarSubMenu";

const LeftSidebar = () => {
  return (
    <div className="leftSidebar">
      <div className="appIcon">
        <img alt="fireSpot"/>
        <h2>FireApp</h2>
      </div>
      <div className="sidebarItems">
        <ul>
          {SideBarData.map((item, index) => {
            return <SubMenu item={item} key={index}/>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default LeftSidebar;
