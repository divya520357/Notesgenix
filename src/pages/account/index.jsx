import React, { useEffect } from 'react'
import './style.css';



import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { Link } from 'react-router-dom';


const Account = () => {

    const PersonalInfo=[
        {Name:'Divya Aggarwal', Useraname:'@test',Email:'divya@test.com', Password:'********'}
    ]

    useEffect(() => {
        if (localStorage.username !== "test" || localStorage.pass !== "test@123test") {
            window.location = "/";
        }
    }, [])

    const onLogout = (e) =>{
        e.preventDefault();
        window.location = "/";
        localStorage.clear();
    }
    
    return (
        <>
            <Navbar />
            <div className="pg-breaker"></div>
            <div className="info-card d-flex flex-column align-items-center m-4 mt-5 rounded-4 p-5">
                
                {PersonalInfo.map((item,i)=>(
                    <React.Fragment key={i}>
                        <img src={process.env.PUBLIC_URL + `./assets/logo.png`} className='profile-avatar justify-content-center' alt="profile avatar" />
                        <p className='justify-content-center mt-2 mb-0 profile-name'>{item.Name}</p>
                        <p className='justify-content-center text-muted'>{item.Useraname}</p>
                        <div className="info-details d-flex justify-content-between mt-1">
                            <p>Email</p>
                            <p>{item.Email}</p>
                        </div>
                        <div className="info-details d-flex justify-content-between">
                            <p>Password</p>
                            <p>{item.Password}</p>
                        </div>
                        <div className="info-details d-flex justify-content-between align-items-center mt-3">
                            <p className='mb-0'><b>Friends</b></p>
                           <Link to='/account/personal' className='text-black'> <i class="fa-solid fa-angle-right"></i></Link>
                        </div>
                    </React.Fragment>))
                }

            </div>
            <div className="help bg-yellow m-4 mt-5 p-3 d-flex align-items-center justify-content-center rounded-4">
                <i class="help-icon bg-white rounded-circle p-2 fs-1 fa-solid fa-headset"></i>
                <p className='mb-0 ps-3'>How can we help you?</p>
            </div>
            <div className="logout position-absolute  me-4 fs-1 d-flex justify-content-end">
                <i onClick={onLogout} class="logout-icon fa-solid bg-yellow rounded-circle p-3 fa-arrow-right-from-bracket"></i>
            </div>
            <Footer />
        </>
    )
};

export default Account;