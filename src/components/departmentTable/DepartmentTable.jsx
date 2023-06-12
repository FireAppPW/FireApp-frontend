import React, {useEffect, useState} from "react";
import "./departmentTable.scss";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import {Link} from "react-router-dom";
import axios from "axios";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import department1 from "../../assets/images/department1.jpg";
import department2 from "../../assets/images/department2.jpg";
import department3 from "../../assets/images/department3.jpg";

import EditIcon from "@mui/icons-material/Edit";
import Cookies from "js-cookie";

const CreateDepartment = Link
const UpdateDepartment = Link
const Department = Link

const DepartmentTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [departmentData, setDepartmentData] = useState([]);
  const departmentPictures = [department1, department2, department3]

  useEffect(() => {
      const token = JSON.parse(Cookies.get('token')).accessToken
      const config = {
        headers: {
          Authorization : `Bearer ${token}`
        }
      }
      axios
          .get('https://department.fireapp.website/department', config)
          .then((response) => {
            setDepartmentData(response.data.data);
          })
          .catch((error) => console.log(error))

  }, []);


  const filteredDepartments = departmentData.filter((department) => {
    return department.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleDeleteClick=(e, id)=>{
    e.preventDefault()
    /*
    axios
        .delete("https://department.fireapp.website/department/"+ id.toString())
        .then(res => window.location.reload())
        .catch(err => console.log(err))

     */
  }

  return (
      <div className="departmentWrapper">
        <div className="departmentTotal">
          <div className="dT-container">
            <h2>Total Departments: {filteredDepartments.length}</h2>
            <div className="depOptions">
              <div className="depSearchContainer">
                <input
                    type="text"
                    placeholder="Search for departments"
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                    className="searchBar"
                />
                <SearchIcon className="searchIcon"/>
              </div>
              <CreateDepartment to="/newDepartment" className="depAdd">
                <AddIcon className="icon"/>
              </CreateDepartment>
            </div>
          </div>
        </div>
        <div className="departmentContainer">
          <table className="departmentTable">
            <thead>
            <tr className="departmentRow">
              <th className="departmentTh">Name</th>
              <th className="departmentTh">ID</th>
              <th className="departmentTh">Email</th>
              <th className="departmentTh">Phone</th>
              <th className="departmentTh">Actions</th>
            </tr>
            </thead>
            <tbody>
                {filteredDepartments.map((department, index) => {
                  return (
                      <tr className="departmentRow" key={index}>
                        <Department to={"/managedepartment/" + department.id} className="departmentName">
                          <img src={departmentPictures[Math.floor(Math.random() * departmentPictures.length)]} alt="" className="departmentImg" />
                          <span>{department.name}</span>
                        </Department>
                        <td className="departmentCell">{department.id}</td>
                        <td className="departmentCell">{department.email}</td>
                        <td className="departmentCell">{department.phone}</td>
                        <td className="departmentCell departmentOptions">
                          <div className="borderIcon" style={{outlineColor: "#F65B4F"}} onClick={
                            (e) => {
                              handleDeleteClick(e, department.id)
                            }}>
                            <DeleteForeverIcon className="deleteIcon"/>
                          </div>
                          <UpdateDepartment to={"/managedepartment/update/" + department.id} className="borderIcon" style={{outlineColor: "#53daf1"}}>
                            <EditIcon className="editIcon"/>
                          </UpdateDepartment>
                        </td>
                      </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>

  );
};

export default DepartmentTable;
