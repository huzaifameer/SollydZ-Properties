import HeroArea from "../HeroArea/HeroArea.jsx";
import BannerArea from "../Banner/BannerArea.jsx";
import {Link} from "react-router-dom";
import TitleBar from "../TitleBar/TitleBar.jsx";
import React from "react";
/*import propertyData from './properties.json'*/
import PropertyCard from "./PropertyCard/PropertyCard.jsx";

function Properties(){
    return(
        <>
            <HeroArea hero='propertiesHero'>
                <BannerArea mainTitle="Find Your Property" subTitle="Empowering Sellers, Delighting Buyers.">
                    <Link to='/' className='banner-btn'>
                        Back to Home
                    </Link>
                </BannerArea>
            </HeroArea>
            <section className='services-area'>
                <TitleBar title='Find Your Property' />
                <PropertyCard/>
            </section>
        </>
    )

}
export default Properties