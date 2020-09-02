import {usersAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';


let initialState = {
    posts: [
        {id: 1, message: 'Привет! Как дела?', likesCount: 12},
        {id: 2, message: 'Привет! Это мой первый пост', likesCount: 1},
        {id: 3, message: 'Да как и вчера, ты все прекрастно понимаешь.', likesCount: 18},
    ],
    newPostText: 'bla-bla-car-dub',
    profile: null
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
        case SET_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state;

    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const setUserProfile = (profile) => ({type: SET_USERS_PROFILE, profile});
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch (setUserProfile(response.data));
        });
}


export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
})

export default profileReducer