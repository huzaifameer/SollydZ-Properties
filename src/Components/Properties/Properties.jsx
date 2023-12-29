import React, { Component } from "react";
import { PropertyContext } from "../../context.jsx";
import TitleBar from "../TitleBar/TitleBar.jsx";
import SingleProperty from "../SingleProperty/SingleProperty.jsx";
import HeroArea from "../HeroArea/HeroArea.jsx";
import BannerArea from "../Banner/BannerArea.jsx";
import {Link} from "react-router-dom";

class Properties extends Component {
    static contextType = PropertyContext;

    render() {
        let { loading, properties: properties } = this.context;
        properties=properties.map(property =>{
            return <SingleProperty key={property.id} property={property}/>
        })

        return (
            <>
                <HeroArea hero='propertiesHero'>
                    <BannerArea mainTitle="Find Your Property" subTitle="Empowering Sellers, Delighting Buyers.">
                        <Link to='/' className='banner-btn'>
                            Back to Home
                        </Link>
                    </BannerArea>
                </HeroArea>
                <section className='services-area'>
                        <TitleBar title="Find Your Properties"/>
                        <div className="featured-properties-center">
                            {loading ? <h1>Loading</h1>: properties}
                        </div>
                </section>

            </>

        );
    }
}

export default Properties;
