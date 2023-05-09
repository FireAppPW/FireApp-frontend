import React, { useState } from "react";
import "./userTable.scss";
import profilePic from "../../assets/images/firefighter1.jpg";

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
    <div className="userContainer">
      <div className="topUser">
        <h3 className="userTitle">Users</h3>
        <input
          type="text"
          placeholder="Search for users"
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="searchBar"
        />
      </div>
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
  );
};

export default Table;
