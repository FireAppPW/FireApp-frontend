import React from "react";
import "./newdepartment.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import {Link} from "react-router-dom";
import RightSidebar from "../../components/rightSidebar/RightSidebar";

const NewDepartment = () => {
  return (
      <div className="wrapper">
          <LeftSidebar/>
          <div className="mid">
              <div className="top">
                  <div className="texts">
                      <h2>Department Management > Create Department</h2>
                      <p>Add a new Department</p>
                  </div>
              </div>
              <div className="options">
                  <h2>Create New Department</h2>
                  <div className="right">
                      <Link to="/managedepartment" className="cancel">
                          <p>Cancel</p>
                      </Link>
                      <Link to="/managedepartment" className="save">
                          <p>Save</p>
                      </Link>
                  </div>

              </div>
              <form action="" className="formSection">
                  <div className="container">
                      <div className="fillCard">
                          <p>Name</p>
                          <input type="text"/>
                      </div>
                      <div className="fillCard">
                          <p>Address</p>
                          <input type="text"/>
                      </div>
                      <div className="fillCard">
                          <p>Country</p>
                          <input type="text"/>
                      </div>
                      <div className="fillCard">
                          <p>Email</p>
                          <input type="text"/>
                      </div>
                      <div className="fillCard">
                          <p>Phone</p>
                          <input type="number"/>
                      </div>
                      <div className="userPhoto">
                          <p>Photo</p>
                          <input type="file" id="images" accept="image/*" required/>
                      </div>
                  </div>
              </form>

          </div>
          <RightSidebar/>
      </div>
  );
};

export default NewDepartment;
