import { useState } from "react";
import '../styles/navbar.css';

import registration from "../utils/registration";


const Navbar = () => {

    // transform hamburger menu button to X and the opposite
    const [clicked, setClicked] = useState(false);
    const handleClick = () => setClicked(!clicked);

    // Change navbar color depending on hero's height
    const heroHeight = document.querySelector('.hero') ? document.querySelector('.hero').clientHeight : 500;
    
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= heroHeight - 25){
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener('scroll', changeColor);

    const currentUser = registration.getCurrentUser();
    console.log(currentUser);

    return (
        <header className={color ? "header-black" : "header"} id="#header">
            <a href="/" className="logo">Rexels</a>

            <div className="menu-icons" onClick={handleClick}>
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
                
            <form className={color ? "search-bar-black-active search-bar" : "search-bar-black"}>
                <input type="text" placeholder="search rexels" name="q"/>
                <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
            </form>

            {currentUser ? (
                <nav className={clicked ? `${color ? "navbar active black" : "navbar active"}` : "navbar"}> 
                    <a href="#">Explore</a>
                    <a href="#upload">Upload</a>
                    <a href="#profile">Profile{currentUser.username}</a>
                    <a href="http://127.0.0.1:3000/log-out">Log Out</a>
                </nav>
            ) : (
                <nav className={clicked ? `${color ? "navbar active black" : "navbar active"}` : "navbar"}> 
                    <a href="#">Explore</a>
                    <a href="#upload">Upload</a>
                    <a href="http://127.0.0.1:3000/log-in/">Log In</a>     
                </nav>
            )}
            
        </header>
    );
}


export default Navbar;

