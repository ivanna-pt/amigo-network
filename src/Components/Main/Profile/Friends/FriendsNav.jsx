import React from "react";
import style from "./Friends.module.css";
import {NavLink} from "react-router-dom";

const FriendsNav = () => {
    return (
        <div className={style.navWrapper}>
            <div className={style.navBar}>
                <NavLink to='allfriends' className={style.navLink}>All friends</NavLink>
                <NavLink to='closefriends' className={style.navLink}>Close friends</NavLink>
                <NavLink to='hometown' className={style.navLink}>Hometown</NavLink>
            </div>
            <div>
                <NavLink >Suggestions</NavLink>
            </div>
        </div>
    )
}

export default FriendsNav;