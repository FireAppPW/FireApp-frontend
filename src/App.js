import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./pages/register/Register.jsx";
import Login from "./pages/login/Login.jsx";
import UpdateUser from "./pages/updateUser/UpdateUser.jsx";
import NewUser from "./pages/newUser/NewUser.jsx";
import Emergencies from "./pages/emergencies/Emergencies.jsx";
import DepartmentManagement from "./pages/departmentManagement/DepartmentManagement.jsx";
import UserManagement from "./pages/userManagement/UserManagement.jsx";
import NewDepartment from "./pages/newDepartment/NewDepartment.jsx";
import PostNotificationDepartment from "./pages/postNotificationDepartment/PostNotificationDepartment.jsx";
import PostNotificationUser from "./pages/postNotificationUser/PostNotificationUser.jsx";
import Courses from "./pages/courses/Courses.jsx";
import Course from "./pages/course/Course.jsx";
import NewCourse from "./pages/newCourse/NewCourse.jsx";
import NewEmergency from "./pages/newEmergency/NewEmergency";
import NewNotification from "./pages/newNotification/NewNotification";
import UpdateDepartment from "./pages/updateDepartment/UpdateDepartment.jsx";
import Department from "./components/department/Department";
import UpdateCourse from "./pages/updateCourse/UpdateCourse";
import User from "./pages/user/User";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/manageuser" element={<UserManagement />} />
        <Route path="/manageuser/:userId" element={<User />} />
        <Route exact path="/manageuser/update/:userId" element={<UpdateUser />} />
        <Route exact path="/emergencies" element={<Emergencies />} />
        <Route
          exact
          path="/managedepartment"
          element={<DepartmentManagement />}
        />
        <Route
          exact
          path="/managedepartment/update/:departmentId"
          element={<UpdateDepartment />}
        />
        <Route
            exact
            path="/managedepartment/:departmentId"
            element={<Department />}
        />
        <Route exact path="/newDepartment" element={<NewDepartment />} />
        <Route
          exact
          path="/departmentnotification"
          element={<PostNotificationDepartment />}
        />
        <Route path="/usernotification" element={<PostNotificationUser />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:courseId" element={<Course/>} />
        <Route path="/courses/update/:courseId" element={<UpdateCourse/>} />
        <Route path="/newCourse" element={<NewCourse />} />
        <Route path="/newEmergency" element={<NewEmergency />} />
        <Route exact path="/newUser" element={<NewUser />} />
        <Route exact path="/newNotification" element={<NewNotification />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
