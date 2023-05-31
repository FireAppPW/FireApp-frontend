import React, {useEffect, useState} from "react";
import "./departmentTable.scss";
import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import {Link} from "react-router-dom";
import axios from "axios";

const CreateDepartment = Link

const DepartmentTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [departmentData, setDepartmentData] = useState([]);

  useEffect(() => {
      axios
          .get('https://department.fireapp.website/department')
          .then((response) => {
            setDepartmentData(response.data.data);
            console.log(response.data.data)

          })
          .catch((error) => console.log(error))

  }, []);


  const filteredDepartments = departmentData.filter((department) => {
    return department.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleClick=(e, id)=>{
    e.preventDefault()
    axios
        .delete("https://department.fireapp.website/department/"+ id.toString())
        .then(res => window.location.reload())
        .catch(err => console.log(err))
  }

  return (
      <div className="departmentWrapper">
        <div className="departmentTotal">
          <div className="dT-container">
            <h2>Total Departments</h2>
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
                    <td className="departmentName">
                      <img src={department.logoPicture} alt="" className="departmentImg" />
                      <span>{department.name}</span>
                    </td>
                    <td className="departmentCell">{department.id}</td>
                    <td className="departmentCell">{department.email}</td>
                    <td className="departmentCell">{department.phone}</td>
                    <td onClick={
                      (e) => {
                        handleClick(e, department.id)
                      }
                    } className="departmentCell" style={{cursor:"pointer"}}>Delete</td>
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
