import React, { useEffect } from 'react'
import './style.css';



import Navbar from '../../components/navbar';
import Footer from '../../components/footer';


const Account = () => {

    useEffect(() => {
        if (localStorage.username !== "test" || localStorage.pass !== "test@123test") {
            window.location = "/";
        }
    }, [])

    return (
        <>
            <Navbar />
            <div className="pg-breaker"></div>
            <div className="info-card d-flex flex-column align-items-center m-4 rounded-4 p-5">
                <img src={process.env.PUBLIC_URL + `./assets/logo.png`} className='profile-avatar justify-content-center' alt="profile avatar" />
                <p className='justify-content-center mt-2 mb-0 profile-name'>Divya Aggarwal</p>
                <p className='justify-content-center text-muted'>@test</p>
                <div className="email"></div>
                <div className="profile-passwords"></div>
                <div className="profile-friends"></div>

            </div>

            <Footer />
        </>
    )
};

export default Account;