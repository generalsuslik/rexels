import { Component } from "react";
import { useState, useEffect } from "react";


const Navbar = () => {

    let state = { clicked: false };
    const handleClick = () => {
        state.clicked = !state.clicked;
    }

    return (
        <div className="hero" id="hero">
            <header className="header" id="#header">
                <a href="/" className="logo">Rexels</a>

                {/* <input type="checkbox" id="check"/>
                <label for="check" className="icons">
                    <i className="fas fa-times" id="close-icon"/>
                    <i className="fas fa-bars" id="menu-icon"/>
                </label> */}
                <div className="menu-icons" onClick={handleClick}>
                    <i className={state.clicked ? "fas fa-times" : "fas fa-bars"} />
                </div>

                {/* <form className="search-bar">
                    <input type="text" placeholder="search rexels" name="q"/>
                    <button type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                </form> */}

                <nav className="navbar">
                    <a href="#">Explore</a>
                    <a href="#upload">Upload</a>
                    <a href="#log-in">Log In</a>
                </nav>
            </header>

            <div className="hero-text">
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

