import './App.css'
import NavigationBar from "./Components/NavBar/NavigationBar.jsx";
import Footer from "./Components/FooterArea/Footer.jsx";
import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import SinglePage from "./Components/SinglePage/SinglePage.jsx";
import HomePage from "./Components/HomePage/HomePage.jsx";
import AboutUs from "./Components/AboutUs/AboutUs.jsx";
import Properties from "./Components/Properties/Properties.jsx";
import ContactPage from "./Components/ContactPage/ContactPage.jsx";

function App() {
    return (
        <>
            <Router>
                <NavigationBar />{/*calling the navigation bar*/}
                <Routes>
                    <Route path='/' element={<HomePage/>} />{/*linking the home page*/}
                    <Route path='/aboutus' element={<AboutUs/>} />{/*linking the about us page*/}
                    <Route path='/properties' element={<Properties/>} />{/*linking the properties*/}
                    <Route path='/contactpage' element={<ContactPage/>} />{/*linking the contact page*/}
                    <Route path='/properties/:tenure' element={<SinglePage />} />
                </Routes>
            </Router>
            <Footer />
        </>

    );
}

export default App;
