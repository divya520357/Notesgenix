import React, { useEffect } from 'react'
import './style.css';

import PersonalNotes from './NotesList/personal';


const Home = () => {

    useEffect(() => {
        if (localStorage.username !== "Test" || localStorage.pass !== "test@123test") {
            window.location = "/";
        }
    }, [])
    return (
        <>
            <PersonalNotes />
        </>
    )
};

export default Home;