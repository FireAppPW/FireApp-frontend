import React from "react";
import "./newcourse.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import {Link} from 'react-router-dom';

const NewCourse = () => {
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
                        <Link to="/courses" className="save">
                            <p>Save</p>
                        </Link>
                    </div>

                </div>
                <form action="" className="formSection">
                    <div className="container">
                        <div className="fillCard">
                            <p>Name</p>
                            <input type="text"/>
                        </div>
                    </div>
                </form>
            </div>
            <RightSidebar/>
        </div>
    );
};

export default NewCourse;
