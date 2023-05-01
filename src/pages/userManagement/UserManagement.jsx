import React, { useState } from "react";
import "./usermanagement.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import RightSidebar from "../../components/rightSidebar/RightSidebar";
import avatar from "../../assets/images/firefighter1.jpg";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditIcon from "@mui/icons-material/Edit";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function createData(
  name,
  photo,
  id,
  role,
  fireDepartment,
  showingOptions = false
) {
  return { name, photo, id, role, fireDepartment, showingOptions };
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontWeight: "bold",
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    // backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    // border: 0,
  },
}));

const UserManagement = () => {
  const [rows, setRows] = useState([
    createData("John Doe", avatar, 1, "Firefighter", "Fire Department 1"),
    createData("Jane Doe", avatar, 2, "Firefighter", "Fire Department 2"),
    createData("John Smith", avatar, 3, "Firefighter", "Fire Department 3"),
    createData("Jane Smith", avatar, 4, "Firefighter", "Fire Department 4"),
    createData("John Doe", avatar, 5, "Firefighter", "Fire Department 5"),
  ]);

  console.log("render");
  return (
    <div className="wrapper usermanagement">
      <LeftSidebar />
      <div className="mid">
        <div className="top">
          <div className="texts">
            <h2>User Management</h2>
          </div>
        </div>
        <div className="table">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <StyledTableRow>
                  <StyledTableCell></StyledTableCell>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="right">ID</StyledTableCell>
                  <StyledTableCell align="right">Role</StyledTableCell>
                  <StyledTableCell align="right">
                    Fire Department
                  </StyledTableCell>
                  <StyledTableCell align="right" width={"130px"}>
                    Options
                  </StyledTableCell>
                </StyledTableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, index) => (
                  <StyledTableRow
                    key={row.index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <StyledTableCell component="th" scope="row">
                      <img src={row.photo} alt="avatar" />
                    </StyledTableCell>
                    <StyledTableCell component="th" scope="row">
                      {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.id}</StyledTableCell>
                    <StyledTableCell align="right">{row.role}</StyledTableCell>
                    <StyledTableCell align="right">
                      {row.fireDepartment}
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      onMouseLeave={() => {
                        let newRows = [...rows];
                        newRows[index].showingOptions = false;
                        setRows(newRows);
                      }}
                      onMouseOver={() => {
                        let newRows = [...rows];
                        newRows[index].showingOptions = true;
                        setRows(newRows);
                      }}
                    >
                      {!row.showingOptions ? (
                        <IconButton color="primary" size="small">
                          <MoreHorizIcon />
                        </IconButton>
                      ) : (
                        <div>
                          <IconButton color="primary" size="small">
                            <EditIcon />
                          </IconButton>
                          <IconButton color="primary" size="small">
                            <NotificationAddIcon />
                          </IconButton>
                          <IconButton color="error" size="small">
                            <DeleteForeverIcon />
                          </IconButton>
                        </div>
                      )}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
      <RightSidebar />
    </div>
  );
};

export default UserManagement;
