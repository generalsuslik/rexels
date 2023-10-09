import axios from "axios";
import { useState } from "react";

import Navbar from "./Navbar";

import registration from "../utils/registration";

import '../styles/login.css'


const Login = () => {
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
    };

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
                            <h2>Log In</h2>

                            <div className="input-box">
                                {/* <span className="icon"><i class="fa-solid fa-envelope"></i></span> */}
                                <span className="icon"><i class="fa-solid fa-user"></i></span>
                                <input type="text reset" required placeholder="" onChange={e => setUsername(e.target.value)} value={username}/>
                                <label>Username</label>
                            </div>

                            <div className="input-box">
                                <span className="icon"><i class="fa-solid fa-lock"></i></span>
                                <input type="password reset" required placeholder="" onChange={e => setPassword(e.target.value)} value={password}/>
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
                                <p>Don't have an account? <a href="#sign-up" className="register-link">Sign Up</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
