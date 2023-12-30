import React, { useContext } from "react";
import { useParams } from 'react-router-dom';
import { PropertyContext } from "../../context.jsx";

export default function SinglePage() {
    const { tenure } = useParams();
    const { getProperty } = useContext(PropertyContext);
    const property = getProperty(tenure);

    if (!property) {
        // Handle the case where property is undefined
        return (
            <div className={'error'}>
                <h3>Property not found</h3>
                {/* Add a link or button to navigate back to the property list */}
            </div>
        );
    }

    const { type, description, bedrooms, price, location, images } = property;

    return (
        <>
            <div className="container-fluid">
                {/*image slider starting*/}
                <div style={{backgroundColor:'#9FB3B4',borderRadius:'22px',padding:'10px',marginTop:'20px'}} id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        {images && Array.isArray(images) && (
                            images.map((_, index) => (
                                <button key={index} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index} className={index === 0 ? 'active' : ''} aria-label={`Slide ${index + 1}`}></button>
                            ))
                        )}
                    </div>
                    <div className="carousel-inner">
                        {images && Array.isArray(images) && (
                            images.map((image, index) => (
                                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                    <img src={image} className="d-block w-50 mx-auto" alt={`Property ${index + 1}`} />
                                </div>
                            ))
                        )}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
                {/*image slider ending*/}
                {/* Displaying all the property details */}
                <br/>
                <h2 style={{textAlign:'center'}}>{type}</h2>
                <p style={{paddingLeft:'50px'}}>Bedrooms -  {bedrooms}</p>
                <p style={{paddingLeft:'50px'}}>Price - ${price}</p>
                <p style={{paddingLeft:'50px'}}>Location - {location} {}</p>
                <p style={{textAlign:'justify',padding:'40px 50px',backgroundColor:'#ffffff',borderRadius:'22px'}}>Description -  {description}</p>
                <br/>
            </div>
        </>
    );
}
