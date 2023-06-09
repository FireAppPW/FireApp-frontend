import React, {useEffect, useState} from "react";
import "./courses.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import SearchIcon from '@mui/icons-material/Search';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AddIcon from '@mui/icons-material/Add';
import course1 from "../../assets/images/course1.jpg";
import {Link} from 'react-router-dom';
import axios from "axios";

const CreateCourse = Link
const EditCourse = Link
const Course = Link


const Courses = () => {
    const [courseData, setCourseData] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");

    const filteredCourses = courseData.filter((course) => {
        return course.description.toLowerCase().includes(searchQuery.toLowerCase());
    });

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };


    useEffect(() => {
        axios
            .get('https://api.fireapp.website/course')
            .then((response) => {
                setCourseData(response.data);
                console.log(response.data)

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
                              <Course to={"/courses/" + course.id} className="courseCard">
                                  <div className="container">
                                      <div className="image">
                                          <img src={course1} alt=""/>
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
