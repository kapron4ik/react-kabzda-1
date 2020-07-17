import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Привет! Как дела?', likesCount: 12},
                {id: 2, message: 'Привет! Это мой первый пост', likesCount: 1},
                {id: 3, message: 'Да как и вчера, ты все прекрастно понимаешь.', likesCount: 18},
            ],
            newPostText: 'bla-bla-car-dub'
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Vasia'},
                {id: 2, name: 'Pavlik'},
                {id: 3, name: 'Dunkan'},
                {id: 4, name: 'Kim'},
                {id: 5, name: 'Dima'},
            ],
            messages: [
                {id: 1, message: 'Привет'},
                {id: 2, message: 'Как вы сегодня доехали на работу?'},
                {id: 3, message: 'Да как и вчера, ты все прекрастно понимаешь.'},
                {id: 4, message: '100₴'},
                {id: 5, message: 'Йо'},
            ],
            newMessageBody: ""
        }
    },
    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._callSubscriber(this._state);

    }
};





export default store;
window.store = store;