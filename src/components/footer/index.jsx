import './style.css';
import { NavLink } from 'react-router-dom';


const Footer = () => {

    return (
        <>
            <div className="footer-container position-fixed bottom-0 w-100 bg-white">
                <div className="pg-breaker"></div>
                <div className="footer-bar d-flex align-items-center justify-content-center mt-1 mb-2">
                    <NavLink className="footer-btn d-flex flex-column justify-content-center align-items-center text-decoration-none" to='/home'>
                        <i className="fa-solid fa-house p-1"></i>
                        Home
                    </NavLink>
                    <NavLink className="footer-btn d-flex flex-column justify-content-center align-items-center text-decoration-none" to='/notes'>
                        <i className="fa-solid fa-file p-1"></i>
                        Notes
                    </NavLink>
                    <NavLink className="footer-btn d-flex flex-column justify-content-center align-items-center text-decoration-none" to='/books'>
                        <i className="fa-solid fa-book p-1"></i>
                        Books
                    </NavLink>
                    <NavLink className="footer-btn d-flex flex-column justify-content-center align-items-center text-decoration-none" to='/account'>
                        <i className="fa-solid fa-user p-1"></i>
                        Account
                    </NavLink>
                </div>
            </div>
        </>
    )
};

export default Footer;