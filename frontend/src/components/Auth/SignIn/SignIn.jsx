import { useState } from "react";

import Navbar from "../../../common/Navbar/Navbar";
import SignUp from "../SignUp/SignUp";

import registration from "../../../utils/registration";

import './signin.css';


const SignInForm = ({ handleLogin, username, setUsername, password, setPassword, loading, setLoading }) => {
    return (
        <form onSubmit={handleLogin}>
            <h2>Sign In</h2>

            <div className="input-box">
                {/* <span className="icon"><i class="fa-solid fa-envelope"></i></span> */}
                <span className="icon"><i class="fa-solid fa-user"></i></span>
                <input type="text" required onChange={e => setUsername(e.target.value)} value={username}/>
                <label>Username</label>
            </div>

            <div className="input-box">
                <span className="icon"><i class="fa-solid fa-lock"></i></span>
                <input type="password" required onChange={e => setPassword(e.target.value)} value={password}/>
                <label>Password</label>
            </div>

            <div className="remember-forgot">
                <label><input type="checkbox"/>Remember me</label>
                <a href="#">Forgot password?</a>
            </div>

            <button type="submit" className="button">
                {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                )}
                    Sign In
            </button>
        </form>
    );
}

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(true);
    const [message, setMessage] = useState('');

    const handleLogin = event => {
        event.preventDefault();

        setMessage('');

        registration.login(username, password)
            .then(() => {
                window.location.href = "/";
            },
            error => {
                const resMessage = 
                    (error.response && error.response.data && error.response.data.message) || 
                    error.message || error.toString();
                
                setLoading(false);
                setMessage(resMessage);
            }
        );
        setUsername('');
        setPassword('');
    };

    const [signInActive, setSignInActive] = useState(true);
    const [signUpActive, setSignUpActive] = useState(false);

    function handleSignInFormToggling() {
        setSignInActive(true);
        setSignUpActive(false);
    }

    function handleSignUpFormToggling() {
        setSignInActive(false);
        setSignUpActive(true);
    }

    return (

        <div className="background">
            <Navbar />
            <div className="login-container">
                <div className="content">
                    <h2 className="logo">Rexels</h2>
                    <div className="text">
                        <h4>Welcome back!</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias officia, 
                            aut numquam quam cumque, harum facere voluptatum pariatur, quia doloremque debitis. 
                            Modi voluptatem accusamus cum id aspernatur dolorem labore architecto.</p>
                    </div>

                    <div className="social-icons">
                        <a href="https://instagram.com/generalsuslik?igshid=OGQ5ZDc2ODk2ZA==" target='_blank'><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" target='_blank'><i class="fa-brands fa-linkedin"></i></a>
                        <a href="#" target='_blank'><i class="fa-brands fa-telegram"></i></a>
                        <a href='https://github.com/generalsuslik' target='_blank'><i class="fa-brands fa-github"></i></a>
                    </div>
                </div>

                <div className="logreg-box">
                    <div className="form-box login">
                        <form onSubmit={handleLogin}>
                            <h2>Sign In</h2>

                            <div className="input-box">
                                {/* <span className="icon"><i class="fa-solid fa-envelope"></i></span> */}
                                <span className="icon"><i class="fa-solid fa-user"></i></span>
                                <input type="text" required onChange={e => setUsername(e.target.value)} value={username}/>
                                <label>Username</label>
                            </div>

                            <div className="input-box">
                                <span className="icon"><i class="fa-solid fa-lock"></i></span>
                                <input type="password" required onChange={e => setPassword(e.target.value)} value={password}/>
                                <label>Password</label>
                            </div>

                            <div className="remember-forgot">
                                <label><input type="checkbox"/>Remember me</label>
                                <a href="#">Forgot password?</a>
                            </div>

                            <button type="submit" className="button">
                                {loading && (
                                    <span className="spinner-border spinner-border-sm"></span>
                                )}
                                    Sign In
                            </button>

                            <div className="login-register">
                                <p>Don't have an account? <a href="http://127.0.0.1:3000/sign-up/" className="register-link">Sign Up</a></p>
                            </div>
                        </form>
                        
                        {message && (
                            <div className="form-group">
                                <div className="alert alert-danger">
                                    {message}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
