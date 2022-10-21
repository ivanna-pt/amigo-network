import React from "react";
import style from './Intro.module.css'

const UserStat = () => {
    return (
        <div className={style.userStat}>
            <div className={style.statItem}>
                <div className={style.statTitle}>Posts</div>
                <div className={style.statText}>20</div>
            </div>

            <div className={style.statItem}>
                <div className={style.statTitle}>Followers</div>
                <div className={style.statText} >124</div>
            </div>

            <div className={style.statItem}>
                <div className={style.statTitle}>Following</div>
                <div className={style.statText}>95</div>
            </div>
        </div>
    )
}

export default UserStat;