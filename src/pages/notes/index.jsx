import React, { useEffect, useRef, useState } from 'react'
import './style.css';

import ItemList from '../../components/ItemList';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';


const Notes = () => {
    const btnPersonal = useRef(null);
    const btnShared = useRef(null);
    const btnShadow = useRef(null);

    // importing data
    const notes = [
        { name: "Biology", id: 1, owner: null, type: 'note' },
        { name: "Anatomy", id: 9, owner: 'berry76', type: 'note' },
        { name: "Physiology", id: 2, owner: null, type: 'note' },
        { name: "Pathology", id: 8, owner: 'harshita', type: 'note' },
        { name: "Pathology", id: 3, owner: null, type: 'note' },
        { name: "Biology", id: 6, owner: 'divya520', type: 'note' },
        { name: "Anatomy", id: 4, owner: null, type: 'note' },
        { name: "Physiology", id: 5, owner: null, type: 'note' },
        { name: "Physiology", id: 10, owner: 'apple29', type: 'note' }
    ]

    const [notes1, SetNotes1] = useState(notes.filter((note) => !note.owner));

    // user authentication check
    useEffect(() => {
        if (localStorage.username !== "test" || localStorage.pass !== "test@123test") {
            window.location = "/";
        }
    }, [])

    // to filter personal items i.e items without any owner name
    function filterPersonal(e) {
        e.preventDefault();
        const filteredNotes = notes.filter((note) => !note.owner);
        SetNotes1(filteredNotes);

        btnShadow.current.style.left = "11%";
    }

    // to filter shared notes i.e items with an owner name
    function filterShared(e) {
        e.preventDefault();
        const filteredNotes = notes.filter((note) => note.owner);
        SetNotes1(filteredNotes);

        btnShadow.current.style.left = "61%";
    }

    return (
        <>  
            <div className="position-fixed w-100 top-0" style={{zIndex:'2'}}>
                <Navbar />
                <div className="home_nav d-flex justify-content-center align-items-center position-relative bg-white w-100">
                    <button ref={btnPersonal} onClick={filterPersonal} className='bg-transparent border-0 mx-3 w-50 fs-5 text-gray text-decoration-none text-center position-relative'>Personal </button>
                    <button ref={btnShared} onClick={filterShared} className='bg-transparent border-0 mx-3 w-50 fs-5 text-gray text-decoration-none text-center position-relative'>Shared </button>
                    <div ref={btnShadow} className="btnShadow"></div>
                </div>
                <div className="pg-breaker"></div>
                </div>
            <ItemList data={notes1} />
           
            <Footer />
        </>
    )
};

export default Notes;