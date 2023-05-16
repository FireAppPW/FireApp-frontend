import React from "react";
import "./newnotification.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import {Link} from 'react-router-dom';

const NewNotification = () => {
    return (
        <div className="wrapper">
            <LeftSidebar/>
            <div className="mid">
                <div className="top">
                    <div className="texts">
                        <h2>Notifications > Create Notification</h2>
                        <p>Add a new Notification</p>
                    </div>
                </div>
                <div className="options">
                    <h2>Create New Notification</h2>
                    <div className="right">
                        <Link to="/emergencies" className="cancel">
                            <p>Cancel</p>
                        </Link>
                        <Link to="/emergencies" className="save">
                            <p>Save</p>
                        </Link>
                    </div>

                </div>
                <form action="" className="formSection">
                    <div className="container">
                        <div className="fillCard">
                            <p>User</p>
                            <input type="text"/>
                        </div>
                        <div className="fillCard">
                            <p>Select Others</p>
                            <input type="text"/>
                        </div>
                        <div className="fillCard">
                            <p>Content</p>
                            <textarea cols="50" rows="10"/>
                        </div>
                    </div>
                </form>
            </div>
            <RightSidebar/>
        </div>
    );
};

export default NewNotification;