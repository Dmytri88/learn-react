import React from 'react';
import style from './Post.module.css'

const Post = () => {
    return (
        <div className={style.item}>
            <img className={style.avatarka} src='http://archilab.online/images/1/123.jpg' />
                Post 123
            <div>
                <span>like</span>
            </div>
        </div>
    );
};

export default Post;