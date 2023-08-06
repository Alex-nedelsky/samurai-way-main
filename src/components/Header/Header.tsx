import React from 'react';
import s from './Header.module.css';

// type HeaderType = {
//         name: string;
//         address: string;
// }
export const Header:React.FC=()=> {
    return (
        <header className={s.header}>
         <img src="https://cdn.logo.com/hotlink-ok/logo-social.png" alt="logo"/>
        </header>
    );
}

