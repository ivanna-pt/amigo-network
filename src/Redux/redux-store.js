import {combineReducers, createStore} from "redux";
import newsfeedReducer from "./newsfeedReducer";
import friendsReducer from "./friendsReducer";


let reducers = combineReducers(
    {
        newsfeedPage: newsfeedReducer,
        friends: friendsReducer
    }
);

let store = createStore(reducers);

export default store;