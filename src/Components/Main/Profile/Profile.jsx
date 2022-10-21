import React from "react";
import style from './Profile.module.css'
import Intro from "./Intro/Intro";
import ProfileNav from "./ProfileNav/ProfileNav";

const Profile = () => {
    return (
        <div>
            <Intro/>
            <ProfileNav/>

        </div>
    )
}

export default Profile;