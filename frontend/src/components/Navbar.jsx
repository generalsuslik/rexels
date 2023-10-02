import { Component } from "react";


class Navbar extends Component{
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked})
    }

    render(){
        return (
            <div className="hero">
                <header className="header">
                    <a href="/" className="logo">Rexels</a>

                    <input type="checkbox" id="check"/>
                    <label for="check" className="icons">
                        <i className="fas fa-times" id="close-icon"/>
                        <i className="fas fa-bars" id="menu-icon"/>
                    </label>

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
            </div>
        );
    }
}


export default Navbar;

