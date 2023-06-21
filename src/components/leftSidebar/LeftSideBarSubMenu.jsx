import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {PROFILE_ROLE} from "../../constants";

const SideBarLink = Link

const DropdownLink = Link


const SubMenu = ({item}) => {

    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <SideBarLink to={item.path} className="sidebarItem" onClick={item.subNav && showSubnav}
                         style={item.title === "Management" && ["User"].includes(PROFILE_ROLE) ? {display: "None"} : null}>
                <div  className="content">
                    {item.icon}
                    <p>{item.title}</p>
                    <div className="arrow">
                        {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                        ? item.iconClosed
                        : null}
                    </div>
                </div>

            </SideBarLink>
            {subnav &&
            item.subNav.map((item, index) => {
                return (
                    <DropdownLink to={item.path} key={index} className="sidebarSubItem">
                        {item.title}
                    </DropdownLink>
                );
            })}
        </>
    );
};

export default SubMenu;