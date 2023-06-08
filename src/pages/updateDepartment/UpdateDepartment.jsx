import React, {useEffect, useState} from "react";
import "./updatedepartment.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import {Link, useNavigate, useLocation} from "react-router-dom";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import axios from "axios";
import {Button} from "@mui/material";

const UpdateDepartment = () => {

  const navigate = useNavigate();
  const[name,setName]=useState('')
  const[addressLine1,setAddressLine1]=useState('')
  const[addressLine2,setAddressLine2]=useState('')
  const[city,setCity]=useState('')
  const[country,setCountry]=useState('')
  const[phone,setPhone]=useState('')
  const[email,setEmail]=useState('')
  const[picture,setPicture]=useState('')
  let location = useLocation();
  const departmentId = location.pathname.split('/')[3]
  const [departmentData, setDepartmentData] = useState([]);

  /*
  const departmentData =
      {
        id: departmentId,
        addressLine1: "string",
        addressLine2: "string",
        city: "string",
        country: "string",
        email: "alfa@warsawfire@gmail.com",
        profilePicture: "string",
        name: "Alfa",
        phone: "112"
      }

   */

  const handleClick=(e)=>{
    e.preventDefault()
    const department={
      addressLine1,
      addressLine2,
      city,
      country,
      email,
      picture,
      name,
      phone
    }
    console.log(department)
    /*
    axios
        .put("https://department.fireapp.website/department/" + departmentId, department)
        .then(navigate("/managedepartment"))
        .catch(err => console.log(err))

     */
  }

  useEffect(() => {
    axios
        .get('https://department.fireapp.website/department/' + departmentId)
        .then((response) => {
          setDepartmentData(response.data.data);
          console.log(response.data.data)

        })
        .catch((error) => console.log(error))

  }, []);

  useEffect(() => {

    setName(departmentData.name)
    setAddressLine1(departmentData.addressLine1)
    setAddressLine2(departmentData.addressLine2)
    setCity(departmentData.city)
    setCountry(departmentData.country)
    setPhone(departmentData.phone)
    setEmail(departmentData.email)
  })

  return (
    <>
      <div className="wrapper">
        <LeftSidebar />
        <div className="mid">
          <div className="top">
            <div className="texts">
              <h2>User Management > Update Department</h2>
              <p>Update the Department</p>
            </div>
          </div>
          <div className="options">
            <h2>Update the Department</h2>
            <div className="right">
              <Link to="/managedepartment" className="cancel">
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
                <input type="text" value={name} onChange={
                  (e) => setName(e.target.value)
                }/>
              </div>
              <div className="fillCard">
                <p>Address Line 1</p>
                <input type="text" value={addressLine1} onChange={
                  (e) => setAddressLine1(e.target.value)
                }/>
              </div>
              <div className="fillCard">
                <p>Address Line 2</p>
                <input type="text" value={addressLine2} onChange={
                  (e) => setAddressLine2(e.target.value)
                }/>
              </div>
              <div className="fillCard">
                <p>City</p>
                <input type="text" value={city} onChange={
                  (e)=>setCity(e.target.value)
                }/>
              </div>
              <div className="fillCard">
                <p>Country</p>
                <input type="text" value={country} onChange={
                  (e) => setCountry(e.target.value)
                }/>
              </div>
              <div className="fillCard">
                <p>Phone</p>
                <input type="number" value={phone} onChange={
                  (e)=>setPhone(e.target.value)
                }/>
              </div>
              <div className="fillCard">
                <p>Email</p>
                <input type="text" value={email} onChange={
                  (e)=>setEmail(e.target.value)
                }/>
              </div>
              <div className="userPhoto">
                <p>Photo</p>
                <input type="file" id="images" accept="image/*" value={picture} onChange={
                  (e)=>setPicture(e.target.value)
                } required/>
              </div>
            </div>
          </form>
        </div>
        <RightSidebar />
      </div>
    </>
  );
};

export default UpdateDepartment;
