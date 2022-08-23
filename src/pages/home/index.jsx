import React from 'react'
import './style.css';

import Navbar from './navbar';
import NotesList from './NotesList';
import Footer from './footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <NotesList />
            <Footer />
        </>
    )
};

export default Home;