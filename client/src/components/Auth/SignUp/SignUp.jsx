import axios from "axios";
import { useState } from "react";

import Navbar from "../../../common/Navbar/Navbar";

import registration from "../../../utils/registration";


const baseUrl = "http://127.0.0.1:8000/api/"

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async e => {
        e.preventDefault();
        try{
            const response = await axios.post(`${baseUrl}registration/`, {"email": email, "username": username, 
                "password": password});
            setMessage(response.data.access);
            registration.login(username, password)
                .then(() => {
                    window.location.href = "/";
                });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="background">
            <Navbar />
            <div className="login-container">
                <div className="content">
                    <h2 className="logo">Rexels</h2>
                    <div className="text">
                        <h4>Welcome to Rexels!</h4>
                        <p>Access a lot of free, high resolution photos that are shared by professional photographers.</p>
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
                        <form onSubmit={handleSubmit}>
                            <h2>Sign Up</h2>
                            <div className="input-box">
                                <span className="icon"><i class="fa-solid fa-envelope"></i></span>
                                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                                <label>Email</label>
                            </div>

                            <div className="input-box">    
                                <span className="icon"><i class="fa-solid fa-user"></i></span>
                                <input type="text" required onChange={e => setUsername(e.target.value)} value={username}/>
                                <label>Username</label>
                            </div>

                            <div className="input-box">
                                <span className="icon"><i class="fa-solid fa-lock"></i></span>
                                <input type="password" required onChange={e => setPassword(e.target.value)} value={password}/>
                                <label>Password</label>
                            </div>

                            <button type="submit" className="button">
                                Sign Up
                            </button>

                            <div className="login-register">
                                <p>Back to <a href="http://127.0.0.1:3000/sign-in/" className="register-link">Sign In</a> page</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;