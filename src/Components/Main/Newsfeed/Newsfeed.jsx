import React from "react";
import style from './Newsfeed.module.css';
import '../../../App.css';
import CreatePost from "./Posts/CreatePost";
import Posts from "./Posts/Posts";

const Newsfeed = () => {
    return (
        <div className={style.newsfeed}>
            <div className={style.newsContainer}>
                <CreatePost/>
                <Posts/>
            </div>
            <div className={style.rightContainer}>
               <div className="card">
                   Another text
               </div>
            </div>
            <div className={style.loadContainer}>
                    Loading ...
            </div>
        </div>
    )
}


export default Newsfeed;