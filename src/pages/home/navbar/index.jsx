import './style.css';

const Navbar = () => {
    return (
        <>
            <h2 className="home_heading fs-butterfly bg-yellow text-center p-2">Notesgenix</h2>
            <div className="home_nav my-2 d-flex justify-content-center align-items-center">
                <button className='bg-transparent border-0 mx-3 w-50 fs-5 text-gray'>Personal</button>
                <button className='bg-transparent border-0 mx-3 w-50 fs-5 text-gray'>Shared</button>
            </div>
            <div className="pg-breaker"></div>
        </>
    )
};

export default Navbar;