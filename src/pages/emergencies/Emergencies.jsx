import React, {useEffect, useState} from "react";
import "./emergencies.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar.jsx";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import ErrorOutlineOutlinedIcon from '@mui/icons-material/ErrorOutlineOutlined';
import {Link} from "react-router-dom";
import axios from "axios";




const Emergencies = () => {
    const [emergencyData, setEmergencyData] = useState([]);
    const emergencyColors = ["#96FF71BD", "#FFDD71BD", "#FF7971BD"]
    const emergencyIconColors = ["#5AFD21", "#F9BE00", "#FE564C"]

    function sortNull() {
        return function (a, b) {
            if (a.dateTimeClosed === null) {
                return -1;
            }
            if (b.dateTimeClosed === null) {
                return 1;
            }
        };
    }

    const handleClick=(e, emergency)=>{
        e.preventDefault()
        emergency.dateTimeClosed = new Date().toJSON()
        axios
            .put("https://emergency.fireapp.website/emergency/" + emergency.id, emergency)
            .then(res => {
                console.log(res)
                window.location.reload()

            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        axios
            .get('https://emergency.fireapp.website/emergency')
            .then((response) => {
                setEmergencyData(response.data.sort(sortNull()));
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
                      emergencyData.map((emergency, index) =>{
                          return (
                              <div key={emergency.id} className="emergencyCard">
                                  <div className="e-container">
                                      <div className="e-top">
                                          <div className="e-left">
                                              <div className="e-l-top">
                                                  <div className="square" style={{backgroundColor: emergencyColors[emergency.dangerousLevel]}}>
                                                      <ErrorOutlineOutlinedIcon className="icon" style={{color: emergencyIconColors[emergency.dangerousLevel]}}/>
                                                  </div>
                                                  <div className="e-texts">
                                                      <h2>{emergency.city + ", " + emergency.country}</h2>
                                                  </div>
                                              </div>
                                              <div className="e-l-bottom">
                                                  <p>{emergency.dateTimeCreated.slice(0, 10)}</p>
                                              </div>
                                          </div>
                                          <div className="e-right" onClick={(e) => handleClick(e, emergency)} style={
                                              emergency.dateTimeClosed === null ? {backgroundColor: "white"} : {backgroundColor: "#FF4300", color: "white"}}>
                                              <p>{
                                                  emergency.dateTimeClosed === null ? "Close Incident" : "Closed"
                                              }</p>
                                          </div>
                                      </div>
                                      <div className="e-bottom" style={{display: emergency.dateTimeClosed === null ? "block":"none"}}>
                                        <p>{emergency.description}</p>
                                      </div>
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
