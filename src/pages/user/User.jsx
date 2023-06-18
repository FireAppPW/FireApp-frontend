import React, {useEffect, useState} from "react";
import "./user.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import {useLocation, useNavigate} from 'react-router-dom';
import coursePicture from  "../../assets/images/firefighter1.jpg"
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import axios from "axios";
import {CONFIG, PROFILE_DEPARTMENT_ID} from "../../constants";

const User = () => {
    let location = useLocation();
    const userId = location.pathname.split('/')[2]
    const [userRole, setUserRole] = useState({})
    const navigate = useNavigate();
    const [userData, setUserData] = useState([])

    useEffect(() => {

        axios
            .get(`https://account.fireapp.website/account/${PROFILE_DEPARTMENT_ID}/${userId}`, CONFIG)
            .then((response) => {
                setUserData(response.data);
                setUserRole(response.data.role)

            })
            .catch((error) => console.log(error))

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleDeleteClick=(e)=>{
        e.preventDefault()
        console.log(userId)
        axios
            .delete(`https://account.fireapp.website/account/${PROFILE_DEPARTMENT_ID}/${userId}`, CONFIG)
            .then(() => navigate("/manageuser"))
            .catch(err => console.log(err))

    }

    const handleUpdateClick=(e)=>{
        e.preventDefault()
        navigate("/manageuser/update/"+userId)
    }


    return (
        <div className="wrapper">
            <LeftSidebar/>
            <div className="mid">
                <div className="top">
                    <div className="texts">
                        <h2>User Management > User: {userData.firstName}</h2>
                        <p>Information of the User</p>
                    </div>
                </div>
                <div className="user-info">
                    <div className="user-info__container">
                        <div className="user-info__top">
                            <div className="user-info__small-data">
                                <div className="user-info__image">
                                    <img src={coursePicture} alt=""/>
                                </div>
                                <div className="user-info__name">
                                    <h2>{userData.firstName + " " + userData.lastName}</h2>
                                </div>
                                <div className="user-info__role">{userRole.name}</div>
                            </div>
                            <div className="user-info__options">
                                <button className="user-info__options__option-button" onClick={handleDeleteClick}
                                        style={{backgroundImage: "linear-gradient(45deg, #FF512F 0%, #F09819  51%, #FF512F  100%)"}}
                                >
                                    Delete
                                </button>
                                <button className="user-info__options__option-button" onClick={handleUpdateClick}
                                        style={{backgroundImage: "linear-gradient(45deg, #2fffe7 0%, #1996f0 51%, #2fffe7  100%)"}}
                                >
                                    Modify
                                </button>
                            </div>
                        </div>
                        <span className="user-info__separation-bar"/>
                        <div className="user-info__description">
                            <div className="user-info__description__info-card">
                                <div className="user-info__description__info-card__title">
                                    <PersonOutlineOutlinedIcon  className="user-info__icon"/>
                                    <p>ID</p>
                                </div>
                                <p>{userData.id}</p>
                            </div>
                            <div className="user-info__description__info-card">
                                <div className="user-info__description__info-card__title">
                                    <EmailOutlinedIcon  className="user-info__icon"/>
                                    <p>Email</p>
                                </div>
                                <p>{userData.email}</p>
                            </div>
                            <div className="user-info__description__info-card">
                                <div className="user-info__description__info-card__title">
                                    <CalendarTodayOutlinedIcon  className="user-info__icon"/>
                                    <p>Birth Date</p>
                                </div>
                                <p>{userData.birthDate}</p>
                            </div>
                            <div className="user-info__description__info-card">
                                <div className="user-info__description__info-card__title">
                                    <ApartmentOutlinedIcon  className="user-info__icon"/>
                                    <p>Department Id</p>
                                </div>
                                <p>{userData.fireDepartmentId}</p>
                            </div>
                            <div className="user-info__description__info-card">
                                <div className="user-info__description__info-card__title">
                                    <HomeOutlinedIcon  className="user-info__icon"/>
                                    <p>Address</p>
                                </div>
                                <p>{userData.addressLine1 + ", " + userData.city + ", " + userData.country}</p>
                            </div>
                            <div className="user-info__description__info-card">
                                <div className="user-info__description__info-card__title">
                                    <KeyOutlinedIcon  className="user-info__icon"/>
                                    <p>Role</p>
                                </div>
                                <p>{userRole.name}</p>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
            <RightSidebar/>
        </div>
    );
};

export default User;
