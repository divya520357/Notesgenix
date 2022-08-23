import React, { useEffect } from 'react'
import './style.css';

import Navbar from './navbar';
import NotesList from './NotesList';
import Footer from './footer';

const Home = () => {
    useEffect(() => {
        if (localStorage.username !== "test" || localStorage.pass !== "test@123test") {
            window.location = "/";
        }
    }, [])
    return (
        <>
            <Navbar />
            <NotesList />
            <Footer />
        </>
    )
};

export default Home;