import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div className={style.post_block}>
            <div>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea></textarea>
                    </div>
                    <div>
                        <button>Send Message</button>
                    </div>
                </div>
            </div>
            <div>
                New post
            </div>
            <div className={style.posts}>
                <Post counter='15' massage='Hi, how are you?' />
                <Post counter='16' massage="It's my first post!" />
                <Post counter='99' massage="Prikol nahuj" />
            </div>
        </div>
    );
};

export default MyPosts;