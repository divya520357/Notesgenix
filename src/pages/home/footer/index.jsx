import './style.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="footer-container position-fixed bottom-0 w-100">
                <div className="pg-breaker"></div>
                <div className="footer-bar d-flex align-items-center justify-content-center mt-1 mb-2">
                    <Link className="footer-btn d-flex flex-column justify-content-center align-items-center" to='/notes'>
                        <i className="fa-regular fa-file p-1"></i>
                        Notes
                    </Link>
                    <Link className="footer-btn d-flex flex-column justify-content-center align-items-center" to='/books'>
                        <i className="fa-solid fa-book p-1"></i>
                        Books
                    </Link>
                    <Link className="footer-btn d-flex flex-column justify-content-center align-items-center" to='/account'>
                        <i className="fa-regular fa-user p-1"></i>
                        Account
                    </Link>
                </div>
            </div>
        </>
    )
};

export default Footer;