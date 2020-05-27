import React from 'react';
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>
                {props.name}
            </NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                < DialogItem name="Vasia" id="1" />
                < DialogItem name="Pavlik" id="2" />
                < DialogItem name="Dunkan" id="3" />
                < DialogItem name="Kim" id="4" />
                < DialogItem name="Dima" id="5" />
            </div>
            <div className={s.messages}>
                < Message message="Привет!"/>
                < Message message="Как вы сегодня доехали на работу?"/>
                < Message message="Да как и вчера, ты все прекрастно понимаешь."/>
            </div>
        </div>
    )
}

export default Dialogs;