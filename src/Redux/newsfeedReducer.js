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

    newPostText: 'some text'
};

let date = new Date();
let postDate = date.toLocaleDateString('en-GB', {year: 'numeric', month: 'long', day: 'numeric'});

let idAvailable = function (arr) {
    let newArr = arr.map(el => el.id);
    let max = newArr[0];
    newArr.forEach((elem, index) => {
        if (index > 0){
            if(max < elem) {
                max = elem;
            }
        }
    })
    let id = max + 1;
   return id;
};

const newsfeedReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: idAvailable(initialState.posts),
                user: 'User Name',
                date: postDate,
                postText: state.newPostText,
                likeCount: 0,
                shareCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
            //version5
            // state.posts.push(newPost);
            // state.newPostText = '';
            // return state;
        case UPDATE_NEW_POST_TEXT:
            //version5
            // state.newPostText = action.newText;
            // return state;

            return {
                ...state,
                newPostText: action.newText
            };

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