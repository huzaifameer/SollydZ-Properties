import House1 from '/src/assets/Images/house-1.jpg'
import House2 from '/src/assets/Images/house-2.jpg'
import House3 from '/src/assets/Images/house-3.jpg'
import './AboutUs.css'


function AboutUs(){
    return(
        <>
            <div className="container special-margin special">
                <div className="row">
                        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"
                                        className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                                        aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                                        aria-label="Slide 3"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <img src={House1} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h1>Unlock the Door to Your Future</h1>
                                            <h5>Experience the art of living with us where every property is a masterpiece.</h5>
                                        </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <img src={House2} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h1>Turning dreams into addresses</h1>
                                            <h5>Discover the perfect blend of comfort and luxury with us.</h5>
                                        </div>
                                </div>
                                <div className="carousel-item">
                                    <img src={House3} className="d-block w-100" alt="..." />
                                        <div className="carousel-caption d-none d-md-block">
                                            <h1>Building Dreams, Selling Realities</h1>
                                            <h5>Turn your aspirations into reality with SollydZ Realty.</h5>
                                        </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                </div>
            </div>
        </>
    )

}
export default AboutUs