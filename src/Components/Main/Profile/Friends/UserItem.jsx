import React from "react";
import style from "./Friends.module.css";

const UserItem = (props) => {
    return (
        <div className={style.userItem}>
            <div className={style.userInfoWrap}>
                <div className={style.userImg}>
                    Avatar
                </div>
                <div>
                    <h5>{props.userName}</h5>
                    <p>{props.country}, {props.city}</p>
                </div>
            </div>
            <div className={style.btnWrap}>
                <button className='btn btn-primary'>Friend</button>
            </div>
        </div>
    )
}

export default UserItem;