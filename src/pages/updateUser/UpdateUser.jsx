import React, {useEffect, useState} from "react";
import "./updateuser.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import {Link, useLocation, useNavigate} from "react-router-dom";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import {Button} from "@mui/material";
import {PROFILE_DEPARTMENT_ID} from "../../constants";
import {getUserById, putUser} from "../../services/UserService";
import {getAllDepartments} from "../../services/DepartmentService";

const UpdateUser = () => {

  const navigate = useNavigate();
  const[email,setEmail]=useState('')
  const[firstName,setFirstName]=useState('')
  const[lastName,setLastName]=useState('')
  const[birthDate,setBirthDate]=useState('')
  const[fireDepartmentId,setFireDepartmentId]=useState('')
  const[addressLine1,setAddressLine1]=useState('')
  const[addressLine2,setAddressLine2]=useState('')
  const[city,setCity]=useState('')
  const[country,setCountry]=useState('')
  const[role,setRole]=useState('')
  const[departmentData, setDepartmentData] = useState([]);
  let location = useLocation();
  const userId = location.pathname.split('/')[3]

  useEffect(() => {
    getAllDepartments().then((response) => {
      setDepartmentData(response.data.data);
    })
    getUserById(PROFILE_DEPARTMENT_ID ,userId)
        .then((user) => {
          console.log(user)
              setEmail(user.email)
              setFirstName(user.firstName)
              setLastName(user.lastName)
              setBirthDate(user.birthDate)
              setFireDepartmentId(user.fireDepartmentId)
              setAddressLine1(user.addressLine1)
              setAddressLine2(user.addressLine2)
              setCity(user.city)
              setCountry(user.country)
              setRole(user.role.id)
        })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClick=(e)=>{
    e.preventDefault()
    const user=
    {
      "activationCode": "123456",
      "addressLine1": addressLine1,
      "addressLine2": addressLine2,
      "birthDate": birthDate,
      "city": city,
      "country": country,
      "email": email,
      "fireDepartmentId": parseInt(fireDepartmentId),
      "firstName": firstName,
      "lastName": lastName,
      "isActivated": true,
      "isDeleted": false,
      "position": "CEO",
      "shift": 1,
      "role": {
        "id": parseInt(role)
      },
      "profilePicture" : "https://lh3.googleusercontent.com/a/AAcHTtcwDSOi9Na0rMvzaNEj4NCA40TtTysn7-rls15Z=s96-c"
    }
    putUser(PROFILE_DEPARTMENT_ID,userId, user).then(
        navigate("/manageuser")
    )


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
              }/>
            </div>
            <div className="fillCard">
              <p>Email</p>
              <input type="text" value={email} onChange={
                (e)=> setEmail(e.target.value)
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
              <p>Address Line 1</p>
              <input type="text" value={addressLine1} onChange={
                (e)=> setAddressLine1(e.target.value)
              }/>
            </div>
            <div className="fillCard">
              <p>Address Line 2</p>
              <input type="text" value={addressLine2} onChange={
                (e)=> setAddressLine2(e.target.value)
              }/>
            </div>
            <div className="fillCard">
              <p>City</p>
              <input type="text" value={city} onChange={
                (e)=> setCity(e.target.value)
              }/>
            </div>
            <div className="fillCard">
              <p>Country</p>
              <input type="text" value={country} onChange={
                (e)=> setCountry(e.target.value)
              }/>
            </div>
            <div className="fillCard">
              <p>Fire Department</p>
              <div className="userSelect">
                <select value={fireDepartmentId} name="department" id="department" onChange={
                  (e)=> setFireDepartmentId(e.target.value)
                }>
                  {departmentData.map((department, index) => {
                    return (<option key={index} value={department.id} >{"Name: " +department.name + ", Id:" + department.id}</option>)
                  })}

                </select>
              </div>
            </div>
            <div className="fillCard">
              <p>Role</p>
              <div className="userSelect">
                <select name="role" id="role" onChange={
                  (e)=> setRole(e.target.value)
                } value={role.id}>
                  <option value="3">User</option>
                  <option value="1">SysAdmin</option>
                  <option value="2">FireAdmin</option>
                  <option value="4">Commandant</option>
                </select>
              </div>
            </div>
          </div>
        </form>
      </div>
      <RightSidebar />
    </div>
  );
};

export default UpdateUser;
