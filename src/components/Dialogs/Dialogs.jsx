import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/jen'ka">Женька</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/andrew">Андрей</NavLink>
                </div>
                <div className={` ${style.dialog} ${style.active} `}>
                    <NavLink to="/dialogs/antosha">Антоша</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to="/dialogs/serega">Серега</NavLink>
                </div>
            </div>
            <div className={style.massages}>
                <div className={style.massage}>Привет</div>
                <div className={style.massage}>Как дела?</div>
                <div className={style.massage}>Че далаешь?</div>
            </div>
        </div>
    )
}

export default Dialogs;