import React, {useEffect, useState} from "react";
import "./newemergency.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import {Link, useNavigate} from 'react-router-dom';
import {Button} from "@mui/material";
import {PROFILE_USER_ID} from "../../constants";
import {postEmergency} from "../../services/EmergencyService";
import {getAllDepartments} from "../../services/DepartmentService";

const NewEmergency = () => {

    const navigate = useNavigate();
    const[fireDepartmentId,setFireDepartmentId]=useState(null)
    const[fireDepartmentName,setFireDepartmentName]=useState('')
    const[dangerousLevel,setDangerousLevel]=useState(null)
    const[addressLine1,setAddressLine1]=useState('')
    const[addressLine2,setAddressLine2]=useState('')
    const[city,setCity]=useState('')
    const[country,setCountry]=useState('')
    const[description,setDescription]=useState('')
    const[departmentData, setDepartmentData] = useState([]);

    useEffect(() => {
        getAllDepartments().then((response) => setDepartmentData(response))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //
    const handleClick=(e)=>{
        e.preventDefault()
        const emergency={
            fireDepartmentId,
            fireDepartmentName,
            "classification": {
                "id": 1,
                "classField": "1",
                "classDescription": "fire"
            },
            "authorId": parseInt(PROFILE_USER_ID),
            "dateTimeCreated": new Date().toJSON(),
            dangerousLevel,
            addressLine1,
            addressLine2,
            city,
            country,
            description
        }
        console.log(emergency)
        postEmergency(emergency).then(navigate("/emergencies"))

    }

    return (
        <div className="wrapper">
            <LeftSidebar/>
            <div className="mid">
                <div className="top">
                    <div className="texts">
                        <h2>Emergencies > Create Emergency</h2>
                        <p>Add a new Emergency</p>
                    </div>
                </div>
                <div className="options">
                    <h2>Create New Emergency</h2>
                    <div className="right">
                        <Link to="/emergencies" className="cancel">
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
                            <p>Fire Department</p>
                            <div className="userSelect">
                                <select name="department" id="department" onChange={
                                    (e)=> {
                                        setFireDepartmentId(parseInt(e.target.value.split(":")[0]))
                                        setFireDepartmentName(e.target.value.split(":")[1])
                                    }
                                }>
                                    <option value="None" >None</option>
                                    {departmentData.map((department, index) => {
                                        return (<option key={index} value={department.id + ":" + department.name} >{"Name: " +department.name + ", Id:" + department.id}</option>)
                                    })}

                                </select>
                            </div>
                        </div>
                        <div className="fillCard">
                            <p>Dangerous Level</p>
                            <input type="number" value={dangerousLevel} onChange={
                                (e)=> setDangerousLevel(parseInt(e.target.value))
                            } required/>
                        </div>
                        <div className="fillCard">
                            <p>Address Line 1</p>
                            <input type="text" value={addressLine1} onChange={
                                (e)=> setAddressLine1(e.target.value)
                            } maxLength="30" required/>
                        </div>
                        <div className="fillCard">
                            <p>Address Line 2 (Optional)</p>
                            <input type="text" value={addressLine2} onChange={
                                (e)=> setAddressLine2(e.target.value)
                            } maxLength="30"/>
                        </div>
                        <div className="fillCard">
                            <p>City</p>
                            <input type="text" value={city} onChange={
                                (e)=> setCity(e.target.value)
                            } maxLength="30" required/>
                        </div>
                        <div className="fillCard">
                            <p>Country</p>
                            <input type="text" value={country} onChange={
                                (e)=> setCountry(e.target.value)
                            } maxLength="30" required/>
                        </div>
                        <div className="fillCard">
                            <p>Description</p>
                            <input type="text" value={description} onChange={
                                (e)=> setDescription(e.target.value)
                            } maxLength="30" required/>
                        </div>
                        <div className="fillCard">
                            <p>Notify: </p>
                            <div className="userSelect">
                                <select name="department" id="department">
                                    <option value="All">All</option>
                                    <option value="Specific">Specific</option>
                                    <option value="Specific">Users</option>
                                    <option value="Specific">External Department</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <RightSidebar/>
        </div>
    );
};

export default NewEmergency;