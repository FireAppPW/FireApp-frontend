import React, {useEffect, useState} from "react";
import "./userTable.scss";
import AddIcon from "@mui/icons-material/Add";
import {Link, useLocation, useNavigate} from 'react-router-dom';
import SearchIcon from "@mui/icons-material/Search";
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import person1 from "../../assets/images/person1.jpg";
import person2 from "../../assets/images/person2.jpg";
import person3 from "../../assets/images/person3.jpg";
import axios from "axios";
import Cookies from "js-cookie";

const CreateUser = Link
const UpdateUser = Link
const User = Link

const Table = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  let location = useLocation();
  const departmentId = location.pathname.split('/')[2]
  const profileImages = [person1, person2, person3]

  const profileUser = JSON.parse(localStorage.getItem("user"))
  const profileRole = profileUser.roles
  const profileDepartmentId = profileUser.departmentId

  const [userData, setUserData] = useState([]);

  const token = JSON.parse(Cookies.get('token')).accessToken;
  //const token = "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxLGFuZWoudm92Y2FrQGdtYWlsLmNvbSIsInJvbGVzIjoiU3lzQWRtaW4iLCJkZXBhcnRtZW50SWQiOjIsImlzcyI6IkZpcmVBcHAiLCJpYXQiOjE2ODY5MTgzMzEsImV4cCI6MTY4NzAwNDczMX0.C9BHspB4a5061eKTBiJf-2twx752LqX9xewyldLQRPwg_5xjkdBCnxeNrRMDFLp64D0jISx8VWjB-iq8nVeZPw"
  const config = {
    headers: {
      Authorization : `Bearer ${token}`
    }
  }

  useEffect(
      () => {

        if (profileRole === "SysAdmin"){
          axios
              .get(`https://account.fireapp.website/account`, config)
              .then((response) => {
                setUserData(response.data);
              })
              .catch((error) => console.log(error))
        }else if (profileRole === "FireAdmin"){
            axios
                .get(`https://account.fireapp.website/account/${profileDepartmentId}`, config)
                .then((response) => {
                  setUserData(response.data);
                })
                .catch((error) => console.log(error))
          }else{
          navigate("/error")
        }

    }, []
  );

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
    axios
        .delete(`https://account.fireapp.website/account/${profileDepartmentId}/${id}`, config)
        .then(() => window.location.reload())
        .catch(err => console.log(err))

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
                profileRole === ("User" || "Commandant") ?
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
                    profileRole === ("User" || "Commandant ") ?
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
                      profileRole !== "User" ?
                        "/manageuser/" + user.id
                        :
                        null
                    } className="userName">
                      <img src={profileImages[Math.floor(Math.random() * profileImages.length)]} alt="" className="userImg" />
                      <span>{user.firstName}</span>
                    </User>
                    <td className="widgetLgDate">{user.id}</td>
                    <td className="widgetLgAmount">{user.fireDepartmentId}</td>
                    <td className="widgetLgAmount">{user.email}</td>
                    <td className="widgetLgAmount">{user.role.name}</td>
                    <td className="widgetLgStatus"
                        style={
                          profileRole === ("User" || "Commandant") ?
                              {display: "none"}
                              :
                              null
                        }>
                      <div className="borderIcon" style={{outlineColor: "#F65B4F"}} onClick={
                        (e) => {
                          handleDeleteClick(e, user.id)
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
