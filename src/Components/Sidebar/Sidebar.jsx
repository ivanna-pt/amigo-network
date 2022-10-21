import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Sidebar.module.css";

const Sidebar = () => {
    return (
        <div className={style.sidebar}>
            <nav className={style.sidebarNav}>
                <NavLink to="/amigo-network" className={style.navLink}>Newsfeed</NavLink>
                <NavLink to="/amigo-network/profile" className={style.navLink}>Profile</NavLink>
                {/*<NavLink to="/friends" className={style.navLink}>Friends</NavLink>*/}
                <NavLink to="/amigo-network/messages" className={style.navLink}>Messages</NavLink>
                <NavLink to="/amigo-network/group" className={style.navLink}>Groups</NavLink>
                <NavLink to="/amigo-network/saved" className={style.navLink}>Saved</NavLink>
                <NavLink to="/amigo-network/settings" className={style.navLink}>Settings</NavLink>
            </nav>
        </div>
    )
};

export default Sidebar;