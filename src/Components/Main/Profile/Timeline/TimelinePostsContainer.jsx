import React from "react";
import {connect} from "react-redux";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/newsfeedReducer";
import Posts from "../../Newsfeed/Posts/Posts";

let mapStateToProps = (state) => {
    let userPosts = state.newsfeedPage.posts.filter(post => {return post.user === 'User Name';
    })
    return {
        posts: userPosts,
        newPostText: state.newsfeedPage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
}

const TimelinePostsContainer = connect(mapStateToProps, mapDispatchToProps) (Posts);

export default TimelinePostsContainer;