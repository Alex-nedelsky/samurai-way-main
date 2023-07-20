import React from 'react';
import s from './Profile.module.css';

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
            <div>
                My posts
                <div>
                    New post
                </div>
                <div className={s.post} >
                    <div className={`{s.item} {s.active}`}>
                        post 1
                    </div>
                    <div className={s.item}>
                        post 2
                    </div>
                </div>
            </div>
        </div>
    );
};


