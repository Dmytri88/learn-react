import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {

    let postsData = [
        { id: 1, massage: 'Hi, how are you?', likesCount: 12 },
        { id: 2, massage: 'It my first post!', likesCount: 16 },
        { id: 3, massage: 'Prikol nahuj', likesCount: 99 },
        { id: 4, massage: 'Bla-bla', likesCount: 0 }
    ];

    let anyPosts = postsData
        .map(elements => <Post likesCount={elements.likesCount} massage={elements.massage} />)

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
                {anyPosts}
            </div>
        </div>
    );
};

export default MyPosts;