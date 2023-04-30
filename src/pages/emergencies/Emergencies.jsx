import React from "react";
import "./emergencies.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar.jsx";
import Table from "../../components/table/Table";
import RightSidebar from "../../components/rightSidebar/RightSidebar";

const Emergencies = () => {
  return (
      <div className="wrapper">
          <LeftSidebar/>
          <div className="mid"/>
          <RightSidebar/>
      </div>
  );
};

export default Emergencies;
