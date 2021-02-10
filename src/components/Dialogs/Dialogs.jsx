import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css'



const DialogItem = (props) => {
    let path = `/dialogs/id${props.id}`;

    return (
        <div className={style.dialog}>
            <NavLink to={path} activeClassName={style.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={style.massage}>{props.text}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name='Женька' id='1' />
                <DialogItem name='Андрей' id='2' />
                <DialogItem name='Антоша' id='3' />
                <DialogItem name='Серега' id='4' />
            </div>
            <div className={style.massages}>
                <Message text='Привет' />
                <Message text='Как дела?' />
                <Message text='Че делаешь?' />
            </div>
        </div>
    )
}

export default Dialogs;