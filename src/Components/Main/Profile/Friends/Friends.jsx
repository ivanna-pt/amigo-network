import React from "react";
import style from './Friends.module.css'
import AllFriendsContainer from "./AllFriends/AllFriendsContainer";
import {NavLink, Routes, Route} from "react-router-dom";

const Friends = () => {
    return (
        <div className={style.friends}>
            <h2>Friends</h2>
            <div className={style.navWrapper}>
                <div>
                    <NavLink to='allfriends'>All friends</NavLink>
                    <NavLink>Close friends</NavLink>
                    <NavLink>Hometown</NavLink>
                </div>
                <div>
                    <NavLink >Suggestions</NavLink>
                </div>
            </div>
            <div>
                <Routes>
                    <Route path='/allfriends' element={<AllFriendsContainer/>} />
                </Routes>
            </div>
        </div>
    )
}

export default Friends;