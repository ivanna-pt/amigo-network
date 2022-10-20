import React from "react";
import {connect} from "react-redux";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/newsfeedReducer";
import Posts from "./Posts";

let mapStateToProps = (state) => {
    return {
        posts: state.newsfeedPage.posts,
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

const PostsContainer = connect(mapStateToProps, mapDispatchToProps) (Posts);

export default PostsContainer;