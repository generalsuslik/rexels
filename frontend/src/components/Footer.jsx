import '../styles/footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>Some heading</h4>
                        <a href="#">
                            <p>Some title</p>
                        </a>
                        <a href="#">
                            <p>Soming new</p>
                        </a>
                        <a href="#">
                            <p>One more</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Some heading</h4>
                        <a href="#">
                            <p>Some title</p>
                        </a>
                        <a href="#">
                            <p>Soming new</p>
                        </a>
                        <a href="#">
                            <p>One more</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Some heading</h4>
                        <a href="#">
                            <p>Some title</p>
                        </a>
                        <a href="#">
                            <p>Soming new</p>
                        </a>
                        <a href="#">
                            <p>One more</p>
                        </a>
                    </div>
                    <div className="sb__footer-links_div">
                        <h4>Coming on soon</h4>
                        <div className="socialmedia">
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-linkedin"></i>
                            <i class="fa-brands fa-telegram"></i>
                        </div>
                    </div>
                </div>

                <hr/>

                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} Rexels. All rights reserved.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="#terms"><div><p>Terms & Conditions</p></div></a>
                        <a href="#terms"><div><p>Privacy</p></div></a>
                        <a href="#terms"><div><p>Sequrity</p></div></a>
                        <a href="#term"><div><p>Cookie Declaration</p></div></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;