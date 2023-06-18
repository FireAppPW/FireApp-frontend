import React, {useEffect, useState} from "react";
import "./courses.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import course1 from "../../assets/images/course1.jpg";
import course2 from  "../../assets/images/course2.jpg"
import course3 from  "../../assets/images/course3.jpg"
import course4 from  "../../assets/images/course4.jpg"
import {Link} from 'react-router-dom';
import axios from "axios";
import Cookies from "js-cookie";

const CreateCourse = Link
const Course = Link


const Courses = () => {
    const [courseData, setCourseData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [isRemoteQuery, setIsRemoteQuery] = useState(false);
    const token = JSON.parse(Cookies.get('token')).accessToken
    const coursesPictures = [course1, course2, course3, course4]
    const profileRole = localStorage.getItem("role")
    const config = {
        headers: {
            Authorization : `Bearer ${token}`
        }
    }

    const filteredCourses = courseData.filter((course) => {
        console.log(isRemoteQuery)
        return  course.description.toLowerCase().includes(searchQuery.toLowerCase()) &&
                course.isRemote === isRemoteQuery;
    });

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };


    useEffect(() => {
        axios
            .get('https://course.fireapp.website/course', config)
            .then((response) => {
                setCourseData(response.data);
            })
            .catch((error) => console.log(error))

    }, []);


  return (
      <div className="wrapper">
          <LeftSidebar/>
          <div className="mid">
              <div className="top">
                  <div className="texts">
                      <h2>Courses</h2>
                      <p>List of all courses</p>
                  </div>
              </div>
              <form className="searchSection">
                  <div className="left">
                      <div className="container">
                          <div className="selectCard">
                              <p>Remote</p>
                              <div className="select">
                                  <select
                                      name="category"
                                      id="category"
                                      onChange={(e) => {
                                          if (e.target.value === "true"){
                                              setIsRemoteQuery(true)
                                          }else{
                                              setIsRemoteQuery(false)
                                          }

                                      }}>
                                      <option value="Any">Any</option>
                                      <option value="true">Yes</option>
                                      <option value="false">No</option>
                                  </select>
                              </div>
                          </div>
                      </div>

                  </div>

                  <div className="right">

                      <div className="container">
                          <CreateCourse to="/newCourse" className="add" style={
                              profileRole === ("User" || "Commandant") ?
                                  {display: "none"}
                                  : null
                          }>
                              <AddIcon className="icon"/>
                          </CreateCourse>
                          <div className="searchContainer">
                              <input
                                  type="text"
                                  placeholder="Search"
                                  value={searchQuery}
                                  onChange={handleSearchInputChange}
                              />
                              <SearchIcon className="searchIcon"/>
                          </div>
                      </div>
                  </div>

              </form>
              <section className="courses">
                  {
                      filteredCourses.map((course, index) =>{
                          return (
                              <Course key={index} to={"/courses/" + course.id} className="courseCard">
                                  <div className="container">
                                      <div className="image">
                                          <img src={coursesPictures[Math.floor(Math.random() * coursesPictures.length)]} alt=""/>
                                      </div>
                                      <div className="texts">
                                          <h2>{course.title}</h2>
                                          <p>{course.description}</p>

                                      </div>
                                  </div>
                                  <div className="displayContainer">
                                      <div className="text">
                                          <h2>{course.title}</h2>
                                      </div>
                                      <p>{course.description}</p>
                                      <div className="more">
                                          <p>Learn more</p>
                                      </div>
                                  </div>
                              </Course>
                          );
                      })
                  }

              </section>
          </div>
          <RightSidebar/>
      </div>
  );
};

export default Courses;
