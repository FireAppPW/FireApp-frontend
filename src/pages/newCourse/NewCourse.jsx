import React, {useState} from "react";
import "./newcourse.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import {Link, useNavigate} from 'react-router-dom';
import axios from "axios";
import {Button} from "@mui/material";
import {CONFIG} from "../../constants";

const NewCourse = () => {

    const navigate = useNavigate();
    const[title,setTitle]=useState('')
    const[description,setDescription]=useState('')
    const[addressLine1,setAddressLine1]=useState('')
    const[addressLine2,setAddressLine2]=useState('')
    const[country,setCountry]=useState('')
    const[city,setCity]=useState('')
    const[places,setPlaces]=useState('')
    const[isPublic,setIsPublic]=useState(true)
    const[dateTimeApplicationDeadline,setDateTimeApplicationDeadline]=useState('')
    const[dateTimeStart,setDateTimeStart]=useState('')
    const[picture,setPicture]=useState('')

    const handleClick=(e)=>{
        e.preventDefault()
        const course = {
            "id": 0,
            title,
            description,
            isPublic,
            "dateTimeCreated": new Date().toJSON(),
            "dateTimeApplicationDeadline": new Date(dateTimeApplicationDeadline).toJSON(),
            "dateTimeStart": new Date(dateTimeStart).toJSON(),
            places,
            "isRemote": true,
            addressLine1,
            addressLine2,
            city,
            country,
            picture,
            "isDeleted": true
        }
        console.log(course)
        axios
            .post("https://course.fireapp.website/course", course, CONFIG)
            .then(navigate("/courses"))
            .catch(err => console.log(err))


    }


    return (
        <div className="wrapper">
            <LeftSidebar/>
            <div className="mid">
                <div className="top">
                    <div className="texts">
                        <h2>Courses > Create Course</h2>
                        <p>Add a new Course</p>
                    </div>
                </div>
                <div className="options">
                    <h2>Create New Course</h2>
                    <div className="right">
                        <Link to="/courses" className="cancel">
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
                            <p>Title</p>
                            <input type="text" value={title} onChange={
                                (e)=> setTitle(e.target.value)
                            }/>
                        </div>
                        <div className="fillCard">
                            <p>Description</p>
                            <input type="text" value={description} onChange={
                                (e)=> setDescription(e.target.value)
                            }/>
                        </div>
                        <div className="fillCard">
                            <p>Address Line 1</p>
                            <input type="text" value={addressLine1} onChange={
                                (e)=>setAddressLine1(e.target.value)
                            }/>
                        </div>
                        <div className="fillCard">
                            <p>Address Line 2</p>
                            <input type="text" value={addressLine2} onChange={
                                (e)=> setAddressLine2(e.target.value)
                            }/>
                        </div>
                        <div className="fillCard">
                            <p>Country</p>
                            <input type="text" value={country} onChange={
                                (e)=>setCountry(e.target.value)
                            }/>
                        </div>
                        <div className="fillCard">
                            <p>City</p>
                            <input type="text" value={city} onChange={
                                (e)=>setCity(e.target.value)
                            }/>
                        </div>
                        <div className="fillCard">
                            <p>Places</p>
                            <input type="number" value={places} onChange={
                                (e)=>setPlaces(e.target.value)
                            }/>
                        </div>
                        <div className="fillCard">
                            <p>Public/private</p>
                            <div className="courseSelect">
                                <select name="department" id="department" onChange={
                                    (e) => {
                                        if (e.target.value === "false"){
                                            setIsPublic(false)
                                        }else{
                                            setIsPublic(true)
                                        }

                                    }
                                }>
                                    <option value="true">Public</option>
                                    <option value="false">Private</option>
                                </select>
                            </div>
                        </div>
                        <div className="fillCard">
                            <p>Start Date</p>
                            <input type="date" value={dateTimeStart} onChange={
                                (e)=> setDateTimeStart(e.target.value)
                            } required/>
                        </div>
                        <div className="fillCard">
                            <p>Application Deadline</p>
                            <input type="date" value={dateTimeApplicationDeadline} onChange={
                                (e)=> setDateTimeApplicationDeadline(e.target.value)
                            } required/>
                        </div>
                        <div className="userPhoto">
                            <p>Photo</p>
                            <input type="file" id="images" accept="image/*" value={picture}
                                   onChange={
                                       (e)=>setPicture(e.target.value)
                                   } required/>
                        </div>
                    </div>
                </form>
            </div>
            <RightSidebar/>
        </div>
    );
};

export default NewCourse;
