import House1 from '/src/assets/Images/house-1.jpg'
import House2 from '/src/assets/Images/house-2.jpg'
import House3 from '/src/assets/Images/house-3.jpg'
import AboutUsImg from '/src/assets/Images/SollydZ-About.png'
import './AboutUs.css'
import React from "react";


function AboutUs(){
    return(
        <>
            <div className="container special-margin special">{/*main display for the about page*/}
                <div className="row">
                        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">{/*adding a image slider to the page*/}
                                {/*bottom button start*/}
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"
                                        className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                                        aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                                        aria-label="Slide 3"></button>
                                {/*bottom button end*/}
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="10000">
                                    <img src={House1} className="d-block w-100" alt="..." />{/*setting a size to the image*/}
                                        <div className="carousel-caption d-none d-md-block">
                                            <h1>Unlock the Door to Your Future</h1>{/*heading for the card*/}
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
                            {/*button for the slider - side button*/}
                            <button className="carousel-control-prev" type="button"
                                    data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            {/*button for the slider - side button*/}
                            <button className="carousel-control-next" type="button"
                                    data-bs-target="#carouselExampleDark" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                </div>
            </div><br/>
            <div className="container border-5">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {/*adding the details card*/}
                    <div className="col">
                        <div className="card h-100">
                            <img src={AboutUsImg} className="card-img-top" alt="..." />{/*setting a thumbnail picture*/}
                            <div className="card-body">
                                <h5 className="card-title">About SollydZ</h5>{/*topic of the card*/}
                                <p className="card-text">{/*adding a paragraph for the card*/}
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi debitis ipsum
                                    velit? A ab aliquam blanditiis impedit labore laborum, maxime placeat possimus
                                    praesentium quaerat quibusdam rerum sequi sit temporibus tenetur. A, aspernatur
                                    consequuntur cumque error ipsum labore maxime, molestiae nobis, qui quisquam sint
                                    totam.
                                </p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Posted By : Admin Team</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://img.freepik.com/free-vector/flat-design-real-estate-searching-with-gadgets_23-2148653817.jpg?w=826&t=st=1703393950~exp=1703394550~hmac=d6e9a5e031b4f955bc334539e45466f808f9e5de72657e7c6530eaf545a9dd5c" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">SollydZ Properties</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi debitis ipsum
                                    velit? A ab aliquam blanditiis impedit labore laborum, maxime placeat possimus
                                    praesentium quaerat quibusdam rerum sequi sit temporibus tenetur. A, aspernatur
                                    consequuntur cumque error ipsum labore maxime, molestiae nobis, qui quisquam sint
                                    totam.
                                </p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Posted By : Admin Team</small>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <img src="https://img.freepik.com/free-photo/hand-presenting-model-house-home-loan-campaign_53876-104970.jpg?w=826&t=st=1703394319~exp=1703394919~hmac=a7871ad7452c637be3453542f10df6e79956ec15fe701b0dbb4392f90b427112" className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Our Goal</h5>
                                <p className="card-text">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad commodi debitis ipsum
                                    velit? A ab aliquam blanditiis impedit labore laborum, maxime placeat possimus
                                    praesentium quaerat quibusdam rerum sequi sit temporibus tenetur. A, aspernatur
                                    consequuntur cumque error ipsum labore maxime, molestiae nobis, qui quisquam sint
                                    totam.
                                </p>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Posted By : Admin Team</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div><br/>
        </>
    )

}
export default AboutUs