import React, { useEffect, useRef, useState } from 'react'
import './style.css';

import ItemList from '../../components/ItemList';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';


const Home = () => {
    const btnPersonal = useRef(null);
    const btnShared = useRef(null);
    const btnShadow = useRef(null);

    // importing data
    const notes = [
        { name: "Biology", id: 1, owner: null, star: false, type: 'note' },
        { name: "Anatomy", id: 9, owner: null, star: true, type: 'book' },
        { name: "Physiology", id: 10, owner: 'apple29', star: false, type: 'note' },
        { name: "Pathology", id: 3, owner: null, star: false, type: 'book' },
        { name: "Anatomy", id: 4, owner: null, star: false, type: 'book' },
        { name: "Physiology", id: 7, owner: 'luck01', star: true, type: 'note' },
        { name: "Physiology", id: 10, owner: null, star: false, type: 'book' },
        { name: "Physiology", id: 2, owner: null, star: false, type: 'book' },
        { name: "Anatomy", id: 9, owner: 'berry76', star: true, type: 'note' },
        { name: "Biology", id: 1, owner: null, star: true, type: 'book' },
        { name: "Physiology", id: 5, owner: null, star: false, type: 'note' },
        { name: "Pathology", id: 8, owner: 'harshi067357', star: true, type: 'note' },
        { name: "Anatomy", id: 4, owner: null, star: false, type: 'note' },
        { name: "Physiology", id: 5, owner: null, star: false, type: 'book' },
        { name: "Biology", id: 6, owner: null, star: true, type: 'book' },
        { name: "Biology", id: 6, owner: 'divya520', star: true, type: 'note' },
        { name: "Physiology", id: 7, owner: null, star: false, type: 'book' },
        { name: "Physiology", id: 2, owner: null, star: false, type: 'note' },
        { name: "Pathology", id: 8, owner: null, star: false, type: 'book' },
        { name: "Pathology", id: 3, owner: null, star: true, type: 'note' }
    ]

    const [notes1, SetNotes1] = useState(notes);

    // user authentication check
    useEffect(() => {
        if (localStorage.username !== "test" || localStorage.pass !== "test@123test") {
            window.location = "/";
        }
    }, [])

    // to filter personal items i.e items without any owner name
    function filterPersonal(e) {
        e.preventDefault();
        const filteredNotes = notes;
        SetNotes1(filteredNotes);

        btnShadow.current.style.left = "11%";
    }

    // to filter shared notes i.e items with star attribute set to true
    function filterStarred(e) {
        e.preventDefault();
        const filteredNotes = notes.filter((note) => note.star);
        SetNotes1(filteredNotes);

        btnShadow.current.style.left = "61%";
    }

    return (
        <>
            <Navbar />
            <div className="home_nav my-2 d-flex justify-content-center align-items-center position-relative">
                <button ref={btnPersonal} onClick={filterPersonal} className='bg-transparent border-0 mx-3 w-50 fs-5 text-gray text-decoration-none text-center position-relative'>Personal </button>
                <button ref={btnShared} onClick={filterStarred} className='bg-transparent border-0 mx-3 w-50 fs-5 text-gray text-decoration-none text-center position-relative'>Starred </button>
                <div ref={btnShadow} className="btnShadow"></div>
            </div>
            <div className="pg-breaker"></div>

            <ItemList data={notes1} />

            <Footer />
        </>
    )
};

export default Home;