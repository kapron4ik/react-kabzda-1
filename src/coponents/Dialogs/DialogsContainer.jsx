import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";


const DialogsContainer = (props) => {
    // let state = props.store.getState().dialogsPage
    //
    // let onSendMessageClick = () => {
    //     props.store.dispatch(sendMessageCreator());
    // }
    // let onNewMessageChange = (body) => {
    //     props.store.dispatch(updateNewMessageBodyCreator(body));
    // }

    return (
        // <Dialogs updateNewMessageBody={onNewMessageChange}
        //          sendMessage={onSendMessageClick}
        //          dialogsPage={state}/>
        <StoreContext.Consumer>
            {(store) => {
                let state = store.getState().dialogsPage

                let onSendMessageClick = () => {
                    store.dispatch(sendMessageCreator());
                }
                let onNewMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyCreator(body));
                }
                return (<Dialogs updateNewMessageBody={onNewMessageChange}
                                 sendMessage={onSendMessageClick}
                                 dialogsPage={state}/>)
            }
            }
        </StoreContext.Consumer>

    )
}

export default DialogsContainer;