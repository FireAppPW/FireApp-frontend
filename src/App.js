import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import UpdateUser from "./pages/updateUser/UpdateUser.jsx";
import NewUser from "./pages/newUser/NewUser.jsx";
import Emergencies from "./pages/emergencies/Emergencies.jsx";
import DepartmentManagement from "./pages/departmentManagement/DepartmentManagement.jsx";
import DepartmentDetails from "./pages/departmentDetails/DepartmentDetails.jsx";
import UserManagement from "./pages/userManagement/UserManagement.jsx";
import NewDepartment from "./pages/newDepartment/NewDepartment.jsx";
import PostNotificationDepartment from "./pages/postNotificationDepartment/PostNotificationDepartment.jsx";
import PostNotificationUser from "./pages/postNotificationUser/PostNotificationUser.jsx";
import UpdateDepartment from "./pages/updateDepartment/UpdateDepartment.jsx";
import Workshops from "./pages/workshops/Workshops.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/manageuser" element={<UserManagement />} />
        <Route exact path="/createuser" element={<NewUser />} />
        <Route exact path="/manageuser/:userId" element={<UpdateUser />} />
        <Route exact path="/emergencies" element={<Emergencies />} />
        <Route
          exact
          path="/managedepartment"
          element={<DepartmentManagement />}
        />
        <Route
          exact
          path="/departmentmanagement/:departmentId"
          element={<DepartmentDetails />}
        />
        <Route
          exact
          path="/departmentmanagement/:departmentId/edit"
          element={<UpdateDepartment />}
        />
        <Route exact path="/createdepartment" element={<NewDepartment />} />
        <Route
          exact
          path="/departmentnotification"
          element={<PostNotificationDepartment />}
        />
        <Route path="/usernotification" element={<PostNotificationUser />} />
        <Route path="/workshops" element={<Workshops />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
