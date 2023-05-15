import React, { useState } from "react";
import "./userTable.scss";
import profilePic from "../../assets/images/firefighter1.jpg";
import AddIcon from "@mui/icons-material/Add";
import {Link} from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search";

const CreateUser = Link

const Table = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const users = [
    {
      name: "Ekin Kar",
      id: "1234",
      role: "Admin",
    },
    {
      name: "John Marcus",
      id: "5678",
      role: "User",
    },
    {
      name: "Anej Doer",
      id: "9101",
      role: "Admin",
    },
  ];

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
      <div className="userWrapper">
        <div className="userTotal">
          <div className="uT-container">
            <h2>Total Users</h2>
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
              <CreateUser to="/newUser" className="userAdd">
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
              <th className="userTh">Role</th>
              <th className="userTh">Actions</th>
            </tr>
            </thead>
            <tbody>
            {filteredUsers.map((user, index) => {
              return (
                  <tr className="userRow" key={index}>
                    <td className="userName">
                      <img src={profilePic} alt="" className="userImg" />
                      <span>{user.name}</span>
                    </td>
                    <td className="widgetLgDate">{user.id}</td>
                    <td className="widgetLgAmount">{user.role}</td>
                    <td className="widgetLgStatus">Delete</td>
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
