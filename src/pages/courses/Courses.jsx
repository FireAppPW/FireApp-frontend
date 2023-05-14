import React from "react";
import "./courses.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import SearchIcon from '@mui/icons-material/Search';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import AddIcon from '@mui/icons-material/Add';
import {CoursesData} from "./CoursesData";

const Courses = () => {
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
                          <div className="edit">
                              <ModeEditIcon className="icon"/>
                          </div>
                          <div className="add">
                              <AddIcon className="icon"/>
                          </div>
                          <div className="searchContainer">
                              <input type="text" placeholder="Search"/>
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
                      CoursesData.map((item) =>{
                          return (
                              <div className="courseCard">
                                  <div className="container">
                                      <div className="image">
                                          <img src={item.image} alt=""/>
                                      </div>
                                      <div className="texts">
                                          <h2>{item.category}</h2>
                                          <p>{item.info}</p>

                                      </div>
                                  </div>
                                  <div className="displayContainer">
                                      <div className="text">
                                          <h2>{item.category}</h2>
                                      </div>
                                      <p>{item.display}</p>
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
