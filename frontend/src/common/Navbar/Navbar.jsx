import { useState } from "react";
import './navbar.css'
import '../../styles/logout.css';

import Modal from "../Modal/Modal";
import { DropdownMenu } from "../Dropdown/DropdownMenu/DropdownMenu";
import { DropdownItem } from "../Dropdown/DropdownItem/DropdownItem";
import { Line } from "../Line/Line";

import registration from "../../utils/registration";


const Navbar = () => {

    // transform hamburger menu button to X and the opposite
    const [clicked, setClicked] = useState(false);
    const handleClick = () => setClicked(!clicked);

    // Change navbar color depending on hero's height
    const heroHeight = document.querySelector('.hero') ? document.querySelector('.hero').clientHeight : 500;
    
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= heroHeight - heroHeight * 0.25){
            setColor(true);
        } else {
            setColor(false);
        }
    }

    window.addEventListener('scroll', changeColor);

    const currentUser = registration.getCurrentUser();

    // Log-out Modal
    const [modalActive, setModalActive] = useState(false);

    return (
        <>
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
                    <a href="http://127.0.0.1:3000/">Explore</a>
                    <a href="#upload">Upload</a>
                    <DropdownMenu color={color} title={'Profile'}>
                        <DropdownItem link={`#user`} text={currentUser.username} />
                        <DropdownItem link={`#bookmarks`} text="Bookmarks" />
                        <Line />
                        <div className="dropdown-social-icons">
                            <a href="https://instagram.com/generalsuslik?igshid=OGQ5ZDc2ODk2ZA==" target='_blank'><i class="fa-brands fa-instagram"></i></a>
                            <a href="#" target='_blank'><i class="fa-brands fa-linkedin"></i></a>
                            <a href="#" target='_blank'><i class="fa-brands fa-telegram"></i></a>
                            <a href='https://github.com/generalsuslik' target='_blank'><i class="fa-brands fa-github"></i></a>
                        </div>
                    </DropdownMenu>
                    <a className="log-out-a" onClick={() => setModalActive(!modalActive)}>Log Out</a>
                </nav>
            ) : (
                <nav className={clicked ? `${color ? "navbar active black" : "navbar active"}` : "navbar"}> 
                    <a href="http://127.0.0.1:3000/">Explore</a>
                    <a href="#upload">Upload</a>
                    <a href="http://127.0.0.1:3000/sign-in-up/">Sign In</a>  
                </nav>
            )}
        </header>
            <Modal active={modalActive} setActive={setModalActive}>
                <div className="form-box">
                    <div className="logout-container">
                        <div className="content">
                            <div className="text">
                                <h4>Log out</h4>
                            </div>
                            
                            <div className="logout">
                                <div className="form-box">
                                    <form onSubmit={registration.logout}>
                                        <button type="submit" className="button">Log Out</button>
                                    </form>
                                </div>
                            </div>

                            <div className="social-icons">
                                <a href="https://instagram.com/generalsuslik?igshid=OGQ5ZDc2ODk2ZA==" target='_blank'><i class="fa-brands fa-instagram"></i></a>
                                <a href="#" target='_blank'><i class="fa-brands fa-linkedin"></i></a>
                                <a href="#" target='_blank'><i class="fa-brands fa-telegram"></i></a>
                                <a href='https://github.com/generalsuslik' target='_blank'><i class="fa-brands fa-github"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>
        </>
    );
}


export default Navbar;

