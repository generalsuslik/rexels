const Hero = () => {
    return (
        <div className="hero" id="hero">
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

export default Hero;