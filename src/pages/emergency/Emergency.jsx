import React, {useEffect} from "react";
import "./emergency.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import {useLocation, useNavigate} from 'react-router-dom';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import Grid3x3OutlinedIcon from '@mui/icons-material/Grid3x3Outlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InsertInvitationOutlinedIcon from '@mui/icons-material/InsertInvitationOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import axios from "axios";
import Cookies from "js-cookie";

const Emergency = () => {
    let location = useLocation();
    const emergencyId = location.pathname.split('/')[2]
    const navigate = useNavigate();
    //const [emergencyData, setEmergencyData] = useState([])

    const emergencyData =     {
        id: 4,
        fireDepartmentId: "4",
        fireDepartmentName: "Alfa",
        "classification": {
            "id": 1,
            "classField": "1",
            "classDescription": "fire"
        },
        "authorId": 2,
        "dateTimeCreated": new Date().toJSON(),
        dateTimeClosed: null,
        dangerousLevel: 2,
        addressLine1: "Alameda",
        addressLine2: "",
        city: "Madrid",
        country: "Spain",
        description: "Fire in sector 3"
    }

    useEffect(() => {

        axios
            .get('https://emergency.fireapp.website/emergency/' + emergencyId)
            .then((response) => {
                //setUserData(response.data);
                console.log(response.data)

            })
            .catch((error) => console.log(error))


    }, []);

    const handleDeleteClick=(e)=>{
        e.preventDefault()
        console.log(emergencyId)
        axios
            .delete("https://emergency.fireapp.website/emergency/"+ emergencyId)
            .then(res => navigate("/manageuser"))
            .catch(err => console.log(err))

    }

    return (
        <div className="wrapper">
            <LeftSidebar/>
            <div className="mid">
                <div className="top">
                    <div className="texts">
                        <h2>Emergencies > Emergency: {emergencyData.id}</h2>
                        <p>Information of the Emergency</p>
                    </div>
                </div>
                <div className="user-info">
                    <div className="user-info__container">
                        <div className="user-info__description">
                            <div className="user-info__description__info-card">
                                <div className="user-info__description__info-card__title">
                                    <Grid3x3OutlinedIcon  className="user-info__icon"/>
                                    <p>ID</p>
                                </div>
                                <p>{emergencyData.id}</p>
                            </div>
                            <div className="user-info__description__info-card">
                                <div className="user-info__description__info-card__title">
                                    <ApartmentOutlinedIcon  className="user-info__icon"/>
                                    <p>Fire Department</p>
                                </div>
                                <p>{emergencyData.fireDepartmentId + ", Name: " + emergencyData.fireDepartmentName}</p>
                            </div>
                            <div className="user-info__description__info-card">
                                <div className="user-info__description__info-card__title">
                                    <PersonOutlineOutlinedIcon  className="user-info__icon"/>
                                    <p>Author Id</p>
                                </div>
                                <p>{emergencyData.authorId}</p>
                            </div>
                            <div className="user-info__description__info-card">
                                <div className="user-info__description__info-card__title">
                                    <CalendarTodayOutlinedIcon  className="user-info__icon"/>
                                    <p>Date Time Created</p>
                                </div>
                                <p>{emergencyData.dateTimeCreated}</p>
                            </div>
                            <div className="user-info__description__info-card">
                                <div className="user-info__description__info-card__title">
                                    <InsertInvitationOutlinedIcon  className="user-info__icon"/>
                                    <p>Date Time Closed</p>
                                </div>
                                <p>{emergencyData.dateTimeClosed}</p>
                            </div>
                            <div className="user-info__description__info-card">
                                <div className="user-info__description__info-card__title">
                                    <HomeOutlinedIcon  className="user-info__icon"/>
                                    <p>Address</p>
                                </div>
                                <p>{emergencyData.addressLine1}</p>
                            </div>
                            <div className="user-info__description__info-card">
                                <div className="user-info__description__info-card__title">
                                    <HomeOutlinedIcon  className="user-info__icon"/>
                                    <p>City</p>
                                </div>
                                <p>{emergencyData.city}</p>
                            </div>
                            <div className="user-info__description__info-card">
                                <div className="user-info__description__info-card__title">
                                    <LanguageOutlinedIcon  className="user-info__icon"/>
                                    <p>Country</p>
                                </div>
                                <p>{emergencyData.country}</p>
                            </div>
                            <div className="user-info__description__info-card">
                                <div className="user-info__description__info-card__title">
                                    <DescriptionOutlinedIcon  className="user-info__icon"/>
                                    <p>Description</p>
                                </div>
                                <p>{emergencyData.description}</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <RightSidebar/>
        </div>
    );
};

export default Emergency;
