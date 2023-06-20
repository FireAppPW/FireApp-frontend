import { useLocation, Navigate, Outlet } from "react-router-dom";

import React from "react";

const Auth = ({ allowedRoles }) => {
    const auth = JSON.parse(localStorage.getItem("user") || "{}");
    const location = useLocation();

    return allowedRoles.find((role) =>
        auth?.roles?.includes(role)) ?
        (<Outlet />)
        :
        auth?.sub ?
            (<Navigate to="/error" state={{ from: location }} replace />)
            :
            (<Navigate to="/" state={{ from: location }} replace />
    );
};

export default Auth;