import React from "react";
import "./usermanagement.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import UserTable from "../../components/userTable/UserTable";
import RightSidebar from "../../components/rightSidebar/RightSidebar";

const UserManagement = () => {
  return (
    <div className="wrapper">
      <LeftSidebar />
      <div className="mid">
        <div className="header">
          <h2>User Management</h2>
        </div>
        <div className="tableContainer">
          <UserTable />
        </div>
      </div>
      <RightSidebar />
    </div>
  );
};

export default UserManagement;
