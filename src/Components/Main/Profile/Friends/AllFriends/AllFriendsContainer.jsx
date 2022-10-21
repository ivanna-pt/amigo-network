import React from "react";
import {followActionCreator, setUsersActionCreator, unfollowActionCreator} from "../../../../../Redux/friendsReducer";
import {connect} from "react-redux";
import AllFriends from "./AllFriends";

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

const AllFriendsContainer = connect(mapStateToProps, mapDispatchToProps) (AllFriends)

export default AllFriendsContainer;