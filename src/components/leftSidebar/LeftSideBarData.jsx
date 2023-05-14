import React from "react";
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import SpaceDashboardOutlinedIcon from '@mui/icons-material/SpaceDashboardOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';



export const SideBarData = [
    {
        title: "Emergencies",
        path: "/emergencies",
        icon: <WarningAmberIcon className="icon" />
    },
    {
        title: "Management",
        icon : <SpaceDashboardOutlinedIcon className="icon" />,
        iconOpened:  <KeyboardArrowUpIcon className="icon" />,
        iconClosed:  <KeyboardArrowDownIcon className="icon" />,
        subNav: [
            {
                title: "User",
                path: "/manageuser"
            },
            {
                title: "Department",
                path: "/managedepartment"
            }
        ]
    },
    {
        title: "Courses",
        path: "/courses",
        icon: <StoreOutlinedIcon className="icon" />
    }
];