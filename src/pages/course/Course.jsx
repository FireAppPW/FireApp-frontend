import React from "react";
import "./course.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import {Link} from 'react-router-dom';

const Course = () => {
    return (
        <div className="wrapper">
            <LeftSidebar/>
            <div className="mid">
                <div className="top">
                    <div className="texts">
                        <h2>Courses</h2>
                        <p>List of all courses</p>
                    </div>
                </div>
            </div>
            <RightSidebar/>
        </div>
    );
};

export default Course;
