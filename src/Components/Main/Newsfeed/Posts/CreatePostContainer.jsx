import React from "react";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../../Redux/newsfeedReducer";
import {connect} from "react-redux";
import CreatePost from "./CreatePost";

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

const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps) (CreatePost);

export default CreatePostContainer;