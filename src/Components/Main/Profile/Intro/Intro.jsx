import React from "react";
import UserStat from "./UserStat";
import style from './Intro.module.css';

const Intro = () => {
    return (
        <div className={style.introWrapper}>
            <div className={style.introBackImg}>Background photo</div>
            <div className={style.user}>
                <div className={style.userImg}></div>
                <div className={style.userName}><h3>User Name</h3></div>
            </div>
            <div className={style.userInfo}>
                <div className={style.userSocials}>
                    <div className={style.socialsItem}></div>
                    <div className={style.socialsItem}></div>
                    <div className={style.socialsItem}></div>
                    <div className={style.socialsItem}></div>
                </div>

                <UserStat/>
            </div>
        </div>
    )
}

export default Intro;