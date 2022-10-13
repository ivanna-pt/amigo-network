import React from "react";
import '../../../../App.css';
import style from './Posts.module.css';

const CreatePost = () =>{
    return (
        <div className='card'>
            <div className='cardHeader'>
                <div className='header-title'>
                    <h4>Create post</h4>
                </div>
            </div>
            <div className='cardBody'>
                <div className={style.cardPost}>
                    <div className='userImg'>
                    </div>
                    <textarea  placeholder='Type your post ...'></textarea>
                </div>
                <ul className={style.cardPostOpt}>
                    <li className={style.optItem}><a href="#" className='btn btn-soft-primary'>Photo/Video</a></li>
                    <li className={style.optItem}><a href="#" className='btn btn-soft-primary'>Tag</a></li>
                    <li className={style.optItem}><a href="#" className='btn btn-soft-primary'>Feeling</a></li>
                    <li className={style.optItem}><a href="#" className='btn btn-soft-primary'>...</a></li>
                </ul>

            </div>
        </div>
    )
};

export default CreatePost;