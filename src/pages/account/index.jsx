import React, { useEffect } from 'react'
import './style.css';

import PersonalNotes from './NotesList/personal';


const Account = () => {

    useEffect(() => {
        if (localStorage.username !== "test" || localStorage.pass !== "test@123test") {
            window.location = "/";
        }
    }, [])

    return (
        <>
            <PersonalNotes />
        </>
    )
};

export default Account;