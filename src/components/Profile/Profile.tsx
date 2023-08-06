import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";



export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img
                    src='https://amiel.club/uploads/posts/2022-03/thumbs/1647578204_2-amiel-club-p-more-zakat-krasivie-kartinki-3.jpg'
                    alt='sunset'/>
            </div>
            <div>
                ava+description
            </div>
            <MyPosts/>
        </div>
    );
};


