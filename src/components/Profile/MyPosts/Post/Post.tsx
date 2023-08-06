import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
    message: string
    likesCount?: number
}
export const Post = (props: PostPropsType) => {
    return (
        <div className={s.post}>
            <div className={s.item}>
                <img alt={'avatar'}
                     src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/ae4816cade1a5b7f29787d0b89610132c72c7747041481c6619b9cc3302c0101._RI_TTW_.jpg"/>
                {props.message}
                <div className={s.like}>
                    <span>like</span>
                </div>
            </div>
        </div>
    );
};

