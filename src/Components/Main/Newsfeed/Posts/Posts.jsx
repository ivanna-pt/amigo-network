import React from "react";
import '../../../../App.css';
import PostItem from "./PostItem";
import CreatePost from "./CreatePost";

// let posts = [
//     {id: 1, name: 'John Snow', date: "Just Now", message: "Some text one one one ", likeCount: 5, shareCount: 10},
//     {id: 2, name: 'Patty Smith', date: "10 Sept", message: "Some text  two two two two two", likeCount: 18, shareCount: 8},
//     {id: 3, name: 'Ariana Grande', date: "Yesterday", message: "Some text three Some text three Some text three", likeCount: 0, shareCount: 0},
//     {id: 4, name: 'Tom Cruise', date: "2 days ago", message: "Some text four Some text four Some text four Some text four", likeCount: 10, shareCount: 2},
//     {id: 5, name: 'Billy Eilish', date: "1 Oct", message: "Some text five Some text five Some text five Some text five", likeCount: 7, shareCount: 3},
// ];

// let postElement = posts.map(post => <PostItem name={post.name} date={post.date} text={post.message} likes={post.likeCount} share={post.shareCount}/>)

const Posts = (props) =>{
    let postElement = props.posts.map(post => <PostItem name={post.user} date={post.date} text={post.postText} likes={post.likeCount} share={post.shareCount}/>)
    return (
        <div>
            <CreatePost/>
            {postElement}
        </div>
    )
}

export default Posts;