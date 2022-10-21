import React from "react";
import style from './Timeline.module.css';

import TimelinePostsContainer from "./TimelinePostsContainer";

const Timeline = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.leftSide}>
                <div className='card'><h4>Life Event</h4></div>
                <div className='card'><h4>Friends</h4></div>
                <div className='card'><h4>Photos</h4></div>
            </div>
            <div className={style.postsWrapper}>
                <TimelinePostsContainer/>
            </div>

        </div>
    )
}



export default Timeline;