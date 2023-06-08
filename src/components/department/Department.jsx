import React from "react";
import "./department.scss";
import LeftSidebar from "../leftSidebar/LeftSidebar";
import UserTable from "../userTable/UserTable";
import RightSidebar from "../rightSidebar/RightSidebar";
import {useLocation} from "react-router-dom";
// deportment banner
const Department = () => {

    let location = useLocation();
    const departmentId = location.pathname.split('/')[2]

  return (
      <div className="wrapper">
        <LeftSidebar />
        <div className="mid">
          <div className="header">
            <h2>Department Management > Department Id: {departmentId}</h2>
          </div>
          <div className="tableContainer">
            <UserTable />
          </div>
        </div>
        <RightSidebar />
      </div>
  );
};

export default Department;
