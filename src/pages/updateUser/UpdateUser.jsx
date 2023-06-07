import React, {useEffect, useState} from "react";
import "./updateuser.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import {Link, useLocation, useNavigate} from "react-router-dom";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import axios from "axios";
import {Button} from "@mui/material";

const UpdateUser = () => {

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
  let location = useLocation();
  const userId = location.pathname.split('/')[2]
  //const [userData, setUserData] = useState([]);

  const userData =
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
    }
  ;


  useEffect(() => {
    axios
        .get('https://account.fireapp.website/account/' + userId)
        .then((response) => {
          //setUserData(response.data.data);
          console.log(response.data.data)

        })
        .catch((error) => console.log(error))

  }, []);

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
    /*
    axios
        .put("https://account.fireapp.website/account/" + userId, user)
        .then(navigate("/manageuser"))
        .catch(err => console.log(err))

     */
  }

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
            <Link to="/manageuser" className="cancel">
              <p>Cancel</p>
            </Link>
            <Button onClick={handleClick} className="save">
              <p>Update</p>
            </Button>
          </div>
        </div>
        <form action="" className="formSection">
          <div className="container">
            <div className="fillCard">
              <p>Name</p>
              <input type="text" value={firstName} onChange={
                (e)=> setFirstName(e.target.value)
              } placeholder={userData.firstName} />
            </div>
            <div className="fillCard">
              <p>Email</p>
              <input type="text" value={email} onChange={
                (e)=> setEmail(e.target.value)
              } placeholder={userData.email}/>
            </div>
            <div className="fillCard">
              <p>Surname</p>
              <input type="text" value={lastName} onChange={
                (e)=> setLastName(e.target.value)
              } placeholder={userData.lastName}/>
            </div>
            <div className="fillCard">
              <p>Date of Birth</p>
              <input type="date" value={birthDate} onChange={
                (e)=> setBirthDate(e.target.value)
              } placeholder={userData.birthDate} />
            </div>
            <div className="fillCard">
              <p>Address Line 1</p>
              <input type="text" value={addressLine1} onChange={
                (e)=> setAddressLine1(e.target.value)
              } placeholder={userData.addressLine1}/>
            </div>
            <div className="fillCard">
              <p>Address Line 2</p>
              <input type="text" value={addressLine2} onChange={
                (e)=> setAddressLine2(e.target.value)
              } placeholder={userData.addressLine2} />
            </div>
            <div className="fillCard">
              <p>City</p>
              <input type="text" value={city} onChange={
                (e)=> setCity(e.target.value)
              } placeholder={userData.city} />
            </div>
            <div className="fillCard">
              <p>Country</p>
              <input type="text" value={country} onChange={
                (e)=> setCountry(e.target.value)
              } placeholder={userData.country} />
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

export default UpdateUser;
