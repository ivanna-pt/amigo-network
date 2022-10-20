import React from "react";
import style from "./Posts.module.css";

const PostItem = (props) => {
    return (
        <div className='card'>
            <div className={style.postItem}>
                <div className={style.userPostData}>
                    <div className='userImg'></div>
                    <div className={style.userInfo}>
                        <h5>{props.name}</h5>
                        <p>{props.date}</p>
                    </div>
                </div>
                <p className={style.postText}>{props.text}</p>
                <div className={style.postImg}></div>
                <div className={style.postFooter}>
                    <div className={style.likeBlock}>
                        <button className='btn btn-primary'>Like</button>
                        <div>{props.likes} Likes</div>
                    </div>
                    <div className={style.shareBlock}>
                        <button className='btn btn-primary'>Share</button>
                        <div>{props.share} share</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PostItem;