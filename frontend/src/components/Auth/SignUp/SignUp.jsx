import axios from "axios";
import { useState } from "react";

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
        <div style={{height: "100vh"}}>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
                </label>

                <label>
                    Username:
                    <input type="text" name="username" required value={username} onChange={(e) => setUsername(e.target.value)}/>
                </label>

                <label>
                    Password:
                    <input type="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default SignUp;