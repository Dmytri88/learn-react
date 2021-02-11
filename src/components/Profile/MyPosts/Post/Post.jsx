import React from 'react';
import style from './Post.module.css'

const Post = (props) => {
    return (
        <div className={style.item}>
            <img className={style.avatarka} src='http://archilab.online/images/1/123.jpg' />
            { props.massage}
            <div>
                <span>like </span>
                {props.likesCount}
            </div>
        </div>
    );
};

export default Post;