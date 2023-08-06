import React from 'react';
import './App.css';
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar";
import {Profile} from "./components/Profile/Profile";
import '@mui/material/styles';


function App() {
    return (
        <div className='app-wrapper'>
            <Header />
            <Navbar/>
            <Profile/>
            <Footer />
        </div>
    );
}

export default App;
