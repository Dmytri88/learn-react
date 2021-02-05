import React from 'react';
import style from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <div>
                My post
                <div>
                    <textarea></textarea>
                    <button>Send Message</button>
                </div>
            </div>
            <div>
                New post
            </div>
            <Post />
        </div>
    );
};

export default MyPosts;