import './style.css';

const Login = () => {
    return (
        <div>
            <h1 className="nav-heading m-4 text-center">Notesgenix</h1>
            <div className="login-form p-4 text-center m-5 rounded-4">
                <i className="fa-solid fa-user display-1 p-3 mb-5 rounded-circle"></i>
                <form>
                <div className="input-group flex-nowrap mb-4 mt-4">
                    <span className="input-group-text"><i className="fa-solid fa-user rounded-circle p-2"></i></span>
                    <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
                </div>
                <div class="input-group flex-nowrap ">
                    <span class="input-group-text" id="addon-wrapping"><i className="fa-solid fa-lock rounded-circle p-2"></i></span>
                    <input type="password" className="form-control" placeholder="Password" aria-label="password" aria-describedby="addon-wrapping" />
                </div>
                <button type="submit" className="btn login-btn rounded-5 m-4 px-3">Login</button>
                </form>
                <p>Don’t have an account? 
                    <button className='btn p-0'>Sign up</button>
                </p>
            </div>
            

        </div>
    )
};

export default Login;