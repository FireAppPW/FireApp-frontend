import React, { useState } from "react";
import "./departmentTable.scss";
import profilePic from "../../assets/images/firefighter1.jpg";

const DepartmentTable = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const departments = [
    {
      name: "Polish Department",
      id: "1234",
      totalEmployee: "2634",
    },
    {
      name: "Polish Department",
      id: "1234",
      totalEmployee: "2634",
    },
    {
      name: "Polish Department",
      id: "1234",
      totalEmployee: "2634",
    },
  ];

  const filteredDepartments = departments.filter((department) => {
    return department.name.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="departmentContainer">
      <div className="topDepartment">
        <h3 className="departmentTitle">Departments</h3>
        <input
          type="text"
          placeholder="Search for departments"
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="searchBar"
        />
      </div>
      <table className="departmentTable">
        <thead>
          <tr className="departmentRow">
            <th className="departmentTh">Name</th>
            <th className="departmentTh">ID</th>
            <th className="departmentTh">Total Employee</th>
            <th className="departmentTh">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredDepartments.map((department, index) => {
            return (
              <tr className="departmentRow" key={index}>
                <td className="departmentName">
                  <img src={profilePic} alt="" className="departmentImg" />
                  <span>{department.name}</span>
                </td>
                <td className="departmentCell">{department.id}</td>
                <td className="departmentCell">{department.totalEmployee}</td>
                <td className="departmentCell">Delete</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default DepartmentTable;
