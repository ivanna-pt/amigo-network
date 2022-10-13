import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Sidebar.module.css";

const Sidebar = () => {
    return (
        <div className={style.sidebar}>
            <nav className={style.sidebarNav}>
                <NavLink to="/" className={style.navLink}>Newsfeed</NavLink>
                <NavLink to="/profile" className={style.navLink}>Profile</NavLink>
                <NavLink to="/friends" className={style.navLink}>Friends</NavLink>
                <NavLink to="/messages" className={style.navLink}>Messages</NavLink>
                <NavLink to="/group" className={style.navLink}>Groups</NavLink>
                <NavLink to="/settings" className={style.navLink}>Settings</NavLink>
            </nav>
        </div>
    )
};

export default Sidebar;