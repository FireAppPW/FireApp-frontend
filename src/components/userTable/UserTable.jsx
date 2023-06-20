import React, {useEffect, useState} from "react";
import "./userTable.scss";
import AddIcon from "@mui/icons-material/Add";
import {Link, useLocation} from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {PROFILE_ROLE} from "../../constants";
import {getAllUsers, deleteUserById} from "../../services/UserService";

const CreateUser = Link
const UpdateUser = Link
const User = Link

const Table = () => {

  const [searchQuery, setSearchQuery] = useState("");
  let location = useLocation();
  const departmentId = location.pathname.split('/')[2]
  const [userData, setUserData] = useState([]);

  useEffect(
      () => {getAllUsers().then((users) => {setUserData(users)})}
      // eslint-disable-next-line react-hooks/exhaustive-deps
    , []);

  const filteredUsers = userData.filter((user) =>
  {
    if (departmentId !== undefined){
      return  user.fireDepartmentId.toString().toLowerCase().includes(departmentId) &&
              user.firstName.toLowerCase().includes(searchQuery.toLowerCase());
    }else {
      return user.firstName.toLowerCase().includes(searchQuery.toLowerCase());
    }

  });

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };


  const handleDeleteClick=(e, id, departmentId)=>{
    e.preventDefault()
    console.log("deleting")
    deleteUserById(departmentId,id).then(() => window.location.reload())

  }

  return (
      <div className="userWrapper">
        <div className="userTotal">
          <div className="uT-container">
            <h2>Total Users: {filteredUsers.length}</h2>
            <div className="userOptions">
              <div className="userSearchContainer">
                <input
                    type="text"
                    placeholder="Search for users"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    className="searchBar"
                />
                <SearchIcon className="searchIcon"/>
              </div>
              <CreateUser to="/newUser" className="userAdd" style={
                ["User", "Commandant"].includes(PROFILE_ROLE) ?
                    {display: "none"}
                    :
                    null
              }>
                <AddIcon className="icon"/>
              </CreateUser>
            </div>
          </div>
        </div>
        <div className="userContainer">
          <table className="userTable">
            <thead>
            <tr className="userRow">
              <th className="userTh">Name</th>
              <th className="userTh">ID</th>
              <th className="userTh">Fire Department</th>
              <th className="userTh">Email</th>
              <th className="userTh">Role</th>
              <th className="userTh"
                  style={
                    ["User", "Commandant"].includes(PROFILE_ROLE) ?
                        {display: "none"}
                        :
                        null
                  } >Actions</th>
            </tr>
            </thead>
            <tbody>
            {filteredUsers.map((user) => {
              return (
                  <tr className="userRow" key={user.id}>
                    <User to={
                      PROFILE_ROLE !== "User" ?
                        "/manageuser/" + user.id
                        :
                        null
                    } className="userName">
                      <img src={user.profilePicture} alt="" className="userImg" />
                      <span>{user.firstName}</span>
                    </User>
                    <td className="widgetLgDate">{user.id}</td>
                    <td className="widgetLgAmount">{user.fireDepartmentId}</td>
                    <td className="widgetLgAmount">{user.email}</td>
                    <td className="widgetLgAmount">{user.role.name}</td>
                    <td className="widgetLgStatus"
                        style={
                          ["User", "Commandant"].includes(PROFILE_ROLE) ?
                              {display: "none"}
                              :
                              null
                        }>
                      <div className="borderIcon" style={{outlineColor: "#F65B4F"}} onClick={
                        (e) => {
                          handleDeleteClick(e, user.id, user.fireDepartmentId)
                        }}>
                        <DeleteForeverIcon className="deleteIcon"/>
                      </div>
                      <UpdateUser to={"/manageuser/update/" + user.id} className="borderIcon" style={{outlineColor: "#53daf1"}}>
                        <EditIcon className="editIcon"/>
                      </UpdateUser>
                    </td>
                  </tr>
              );
            })}
            </tbody>
          </table>
        </div>
      </div>

  );
};

export default Table;
