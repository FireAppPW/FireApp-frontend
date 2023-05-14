import React, {useState} from "react";
import "./emergencies.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar.jsx";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import {EmergenciesData} from "./EmergenciesData";
import {Link} from "react-router-dom";




const Emergencies = () => {

    const [info, setInfo] = useState(false);
    const showInfo = () => {
        setInfo(!info)
        console.log(info)
    }


    return (
    <div className="wrapper">
      <LeftSidebar />
      <div className="mid">
        <div className="top">
          <div className="texts">
            <h2>Emergencies</h2>
            <p>List of all emergencies</p>
          </div>
          <Link to="/newEmergency" className="create">
            <p>Create Emergency</p>
          </Link>
        </div>
        <div className="smallCards">
          <div className="card">
              <h2>Monthly Emergencies</h2>
          </div>
          <div className="card">
              <h2>Yearly Emergencies</h2>
          </div>
          <div className="card">
              <h2>Graph</h2>
          </div>
        </div>
        <div className="emergenciesTable">
          <div className="container">
                  {
                      EmergenciesData.map((item, index) =>{
                          return (
                              <div className="emergencyCard">
                                  <div className="e-container">
                                      <div className="e-top">
                                          <div className="e-left">
                                              <div className="e-l-top">
                                                  <div className="square" style={{backgroundColor: item.color}}>
                                                      <ErrorOutlineOutlinedIcon className="icon" style={{color: item.iconColor}}/>
                                                  </div>
                                                  <div className="e-texts">
                                                      <h2>{item.title}</h2>
                                                      <p>{item.description}</p>
                                                  </div>
                                              </div>
                                              <div className="e-l-bottom">
                                                  <p>{item.date}</p>
                                              </div>
                                          </div>
                                          <div className="e-right" onClick={showInfo} style={
                                              info ? {backgroundColor: "white"} : {backgroundColor: "#FF4300", color: "white"}}>
                                              <p>{
                                                  info ? "Close Incident" : "Closed"
                                              }</p>
                                          </div>
                                      </div>
                                      {
                                          info && (
                                          <div className="e-bottom">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut neque purus, luctus ut ullamcorper facilisis, ullamcorper ac dolor. Cras porttitor nulla ac posuere aliquam. Nunc ex turpis, aliquam sed molestie quis, bibendum ac nulla. Fusce mollis id tellus ac commodo. Proin varius non neque iaculis convallis. Fusce posuere eros libero, vitae interdum nunc consectetur id. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Suspendisse vel pulvinar ipsum. Fusce et molestie lacus, at rutrum velit. Nunc a neque aliquet, consectetur ligula quis, maximus tortor. In varius sit amet erat vitae ultricies.</p>
                                          </div>)
                                      }

                                  </div>
                              </div>
                          );
                      })
                  }
          </div>
        </div>
      </div>
      <RightSidebar />
    </div>
  );
};

export default Emergencies;
