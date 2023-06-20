import { useLocation, Navigate, Outlet } from "react-router-dom";
import React, {useEffect, useState} from "react";

const Auth = ({ allowedRoles }) => {

    const [userId, setUserId] = useState(null)
    const [fireDepartmentId, setFireDepartmentId] = useState(null)
    const auth = JSON.parse(localStorage.getItem("user") || "{}");
    const location = useLocation();
    useEffect( () => {
        if (location.pathname.split('/')[1] === "managedepartment"){
            setFireDepartmentId(location.pathname.split('/')[3])
        }else if ((location.pathname.split('/')[1] === "manageuser")){
            setUserId(location.pathname.split('/')[3])
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    function permissions (){
        if (userId || fireDepartmentId){
            if (allowedRoles.find((role) => auth?.roles?.includes(role))){
                if (auth.roles === "User" && auth.userId !== userId) {
                    return (<Navigate to="/error" state={{ from: location }} replace />)
                }
                else if (auth.roles === "FireAdmin" && auth.fireDepartmentId !== fireDepartmentId){
                    return (<Navigate to="/error" state={{ from: location }} replace />)
                }
                else{
                    return (<Outlet />);
                }
            }
        }
        else if (Object.keys(auth).length !== 0){
            if (allowedRoles.find((role) => auth?.roles?.includes(role))){
                    return (<Outlet />);
            }else{
                return (<Navigate to="/error" state={{ from: location }} replace />)
            }
        }
        else {
            return (<Navigate to="/" state={{ from: location }} replace />)
        }
    }

    return  permissions()
};

export default Auth;