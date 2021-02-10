import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        { id: 1, massage: 'Hi, how are you?', likesCount: 12 },
        { id: 2, massage: 'It my first post!', likesCount: 16 },
        { id: 3, massage: 'Prikol nahuj', likesCount: 99 }
    ];

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
                <Post likesCount={postsData[0].likesCount} massage={postsData[0].massage} />
                <Post likesCount={postsData[1].likesCount} massage={postsData[1].massage} />
                <Post likesCount={postsData[2].likesCount} massage={postsData[2].massage} />
            </div>
        </div>
    );
};

export default MyPosts;