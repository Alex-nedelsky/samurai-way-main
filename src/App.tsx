import React from 'react';
import './App.css';
import {Footer} from "./components/Footer";
import {Header} from "./components/Header";
import {Navbar} from "./components/Navbar";
import {Profile} from "./components/Profile";
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
