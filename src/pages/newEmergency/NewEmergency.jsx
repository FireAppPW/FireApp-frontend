import React from "react";
import "./newemergency.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import {Link} from 'react-router-dom';

const NewEmergency = () => {
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
                        <Link to="/emergencies" className="save">
                            <p>Save</p>
                        </Link>
                    </div>

                </div>
                <form action="" className="formSection">
                    <div className="container">
                        <div className="fillCard">
                            <p>Title</p>
                            <input type="text"/>
                        </div>
                        <div className="fillCard">
                            <p>Description</p>
                            <input type="text"/>
                        </div>
                        <div className="fillCard">
                            <p>Importance</p>
                            <input type="text"/>
                        </div>
                        <div className="fillCard">
                            <p>Additional info</p>
                            <input type="text"/>
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