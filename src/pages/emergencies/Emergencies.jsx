import React, {useEffect, useState} from "react";
import "./emergencies.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar.jsx";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import {EmergenciesData} from "./EmergenciesData";
import {Link} from "react-router-dom";
import axios from "axios";




const Emergencies = () => {

    const [info, setInfo] = useState(true);
    const showInfo = () => {
        setInfo(!info)
        console.log(info)
    }

    const [emergencyData, setEmergencyData] = useState([]);

    useEffect(() => {
        axios
            .get('https://emergency.fireapp.website/emergency')
            .then((response) => {
                //setEmergencyData(response.data.data);
                console.log(response.data.data)

            })
            .catch((error) => console.log(error))

    }, []);

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
                      EmergenciesData.map((emergency) =>{
                          return (
                              <div className="emergencyCard">
                                  <div className="e-container">
                                      <div className="e-top">
                                          <div className="e-left">
                                              <div className="e-l-top">
                                                  <div className="square" style={{backgroundColor: emergency.color}}>
                                                      <ErrorOutlineOutlinedIcon className="icon" style={{color: emergency.iconColor}}/>
                                                  </div>
                                                  <div className="e-texts">
                                                      <h2>{emergency.title}</h2>
                                                  </div>
                                              </div>
                                              <div className="e-l-bottom">
                                                  <p>{emergency.dateTimeCreated}</p>
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
                                            <p>{emergency.description}</p>
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
