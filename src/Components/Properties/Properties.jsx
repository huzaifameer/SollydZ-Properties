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
                <TitleBar title='Properties' />
                {/*{propertyData.properties.map((property) => (
                    <div key={property.id} className='container special-margin special-display'>
                            <div className="card h-100" style={{ width: "18rem" }}>
                                <img src={property.picture} className="card-img-top" alt="Property" />
                                <div className="card-body">
                                    <h5 className="card-title">{property.type}</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Price: ${property.price}</li>
                                    <li className="list-group-item">Bedrooms: {property.bedrooms}</li>
                                     Add more details as needed
                                </ul>
                                <div className="card-body">
                                    <Link to={property.url} className="card-link">
                                        <button className='btn btn-outline-primary'>View Details</button>
                                    </Link>
                                     Add more links as needed
                                </div>
                            </div>
                    </div>

                ))}*/}
                <PropertyCard/>

            </section>
        </>
    )

}
export default Properties