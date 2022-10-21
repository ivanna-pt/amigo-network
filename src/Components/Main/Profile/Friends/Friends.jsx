import React from "react";
import style from './Friends.module.css'
import AllFriendsContainer from "./AllFriends/AllFriendsContainer";
import {NavLink, Routes, Route} from "react-router-dom";
import CloseFriendsContainer from "./CloseFriends/CloseFriendsContainer";
import HometownContainer from "./Hometown/HometownContainer";

const Friends = () => {
    return (
        <div className={style.friends}>
            <h2>Friends</h2>
            <div className={style.navWrapper}>
                <div>
                    <NavLink to='allfriends'>All friends</NavLink>
                    <NavLink to='closefriends'>Close friends</NavLink>
                    <NavLink to='hometown'>Hometown</NavLink>
                </div>
                <div>
                    <NavLink >Suggestions</NavLink>
                </div>
            </div>
            <div>
                <Routes>
                    <Route path='allfriends' element={<AllFriendsContainer/>} />
                    <Route path='closefriends' element={<CloseFriendsContainer/>} />
                    <Route path='hometown' element={<HometownContainer/>} />
                </Routes>
            </div>
        </div>
    )
}

export default Friends;