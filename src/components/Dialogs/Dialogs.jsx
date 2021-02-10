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

    let dialogsData = [
        { id: 1, name: 'Женька' },
        { id: 2, name: 'Андрей' },
        { id: 3, name: 'Антоша' },
        { id: 4, name: 'Серега' }
    ];

    let massagesData = [
        { id: 1, text: 'Привет' },
        { id: 2, text: 'Как дела?' },
        { id: 3, text: 'Че делаешь?' }
    ];

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
                <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
            </div>
            <div className={style.massages}>
                <Message text={massagesData[0].text} />
                <Message text={massagesData[1].text} />
                <Message text={massagesData[2].text} />
            </div>
        </div>
    )
}

export default Dialogs;