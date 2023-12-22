import React from 'react';
import './NavigationBar.css'
import NavLogo from '/src/assets/Images/SollydZ-Nav.png'
import HomePage from "../HomePage/HomePage.jsx";
import AboutUs from "../AboutUs/AboutUs.jsx";
import Properties from "../Properties/Properties.jsx";
import BlogPage from "../BlogPage/BlogPage.jsx";
import ContactPage from "../ContactPage/ContactPage.jsx";
import {BrowserRouter as Router, Link, Route, Routes} from "react-router-dom";

const NavigationBar = () => {
    return (
        <>
            <Router>
                <nav className="navbar navbar-expand-lg ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
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
                                    <Link className="nav-link" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/aboutus">About Us</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    <Link className="nav-link dropdown-toggle" to="/properties" id="navbarDropdownMenuLink"
                                       role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Properties
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <li><Link className="dropdown-item" to="#">Houses For Sale</Link></li>
                                        <li><Link className="dropdown-item" to="#">Houses For Rent</Link></li>
                                        <li><Link className="dropdown-item" to="#">Lands For Sale</Link></li>
                                        <li><Link className="dropdown-item" to="#">Lands For Lease</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/blogpage">Blog Posts</Link>
                                </li>
                            </ul>

                        </div>
                        <span className="navbar-text">
                        <Link to='/contactpage'><button className='btn btn-outline-light'>Contact Us</button></Link>
                    </span>
                    </div>
                </nav>
                <Routes>
                    <Route path='/' element={<HomePage/>} />
                    <Route path='/aboutus' element={<AboutUs/>} />
                    <Route path='/properties' element={<Properties/>} />
                    <Route path='/blogpage' element={<BlogPage/>} />
                    <Route path='/contactpage' element={<ContactPage/>} />
                </Routes>
            </Router>

        </>
    )
}

export default NavigationBar;