import React from "react";
import style from './Profile.module.css'
import Intro from "./Intro/Intro";
import ProfileNav from "./ProfileNav/ProfileNav";
import {Routes, Route} from "react-router-dom";
import Timeline from "./Timeline/Timeline";
import Friends from "./Friends/Friends";

const Profile = () => {
    return (
        <div>
            <Intro/>
            <ProfileNav/>
            <Routes>
                <Route path='/timeline' element={<Timeline/>}/>
                <Route path='/friends/*' element={<Friends/>}/>
            </Routes>
        </div>
    )
}

export default Profile;