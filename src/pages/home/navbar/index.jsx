import './style.css';
import { link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <h2 className="home_heading fs-butterfly bg-yellow text-center p-2">Notesgenix</h2>
            <div className="home_nav">
                <button>Personal</button>
                <button>Shared</button>
            </div>
        </>
    )
};

export default Navbar;