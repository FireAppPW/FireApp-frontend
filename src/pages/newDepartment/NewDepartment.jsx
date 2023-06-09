import React, {useState} from "react";
import "./newdepartment.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import {Link, useNavigate} from "react-router-dom";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import {Button} from "@mui/material";
import {postDepartment} from "../../services/DepartmentService";

const NewDepartment = () => {

    const navigate = useNavigate();
    const[name,setName]=useState('')
    const[addressLine1,setAddressLine1]=useState('')
    const[city,setCity]=useState('')
    const[country,setCountry]=useState('')
    const[phone,setPhone]=useState('')
    const[email,setEmail]=useState('')

    const handleClick=(e)=>{
        e.preventDefault()
        const department={name,addressLine1, city, country, phone, email}
        console.log(department)
        postDepartment(department).then(navigate("/managedepartment"))
    }


  return (
      <div className="wrapper">
          <LeftSidebar/>
          <div className="mid">
              <div className="top">
                  <div className="texts">
                      <h2>Department Management > Create Department</h2>
                      <p>Add a new Department</p>
                  </div>
              </div>
              <div className="options">
                  <h2>Create New Department</h2>
                  <div className="right">
                      <Link to="/managedepartment" className="cancel">
                          <p>Cancel</p>
                      </Link>
                      <Button onClick={handleClick} className="save">
                          <p>Save</p>
                      </Button>
                  </div>

              </div>
              <form action="" className="formSection">
                  <div className="container">
                      <div className="fillCard">
                          <p>Name</p>
                          <input type="text" value={name} onChange={
                              (e) => setName(e.target.value)
                          } maxLength="30" required/>
                      </div>
                      <div className="fillCard">
                          <p>Address</p>
                          <input type="text" value={addressLine1} onChange={
                              (e) => setAddressLine1(e.target.value)
                          } maxLength="30" required/>
                      </div>
                      <div className="fillCard">
                          <p>City</p>
                          <input type="text" value={city} onChange={
                              (e)=>setCity(e.target.value)
                          }  maxLength="30" required/>
                      </div>
                      <div className="fillCard">
                          <p>Country</p>
                          <input type="text" value={country} onChange={
                              (e) => setCountry(e.target.value)
                          } maxLength="30" required/>
                      </div>
                      <div className="fillCard">
                          <p>Phone</p>
                          <input type="number" value={phone} onChange={
                              (e)=>setPhone(e.target.value)
                          } required/>
                      </div>
                      <div className="fillCard">
                          <p>Email</p>
                          <input type="email" value={email} onChange={
                              (e)=>setEmail(e.target.value)
                          }/>
                      </div>
                  </div>
              </form>

          </div>
          <RightSidebar/>
      </div>
  );
};

export default NewDepartment;
