import React from "react";
import "./emergencies.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar.jsx";
import RightSidebar from "../../components/rightSidebar/RightSidebar";

const Emergencies = () => {
  return (
    <div className="wrapper">
      <LeftSidebar />
      <div className="mid">
        <div className="top">
          <div className="texts">
            <h2>Emergencies</h2>
            <p>List of all emergencies</p>
          </div>
          <div className="create">
            <p>Create Emergency</p>
          </div>
        </div>
        <div className="smallCards">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
        <div className="table"></div>
      </div>
      <RightSidebar />
    </div>
  );
};

export default Emergencies;
