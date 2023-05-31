import React, {useState} from "react";
import "./newuser.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import {Link, useNavigate} from "react-router-dom";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import axios from "axios";

const NewUser = () => {

  const navigate = useNavigate();
  const[email,setEmail]=useState('')
  const[firstName,setFirstName]=useState('')
  const[lastName,setLastName]=useState('')
  const[birthDate,setBirthDate]=useState('')
  const[addressLine1,setAddressLine1]=useState('')
  const[addressLine2,setAddressLine2]=useState('')
  const[city,setCity]=useState('')
  const[country,setCountry]=useState('')
  const[profilePicture,setProfilePicture]=useState('')

  const handleClick=(e)=>{
    e.preventDefault()
    const user={
      email,
      firstName,
      lastName,
      birthDate,
      addressLine1,
      addressLine2,
      city,
      country,
      profilePicture
    }
    console.log(user)
    axios
        .post("https://account.fireapp.website/account", user)
        .then(navigate("/manageuser"))
        .catch(err => console.log(err))
  }

  return (
    <div className="wrapper">
      <LeftSidebar />
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
              <input type="text" value={firstName} onChange={
                (e)=> setFirstName(e.target.value)
              }/>
            </div>
            <div className="fillCard">
              <p>Surname</p>
              <input type="text" value={lastName} onChange={
                (e)=> setLastName(e.target.value)
              }/>
            </div>
            <div className="fillCard">
              <p>Date of Birth</p>
              <input type="date" value={birthDate} onChange={
                (e)=> setBirthDate(e.target.value)
              }/>
            </div>
            <div className="fillCard">
              <p>Fire Department</p>
              <div className="userSelect">
                <select name="department" id="department">
                  <option value="Any" >Any</option>
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
              <input type="file" id="images" accept="image/*" value={profilePicture}
                     onChange={
                       (e)=>setProfilePicture(e.target.value)
                     }required />
            </div>
          </div>
        </form>
      </div>
      <RightSidebar />
    </div>
  );
};

export default NewUser;
