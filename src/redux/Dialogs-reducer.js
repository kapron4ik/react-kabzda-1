import profileReducer from "./Profile-reducer";

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {

        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            }
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY,
    body: text
})

export default dialogsReducer