import React from 'react';
import DialogItem from './DialogItems/DialogsItems';
import style from './Dialogs.module.css'
import Message from './Messages/Messages';

const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: 'Женька' },
        { id: 2, name: 'Андрей' },
        { id: 3, name: 'Антоша' },
        { id: 4, name: 'Серега' }
    ];

    let messagesData = [
        { id: 1, _text: 'Привет' },
        { id: 2, _text: 'Как дела?' },
        { id: 3, _text: 'Че делаешь?' }
    ];

    let dialogElement = dialogsData
        .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElement = messagesData
        .map(message => <Message text={message._text} />)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogElement}
            </div>
            <div className={style.messages}>
                {messagesElement}
            </div>
        </div>
    )
}

export default Dialogs;