import React, {useEffect, useState} from "react";
import "./userTable.scss";
import profilePic from "../../assets/images/firefighter1.jpg";
import AddIcon from "@mui/icons-material/Add";
import {Link} from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search";
import axios from "axios";

const CreateUser = Link

const Table = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const userData = [
    {
      id: 0,
      email: "string",
      firstName: "string",
      lastName: "string",
      birthDate: "2023-05-31",
      fireDepartmentId: 0,
      position: "string",
      role: {
        "id": 0,
        "name": "string",
        "accounts": [
          "string"
        ]
      },
      addressLine1: "string",
      addressLine2: "string",
      city: "string",
      country: "string",
      profilePicture: "string",
    },
  ];

  //const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
        .get('https://account.fireapp.website/account')
        .then((response) => {
          //setUserData(response.data.data);
          console.log(response.data.data)

        })
        .catch((error) => console.log(error))

  }, []);

  const filteredUsers = userData.filter((user) => {
    return user.firstName.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleClick=(e, id)=>{
    e.preventDefault()
    console.log(id)
    /*
    axios
        .delete("https://account.fireapp.website/account/"+ id.toString())
        .then(res => window.location.reload())
        .catch(err => console.log(err))

     */
  }

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
                      <img src={user.profilePicture} alt="" className="userImg" />
                      <span>{user.firstName}</span>
                    </td>
                    <td className="widgetLgDate">{user.id}</td>
                    <td className="widgetLgAmount">{user.email}</td>
                    <td className="widgetLgStatus" style={{cursor: "pointer"}}
                        onClick={
                      (e) => {
                        handleClick(e, user.id)
                      }}
                    >Delete</td>
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
