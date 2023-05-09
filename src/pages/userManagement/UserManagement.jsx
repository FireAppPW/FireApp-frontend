import React from "react";
import "./usermanagement.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import UserTable from "../../components/userTable/UserTable";
import RightSidebar from "../../components/rightSidebar/RightSidebar";

const UserManagement = () => {
  return (
    <div className="userManagementContainer">
      <LeftSidebar />
      <div className="userManagementContent">
        <div className="header">
          <p>User Management</p>
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
