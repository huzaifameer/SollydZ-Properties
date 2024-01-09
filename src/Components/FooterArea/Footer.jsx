import './FooterArea.css'
import Facebook from '/src/assets/Images/square-facebook.svg'
import Instagram from '/src/assets/Images/square-instagram.svg'
import Twitter from '/src/assets/Images/square-twitter.svg'
import LinkedIn from '/src/assets/Images/linkedin.svg'
function Footer(){
    return(
        <>
            {/*creating a footer to the form*/}
            <section className="footer">
                <div className="footer-box">
                    <h2>SollydZ Properties</h2>{/*side heading of the footer*/}
                    <p>Find your place in the heart of exceptional living with us.</p>
                    {/*adding links for the footer*/}
                    <div className="social">
                        <a href="#"><img src={Facebook} alt=""/></a>
                        <a href="#"><img src={Instagram} alt=""/></a>
                        <a href="#"><img src={Twitter} alt=""/></a>
                        <a href="#"><img src={LinkedIn} alt=""/></a>
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
                        <span><i className="bx bxs-map"></i> Galle, Southern Province, Sri lanka</span>
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