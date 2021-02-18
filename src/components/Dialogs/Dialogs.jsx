import React from 'react';
import DialogItem from './DialogItems/DialogsItems';
import style from './Dialogs.module.css'
import Message from './Messages/Messages';

const Dialogs = (props) => {

    let dialogElement =
        props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

    let messagesElement =
        props.messagesData.map(message => <Message text={message._text} />)

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