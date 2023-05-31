import React, {useEffect, useState} from "react";
import "./courses.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import SearchIcon from '@mui/icons-material/Search';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AddIcon from '@mui/icons-material/Add';
import {CoursesData} from "./CoursesData";
import {Link} from 'react-router-dom';
import axios from "axios";

const CreateCourse = Link
const EditCourse = Link


const Courses = () => {
    //const [courseData, setCourseData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    //EXAMPLE
    const courseData = [{
        "id": 1,
        "title": "What is fire",
        "description": "Fire 101",
        "isPublic": false,
        "dateTimeCreated": "2022-05-30T15:11:24.061",
        "dateTimeApplicationDeadline": "2023-12-30T15:11:24.061",
        "dateTimeStart": "2022-05-30T15:11:24.061",
        "places": 1,
        "isRemote": false,
        "addressLine1": "Centrum",
        "addressLine2": "7A",
        "city": "Warsaw",
        "country": "Poland",
        "picture": "https://media.istockphoto.com/id/113494458/photo/fire-isolated-over-black-background.jpg",
        "isDeleted": false
    }]
    const filteredCourses = courseData.filter((course) => {
        return course.description.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };


    useEffect(() => {
        axios
            .get('https://course.fireapp.website/course')
            .then((response) => {
                //setCourseData(response.data.data);
                console.log(response.data.data)

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
                              <p>Category</p>
                              <div className="select">
                                  <select name="category" id="category">
                                      <option value="Any">Any</option>
                                  </select>
                              </div>

                          </div>
                          <div className="selectCard">
                              <p>Fire Department</p>
                              <div className="select">
                                  <select name="category" id="category">
                                      <option value="Any">Any</option>
                                  </select>
                              </div>
                          </div>
                      </div>

                  </div>

                  <div className="right">

                      <div className="container">
                          <EditCourse to="" className="edit">
                              <ModeEditIcon className="icon"/>
                          </EditCourse>
                          <CreateCourse to="/newCourse" className="add">
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
                      <div className="submit">
                          <p>Submit</p>
                      </div>
                  </div>

              </form>
              <section className="courses">
                  {
                      filteredCourses.map((course) =>{
                          return (
                              <div className="courseCard">
                                  <div className="container">
                                      <div className="image">
                                          <img src={course.picture} alt=""/>
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
                              </div>
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
