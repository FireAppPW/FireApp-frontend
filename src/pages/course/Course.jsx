import React, {useEffect, useState} from "react";
import "./course.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import {useLocation, useNavigate} from 'react-router-dom';
import coursePicture from  "../../assets/images/firefighter1.jpg"
import axios from "axios";

const Course = () => {
    let location = useLocation();
    const courseId = location.pathname.split('/')[2]
    const navigate = useNavigate();
    /*
    const courseData = {
        "id": 1,
        "title": "What is fire",
        "description": "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "isPublic": false,
        "dateTimeCreated": "2022-05-30",
        "dateTimeApplicationDeadline": "2023-12-30",
        "dateTimeStart": "2022-05-30",
        "places": 1,
        "isRemote": false,
        "addressLine1": "Centrum",
        "addressLine2": "7A",
        "city": "Warsaw",
        "country": "Poland",
        "picture": "https://media.istockphoto.com/id/113494458/photo/fire-isolated-over-black-background.jpg",
        "isDeleted": false
    }

     */

    const [courseData, setCourseData] = useState([])

    useEffect(() => {

        axios
            .get('https://api.fireapp.website/course/' + courseId)
            .then((response) => {
                setCourseData(response.data);
                console.log(response.data)

            })
            .catch((error) => console.log(error))


    }, []);

    const handleDeleteClick=(e)=>{
        e.preventDefault()
        console.log(courseId)
        /*
        axios
            .delete("https://course.fireapp.website/course/"+ courseId)
            .then(res => window.location.reload())
            .catch(err => console.log(err))

         */
    }

    const handleUpdateClick=(e)=>{
        e.preventDefault()
        navigate("/courses/update/"+courseId)
    }


    return (
        <div className="wrapper">
            <LeftSidebar/>
            <div className="mid">
                <div className="top">
                    <div className="texts">
                        <h2>Courses > Course: {courseData.title}</h2>
                        <p>Information of the course</p>
                    </div>
                </div>
                <div className="course-info">
                    <div className="course-image">
                        <img src={coursePicture} alt=""/>
                    </div>
                    <div className="course-short-info">
                        <div className="short-info-card" style={{backgroundColor: "#96FF71BD"}}>
                            <div className="card-content" >
                                <p>Country</p>
                                <h2>{courseData.country}</h2>
                            </div>
                        </div>
                        <div className="short-info-card" style={{backgroundColor: "#FF7971BD"}}>
                            <div className="card-content">
                                <p>City</p>
                                <h2>{courseData.city}</h2>
                            </div>
                        </div>
                        <div className="short-info-card" style={{backgroundColor: "#FFDD71BD"}}>
                            <div className="card-content">
                                <p>Date Time start</p>
                                <h2>{courseData.dateTimeStart}</h2>
                            </div>
                        </div>
                        <div className="short-info-card" style={{backgroundColor: "rgba(4,191,138,0.49)"}}>
                            <div className="card-content">
                                <p>Date Time End</p>
                                <h2>{courseData.dateTimeApplicationDeadline}</h2>
                            </div>
                        </div>
                        <div className="short-info-card" style={{backgroundColor: "rgba(245,114,114,0.55)"}}>
                            <div className="card-content">
                                <p>Places</p>
                                <h2>{courseData.places}</h2>
                            </div>
                        </div>
                    </div>
                    <div className="course-extended-info" >
                        <h2>Course Description</h2>
                        <p>{courseData.description}</p>
                        <h2>Other info</h2>
                        <p>Address: {courseData.addressLine1 + courseData.addressLine2}</p>
                        <p>Remote: {courseData.isRemote ? "Yes" : "No"}</p>
                        <p>Date Created: {courseData.dateTimeCreated}</p>
                    </div>
                </div>
                <div className="course-options">
                    <button className="option-button" role="button" onClick={handleDeleteClick}
                            style={{backgroundImage: "linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%)"}}
                    >
                        Delete
                    </button>
                    <button className="option-button" role="button" onClick={handleUpdateClick}
                            style={{backgroundImage: "linear-gradient(45deg, #2fffe7 0%, #1996f0 51%, #2fffe7  100%)"}}
                    >
                        Modify
                    </button>
                </div>
            </div>
            <RightSidebar/>
        </div>
    );
};

export default Course;
