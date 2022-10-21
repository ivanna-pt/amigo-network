import React from "react";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../../../../Redux/friendsReducer";
import {connect} from "react-redux";
import Hometown from "./Hometown";

let mapStateToProps = (state) =>  {
    return {
        users: state.friends.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        followUser: (userId) => {
            dispatch(followActionCreator(userId));
        },
        unfollowUser: (userId) => {
            dispatch(unfollowActionCreator(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreator(users));
        }
    }
}

const HometownContainer = connect(mapStateToProps, mapDispatchToProps) (Hometown);

export default HometownContainer;