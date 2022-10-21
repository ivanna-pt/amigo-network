import React from "react";
import style from './Timeline.module.css';
import TimelinePostsContainer from "./TimelinePostsContainer";
import LifeEvents from "./LifeEvents";
import FriendsCard from "./FriendsCard";
import PhotosCard from "./PhotosCard";

const Timeline = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.leftSide}>
                <LifeEvents/>
                <FriendsCard/>
                <PhotosCard/>
            </div>
            <div className={style.postsWrapper}>
                <TimelinePostsContainer/>
            </div>
        </div>
    )
}

export default Timeline;