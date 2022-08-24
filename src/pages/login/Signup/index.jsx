// import { useState, useEffect } from 'react';
import { useState } from 'react';

import './style.css';


const Signup = () => {
    const [username, SetUsername] = useState(null);
    const [pass, SetPass] = useState(null);

    const onSubmit = (e) => {
        e.preventDefault();
        if (username.trim().toLowerCase() === "test" && pass === "test@123test") {
            localStorage.setItem('username', 'test');
            localStorage.setItem('pass', 'test@123test');
            window.location = "/home";
        }

        else {
            alert("Please enter valid username/password");
        }
    }

    return (
        <div data-aos="fade" className='mt-5'>
            <h1 className="nav-heading m-4 text-center">Notesgenix</h1>
            <div className="login-form p-4 text-center m-5 rounded-4">
                <i className="fa-solid fa-user display-1 p-3 mb-5 rounded-circle"></i>
                <form onSubmit={onSubmit}>
                    <div className="input-group flex-nowrap mb-4 mt-4">
                        <span className="input-group-text"><i className="fa-solid fa-user rounded-circle p-2"></i></span>
                        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => SetUsername(e.target.value)} />
                    </div>
                    <div className="input-group flex-nowrap ">
                        <span className="input-group-text" id="addon-wrapping"><i className="fa-solid fa-lock rounded-circle p-2"></i></span>
                        <input type="password" className="form-control" placeholder="Password" aria-label="password" aria-describedby="addon-wrapping" onChange={(e) => SetPass(e.target.value)} />
                    </div>
                    <button type="submit" className="btn login-btn rounded-5 m-4 px-5">Login</button>
                </form>
                <p className='no-acc'>Don’t have an account?
                    <a href="/" className="sign-btn link-dark"> Sign Up</a>
                </p>
            </div>
        </div>
    )
};

export default Signup;