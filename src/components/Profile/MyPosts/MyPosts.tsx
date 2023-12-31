import s from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import React from "react";
export const MyPosts: React.FC = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>

            </div>
            <div className={s.posts}>
                <Post message={"It's my first post"} likesCount={3242}/>
                <Post message={"Hi, how are you?"} likesCount={0}/>
            </div>
        </div>
    );
};
