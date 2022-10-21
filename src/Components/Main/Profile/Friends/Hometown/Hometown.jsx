import React from "react";
import UserItem from "../UserItem";
import style from "../Friends.module.css";

const Hometown = (props) => {
    let friendElement = props.users.filter(user => {return user.location.city === "Kyiv"}).map((user, index) => <UserItem key={index} userName={user.userName} country={user.location.country} city={user.location.city} /> )
    return (
        <div className={style.friendsContainer}>
            {friendElement}
        </div>
    )
}

export default Hometown;