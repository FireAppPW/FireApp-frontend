import React from "react";
import "./departmentmanagement.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import DepartmentTable from "../../components/departmentTable/DepartmentTable";
import RightSidebar from "../../components/rightSidebar/RightSidebar";

const DepartmentManagement = () => {
  return (
    <div className="departmentManagementContainer">
      <LeftSidebar />
      <div className="departmentManagementContent">
        <div className="departmentHeader">
          <p>Department Management</p>
        </div>
        <div className="departmentTableContainer">
          <DepartmentTable />
        </div>
      </div>
      <RightSidebar />
    </div>
  );
};

export default DepartmentManagement;
