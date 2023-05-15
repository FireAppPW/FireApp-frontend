import React from "react";
import "./newuser.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import {Link} from "react-router-dom";
import RightSidebar from "../../components/rightSidebar/RightSidebar";


const NewUser = () => {
  return (
      <div className="wrapper">
          <LeftSidebar/>
          <div className="mid">
              <div className="top">
                  <div className="texts">
                      <h2>User Management > Create User</h2>
                      <p>Add a new User</p>
                  </div>
              </div>
              <div className="options">
                  <h2>Create New User</h2>
                  <div className="right">
                      <Link to="/manageuser" className="cancel">
                          <p>Cancel</p>
                      </Link>
                      <Link to="/manageuser" className="save">
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
                          <p>Surname</p>
                          <input type="text"/>
                      </div>
                      <div className="fillCard">
                          <p>Date of Birth</p>
                          <input type="text"/>
                      </div>
                      <div className="fillCard">
                          <p>Fire Department</p>
                          <div className="userSelect">
                              <select name="department" id="department">
                                  <option value="Any">Any</option>
                              </select>
                          </div>
                      </div>
                      <div className="fillCard">
                          <p>Role</p>
                          <div className="userSelect">
                              <select name="role" id="role">
                                  <option value="Any">Any</option>
                              </select>
                          </div>
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

export default NewUser;
