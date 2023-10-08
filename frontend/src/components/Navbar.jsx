import { useState } from "react";
import '../styles/navbar.css';


const Navbar = () => {

    // transform hamburger menu button to X and the opposite
    const [clicked, setClicked] = useState(false);
    const handleClick = () => setClicked(!clicked);

    // Change navbar color depending on hero's height
    const hero = document.querySelector('.hero');
    
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= hero.clientHeight - 25){
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener('scroll', changeColor);

    return (
        <div className="hero" id="hero">
            <header className={color ? "header-black" : "header"} id="#header">
                <a href="/" className="logo">Rexels</a>

                <div className="menu-icons" onClick={handleClick}>
                    <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
                </div>
                    
                <form className={color ? "search-bar-black-active search-bar" : "search-bar-black"}>
                    <input type="text" placeholder="search rexels" name="q"/>
                    <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>

                <nav className={clicked ? `${color ? "navbar active black" : "navbar active"}` : "navbar"}> 
                    <a href="#">Explore</a>
                    <a href="#upload">Upload</a>
                    <a href="#log-in">Log In</a>
                </nav>
            </header>

            <div className="hero-text" onClick={handleClick}>
                <h1 className="hero-logo">The best free photos</h1>
                <p>Powered by creators</p>
            </div>

            <div className="search-bar-container">
                <form className="search-bar">
                    <input type="text" placeholder="search rexels" name="q"/>
                    <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form>
            </div>
        </div>
    );
}


export default Navbar;

