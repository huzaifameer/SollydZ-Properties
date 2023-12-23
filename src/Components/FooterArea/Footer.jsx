import './FooterArea.css'
function Footer(){
    return(
        <>
            <section className="footer">
                <div className="footer-box">
                    <h2>SollydZ</h2>
                    <p>Find your place in the heart of exceptional living with us.</p>
                    <div className="social">
                        <a href="#"><i className="bx bxl-facebook"></i></a>
                        <a href="#"><i className="bx bxl-twitter"></i></a>
                        <a href="#"><i className="bx bxl-instagram"></i></a>
                        <a href="#"><i className="bx bxl-tiktok"></i></a>
                    </div>
                </div>
                <div className="footer-box">
                    <h3>About Us</h3>
                    <ul>
                        <li><a href="#">Company</a></li>
                        <li><a href="#">Gallery</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">SollydZ Hub</a></li>
                    </ul>
                </div>
                <div className="footer-box">
                    <h3>Blog Posts</h3>
                    <ul>
                        <li><a href="#">Features</a></li>
                        <li><a href="#">Market</a></li>
                        <li><a href="#">Stats</a></li>
                        <li><a href="#">Locations</a></li>
                    </ul>
                </div>
                <div className="footer-box">
                    <h3>Contact Us</h3>
                    <div className="contact">
                        <span><i className="bx bxs-map"></i> 110/1, Colombo Road, Galle, Sri lanka</span>
                        <span><i className="bx bxs-phone"></i> +94 91 2243333</span>
                        <span><i className="bx bxs-envelope"></i>sollydzrestate@gmail.com</span>
                    </div>
                </div>
            </section>
            <div className="copyright">{/*developer copyrights*/}
                <p>&#169; HUZAIFAAMEER 2023 All Right Reserved</p>
            </div>
        </>
    )
}
export default Footer;