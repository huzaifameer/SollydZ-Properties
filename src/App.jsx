import './App.css'
import NavigationBar from "./Components/NavBar/NavigationBar.jsx";
import Footer from "./Components/FooterArea/Footer.jsx";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SinglePage from "./Components/Properties/SinglePage.jsx";

function App() {
    return (
        <>
            <NavigationBar />
            <BrowserRouter>
                <Routes>
                    <Route path='/properties/:url' element={<SinglePage />} />
                </Routes>


            </BrowserRouter>
            <Footer />
        </>

    );
}

export default App;
