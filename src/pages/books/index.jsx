import React, { useEffect, useState, useRef } from 'react';
import './style.css';

import ItemList from '../../components/ItemList';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';


const Books = () => {
    const btnPersonal = useRef(null);
    const btnShared = useRef(null);
    const btnShadow = useRef(null);

    // importing data
    const books = [
        { name: "Biology", id: 1, owner: null, star: true, type: 'book' },
        { name: "Physiology", id: 2, owner: null, star: false, type: 'book' },
        { name: "Pathology", id: 3, owner: null, star: false, type: 'book' },
        { name: "Anatomy", id: 4, owner: null, star: true, type: 'book' },
        { name: "Physiology", id: 5, owner: null, star: false, type: 'book' },
        { name: "Biology", id: 6, owner: null, star: true, type: 'book' },
        { name: "Physiology", id: 7, owner: null, star: false, type: 'book' },
        { name: "Pathology", id: 8, owner: null, star: false, type: 'book' },
        { name: "Anatomy", id: 9, owner: null, star: true, type: 'book' },
        { name: "Physiology", id: 10, owner: null, star: false, type: 'book' }
    ]

    const [books1, SetBooks1] = useState(books);

    // user authentication check
    useEffect(() => {
        if (localStorage.username !== "test" || localStorage.pass !== "test@123test") {
            window.location = "/";
        }
    }, [])

    // to filter personal items i.e items all books owned
    function filterPrivate(e) {
        e.preventDefault();
        const filteredBooks = books;
        SetBooks1(filteredBooks);

        btnShadow.current.style.left = "11%";
    }

    // to filter shared notes i.e items with an star name
    function filterStarred(e) {
        e.preventDefault();
        const filteredBooks = books.filter((note) => note.star);
        SetBooks1(filteredBooks);
        btnShadow.current.style.left = "61%";
    }

    return (
        <>
            <div className="position-fixed w-100 top-0" style={{zIndex:'2'}}>
                <Navbar />
                <div className="home_nav d-flex justify-content-center align-items-center bg-white position-relative">
                    <button ref={btnPersonal} onClick={filterPrivate} className='bg-transparent border-0 mx-3 w-50 fs-5 text-gray text-decoration-none text-center position-relative'>Private </button>
                    <button ref={btnShared} onClick={filterStarred} className='bg-transparent border-0 mx-3 w-50 fs-5 text-gray text-decoration-none text-center position-relative'>Starred </button>
                    <div ref={btnShadow} className="btnShadow"></div>
                </div>
                <div className="pg-breaker" style={{zIndex:'3'}}></div>
            </div>
            <ItemList data={books1} />

            <Footer />
        </>
    )
};

export default Books;