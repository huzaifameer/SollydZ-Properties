// eslint-disable-next-line no-unused-vars
import React from 'react';
import './NavigationBar.css'
import NavLogo from '/src/assets/Images/SollydZ-Nav.png'
import HomePage from "../HomePage/HomePage.jsx";
import AboutUs from "../AboutUs/AboutUs.jsx";
import Properties from "../Properties/Properties.jsx";
import ContactPage from "../ContactPage/ContactPage.jsx";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";
import SingleProperty from "../SingleProperty/SingleProperty.jsx";
import SinglePage from "../SinglePage/SinglePage.jsx";

const NavigationBar = () => {
    return (
        <>

                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            <img className='navLogo' src={NavLogo} alt="Navi Logo"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link> {/*setting the home page*/}
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/properties">Properties</Link> {/*setting the link for the property page*/}
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/aboutus">About Us</Link> {/*setting the link for the About Us page*/}
                                </li>
                            </ul>
                            <span className='navbar-text'>
                                {/*setting the search bar*/}
                                <form className="d-flex">
                                    <input className="form-control me-1" type="search" placeholder="Enter the property key"
                                           aria-label="Search" />
                                    <button className="btn btn-outline-light" type="submit">Search</button>
                                </form>
                            </span><br/>
                            <span className="navbar-text">
                            <Link to='/contactpage'><button className='btn btn-outline-light'>Contact Us</button></Link>
                        </span>
                        </div>

                    </div>
                </nav>


        </>
    )
}

export default NavigationBar;