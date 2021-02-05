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
            <Post counter='15' massage='Hi, how are you?' />
            <Post counter='16' massage="It's my first post!" />
            <Post counter='99' massage="Prikol nahuj" />
        </div>
    );
};

export default MyPosts;