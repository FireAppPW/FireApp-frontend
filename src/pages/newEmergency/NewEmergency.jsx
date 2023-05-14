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
                    </div>
                </form>
            </div>
            <RightSidebar/>
        </div>
    );
};

export default NewEmergency;