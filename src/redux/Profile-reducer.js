const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

let initialState = {
    posts: [
        {id: 1, message: 'Привет! Как дела?', likesCount: 12},
        {id: 2, message: 'Привет! Это мой первый пост', likesCount: 1},
        {id: 3, message: 'Да как и вчера, ты все прекрастно понимаешь.', likesCount: 18},
    ],
    newPostText: 'bla-bla-car-dub'
};

const profileReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            };
        }
        case
        UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        default:
            return state;

    }
}

export const addPostActionCreator = () => ({type: ADD_POST});


export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default profileReducer