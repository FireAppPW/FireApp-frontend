import React, {useEffect, useState} from "react";
import "./userTable.scss";
import AddIcon from "@mui/icons-material/Add";
import {Link, useLocation} from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import person1 from "../../assets/images/person1.jpg";
import person2 from "../../assets/images/person2.jpg";
import person3 from "../../assets/images/person3.jpg";
import axios, {Axios} from "axios";

const CreateUser = Link
const UpdateUser = Link

const Table = () => {
  const [searchQuery, setSearchQuery] = useState("");
  let location = useLocation();
  const departmentId = location.pathname.split('/')[2]
  const profileImages = [person1, person2, person3]


  const userData = [
    {
      id: 0,
      email: "string",
      firstName: "test1",
      lastName: "string",
      birthDate: "2023-05-31",
      fireDepartmentId: 2,
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
    {
      id: 1,
      email: "string",
      firstName: "tets2",
      lastName: "string",
      birthDate: "2023-05-31",
      fireDepartmentId: 2,
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
    {
      id: 2,
      email: "string",
      firstName: "test3",
      lastName: "string",
      birthDate: "2023-05-31",
      fireDepartmentId: 3,
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

  const handleDeleteClick=(e, id)=>{
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
              <th className="userTh">Fire Department</th>
              <th className="userTh">Role</th>
              <th className="userTh">Actions</th>
            </tr>
            </thead>
            <tbody>
            {filteredUsers.map((user, index) => {
              return (
                  <tr className="userRow" key={index}>
                    <td className="userName">
                      <img src={profileImages[Math.floor(Math.random() * profileImages.length)]} alt="" className="userImg" />
                      <span>{user.firstName}</span>
                    </td>
                    <td className="widgetLgDate">{user.id}</td>
                    <td className="widgetLgAmount">{user.fireDepartmentId}</td>
                    <td className="widgetLgAmount">{user.email}</td>
                    <td className="widgetLgStatus">
                      <div className="borderIcon" style={{outlineColor: "#F65B4F"}} onClick={
                        (e) => {
                          handleDeleteClick(e, user.id)
                        }}>
                        <DeleteForeverIcon className="deleteIcon"/>
                      </div>
                      <UpdateUser to={"/manageuser/" + user.id} className="borderIcon" style={{outlineColor: "#53daf1"}}>
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
