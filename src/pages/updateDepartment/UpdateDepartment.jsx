import React from "react";
import "./updatedepartment.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import { Link } from "react-router-dom";
import RightSidebar from "../../components/rightSidebar/RightSidebar";

const UpdateDepartment = () => {
  return (
    <>
      <div className="wrapper">
        <LeftSidebar />
        <div className="mid">
          <div className="top">
            <div className="texts">
              <h2>User Management > Update Department</h2>
              <p>Update the Department</p>
            </div>
          </div>
          <div className="options">
            <h2>Update the Department</h2>
            <div className="right">
              <Link to="/managedepartment/:id" className="cancel">
                <p>Cancel</p>
              </Link>
              <Link to="/managedepartment/:id" className="save">
                <p>Update</p>
              </Link>
            </div>
          </div>
          <form action="" className="formSection">
            <div className="container">
              <div className="fillCard">
                <p>Name</p>
                <input type="text" placeholder="Ekin" />
              </div>
              <div className="fillCard">
                <p>Select Employees</p>
                <input type="text" placeholder="Select" className="searchBar" />
              </div>
            </div>
          </form>
        </div>
        <RightSidebar />
      </div>
    </>
  );
};

export default UpdateDepartment;
