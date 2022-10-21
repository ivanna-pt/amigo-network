import React from "react";
import style from './ProfileNav.module.css'
import {NavLink} from "react-router-dom";

const ProfileNav = () => {
    return (
        <div className={style.wrapper}>
            <NavLink to='timeline/' className={style.navLink}><div className={style.navItem}>Timeline</div></NavLink>
            <NavLink to='about/' className={style.navLink}><div className={style.navItem}>About</div></NavLink>
            <NavLink to='friends/*' className={style.navLink}><div className={style.navItem}>Friends</div></NavLink>
            <NavLink to='photos/' className={style.navLink}><div className={style.navItem}>Photos</div></NavLink>
        </div>
)
}

export default ProfileNav;