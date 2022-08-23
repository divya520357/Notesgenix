import './style.css';
import logo from './assets/logo.png';

const Landing = () => {
    function screensplash() {
        setTimeout(() => {
            document.getElementById("landing-page").style.opacity = "0";
            document.getElementById("landing-page").style.zIndex = "-1";
        }, 4000);
    }

    screensplash();
    return (
        <>
            <div className="landingpage_container" id="landing-page">
                <img src={logo} alt="" className="landingpage_logo my-3 mt-0" data-aos="zoom-in-up" data-aos-duration="1500" />
                <span className="landingpage_text" data-aos="fade-up" data-aos-delay="1500" data-aos-duration="1000">Notesgenix</span>
            </div>
        </>
    )
};

export default Landing;