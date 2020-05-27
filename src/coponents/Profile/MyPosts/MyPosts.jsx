import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';

const MyPosts = () => {
    return <div className={s.postBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea></textarea>
            </div>
            <button>Add post</button>
        </div>
        <div className={s.posts}>
            <Post message='Привет! Как дела?' likesCount='0'/>
            <Post message='Привет! Это мой первый пост' likesCount='13'/>
        </div>
    </div>
}

export default MyPosts;