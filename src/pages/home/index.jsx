import React, { useEffect } from 'react'
import './style.css';

import Navbar from './navbar';
import NotesList from './NotesList';
import Footer from './footer';

const Home = () => {
    const NotesFooter = {
        boxShadow: "inset 0px 4px 4px #FFE5A1",
    }

    useEffect(() => {
        if (localStorage.username !== "test" || localStorage.pass !== "test@123test") {
            window.location = "/";
        }
    }, [])
    return (
        <>
            <Navbar heading1='personal' heading2='private' />
            <NotesList />
            <Footer style={NotesFooter} />
        </>
    )
};

export default Home;