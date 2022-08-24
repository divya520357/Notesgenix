import { NavLink } from 'react-router-dom';
import './style.css';

const Navbar = ({ heading1 = "Personal", heading2 = "Shared" }) => {

    return (
        <>
            <h2 className="home_heading fs-butterfly bg-yellow text-center p-2">Notesgenix</h2>
            <div className="home_nav my-2 d-flex justify-content-center align-items-center">
                <NavLink className='bg-transparent border-0 mx-3 w-50 fs-5 text-gray text-decoration-none text-center' to='/notes/personal'>{heading1} </NavLink>
                <NavLink className='bg-transparent border-0 mx-3 w-50 fs-5 text-gray text-decoration-none text-center' to='/notes/shared'>{heading2} </NavLink>
            </div>
            <div className="pg-breaker"></div>
        </>
    )
};

export default Navbar;