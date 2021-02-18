import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = (props) => {

    let anyPosts =
        props.postsData.map(elements => <Post likesCount={elements.likesCount} massage={elements.massage} />)

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