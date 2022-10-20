const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, user: 'John Snow', date: "Just Now", postText: "Some text  one ", likeCount: 5, shareCount: 10},
        {id: 2, user: 'Patty Smith', date: "10 Sept", postText: "Some text  two two two two two", likeCount: 18, shareCount: 8},
        {id: 3, user: 'Ariana Grande', date: "Yesterday", postText: "Some text three Some text three Some text three", likeCount: 0, shareCount: 0},
        {id: 4, user: 'Tom Cruise', date: "2 days ago", postText: "Some text four Some text four Some text four Some text four", likeCount: 10, shareCount: 2},
        {id: 5, user: 'Billy Eilish', date: "1 Oct", postText: "Some text five Some text five Some text five Some text five", likeCount: 7, shareCount: 3},
    ],

    newPostText: ''
}

const newsfeedReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => {
    return {
        type: ADD_POST
    }
}
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
}

export default newsfeedReducer;