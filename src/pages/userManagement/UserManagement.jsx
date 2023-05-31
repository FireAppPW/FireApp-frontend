import React, {useEffect, useState} from "react";
import axios from "axios";
import "./usermanagement.scss";
import LeftSidebar from "../../components/leftSidebar/LeftSidebar";
import UserTable from "../../components/userTable/UserTable";
import RightSidebar from "../../components/rightSidebar/RightSidebar";


const UserManagement = () => {

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Realizar una solicitud HTTP a tu microservicio para obtener los datos del usuario
                const response = await axios.get('http://20.238.194.113/account');

                // Guardar los datos del usuario en el estado del componente
                setUserData(response.data);
                console.log(userData)
            } catch (error) {
                console.error('Error al obtener los datos del usuario:', error);
            }
        };

        // Llamar a la función para obtener los datos del usuario cuando el componente se monte
        fetchUserData()
    }, []);


  return (
    <div className="wrapper">
      <LeftSidebar />
      <div className="mid">
        <div className="header">
          <h2>User Management</h2>
        </div>
        <div className="tableContainer">
          <UserTable />
        </div>
      </div>
      <RightSidebar />
    </div>
  );
};

export default UserManagement;
