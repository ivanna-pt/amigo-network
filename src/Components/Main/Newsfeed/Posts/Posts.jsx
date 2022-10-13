import React from "react";
import '../../../../App.css';
import style from './Posts.module.css';

const Post = (props) => {
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

let posts = [
    {id: 1, name: 'John Snow', date: "Just Now", message: "Some text one one one ", likeCount: 5, shareCount: 10},
    {id: 2, name: 'Patty Smith', date: "10 Sept", message: "Some text  two two two two two", likeCount: 18, shareCount: 8},
    {id: 3, name: 'Ariana Grande', date: "Yesterday", message: "Some text three Some text three Some text three", likeCount: 0, shareCount: 0},
    {id: 4, name: 'Tom Cruise', date: "2 days ago", message: "Some text four Some text four Some text four Some text four", likeCount: 10, shareCount: 2},
    {id: 5, name: 'Billy Eilish', date: "1 Oct", message: "Some text five Some text five Some text five Some text five", likeCount: 7, shareCount: 3},
];

let postElement = posts.map(post => <Post name={post.name} date={post.date} text={post.message} likes={post.likeCount} share={post.shareCount}/>)

const Posts = () =>{
    return (
        <div>
            {postElement}
        </div>
    )
}

export default Posts;