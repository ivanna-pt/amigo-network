import React from "react";
import '../../../../App.css';
import style from './Posts.module.css';

const CreatePost = (props) =>{
    let newPostElement = React.createRef();
    let onAddPost = () => {
        console.log(props)
        props.addPost();

    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
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
                    <textarea onChange={onPostChange} value={props.newPostText} ref={newPostElement}  placeholder='Type your post ...'></textarea>
                    <button className='btn btn-primary' onClick={onAddPost}>Post</button>
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