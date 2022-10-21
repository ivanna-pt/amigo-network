import React from "react";
import style from './Friends.module.css'
import AllFriendsContainer from "./AllFriends/AllFriendsContainer";
import {NavLink, Routes, Route} from "react-router-dom";
import CloseFriendsContainer from "./CloseFriends/CloseFriendsContainer";
import HometownContainer from "./Hometown/HometownContainer";
import FriendsNav from "./FriendsNav";

const Friends = () => {
    return (
        <div className={style.friends}>
            <h2>Friends</h2>
            <FriendsNav/>
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