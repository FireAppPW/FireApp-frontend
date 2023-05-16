import React from "react";
import "./departmentmanagement.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import DepartmentTable from "../../components/departmentTable/DepartmentTable";
import RightSidebar from "../../components/rightSidebar/RightSidebar";

const DepartmentManagement = () => {
  return (
    <div className="wrapper">
      <LeftSidebar />
      <div className="mid">
        <div className="departmentHeader">
          <h2>Department Management</h2>
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
