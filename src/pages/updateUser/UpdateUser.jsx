import React from "react";
import "./updateuser.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import { Link } from "react-router-dom";
import RightSidebar from "../../components/rightSidebar/RightSidebar";

const UpdateUser = () => {
  return (
    <div className="wrapper">
      <LeftSidebar />
      <div className="mid">
        <div className="top">
          <div className="texts">
            <h2>User Management > Update User</h2>
            <p>Update the User</p>
          </div>
        </div>
        <div className="options">
          <h2>Update the User</h2>
          <div className="right">
            <Link to="/manageuser/:id" className="cancel">
              <p>Cancel</p>
            </Link>
            <Link to="/manageuser/:id" className="save">
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
              <p>Surname</p>
              <input type="text" placeholder="Kar" />
            </div>
            <div className="fillCard">
              <p>Date of Birth</p>
              <input type="date" />
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
              <input type="file" id="images" accept="image/*" required />
            </div>
          </div>
        </form>
      </div>
      <RightSidebar />
    </div>
  );
};

export default UpdateUser;
