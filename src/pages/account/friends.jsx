import { Link } from "react-router-dom";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import "./style.css"


const Friends = () => {
    return ( <>
            <Navbar />
            <div className="pg-breaker"></div>
            <div className="friends-page ">
                <div className="top-heading d-flex">
                    <Link to='/account'><i class="back-arrow fa-solid fa-angle-left "></i></Link>
                    <h4 className="text-center">Friends</h4>
                </div>
                <div className="sync-phone bg-yellow d-flex align-items-center rounded-3 p-2 my-3">
                    <i class="fa-solid fa-address-card p-1 rounded-3 bg-secondary bg-opacity-25"></i>
                    <div className="sync-text">
                        <p className="mb-0">Sync your contacts</p>
                        <p className="mb-0 sync-desc">Find your friends and start sharing</p>
                    </div>
                </div>
                <div className="w-100 rounded-5 px-3 py-2 mb-4 bg-yellow d-flex align-items-center">
                <i class="fa-solid fa-magnifying-glass ms-2"></i>
                <p className="mb-0 ms-3 text-secondary">Enter Username</p>
                </div>

                <div className="requests">
                    <h5>Friend Requests</h5>
                    <div className="friend-pending d-flex align-items-center">
                        <img  src={process.env.PUBLIC_URL + `../assets/logo.png`} alt="friend request pending" />
                        <span className="pending-name"><p className="mb-0">Lakshya Gupta</p><p className="text-secondary mb-0">@luck01</p></span>
                        <div>
                            <i class="fa-solid fa-xmark"></i>
                            <i class="fa-solid fa-check"></i>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
 
export default Friends;