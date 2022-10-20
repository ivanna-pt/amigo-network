import {combineReducers, createStore} from "redux";
import newsfeedReducer from "./newsfeedReducer";


let reducers = combineReducers(
    {
        newsfeedPage: newsfeedReducer,
    }
);

let store = createStore(reducers);

export default store;