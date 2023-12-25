
import {Link} from "react-router-dom";
import React from "react";
import propertyData from '../properties.json'


function PropertyCard(){
    return(
        <>
            <div className="container">
                <div className="row">
                    {propertyData.properties.map((property) => (
                        <div key={property.id} className='special-display'>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={property.picture} className="card-img-top" alt="Property" />
                                <div className="card-body">
                                    <h5 className="card-title">{property.type}</h5>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Price: ${property.price}</li>
                                    <li className="list-group-item">Bedrooms: {property.bedrooms}</li>
                                </ul>
                                <div className="card-body">
                                    <Link to={property.url} className="card-link">
                                        <button className='btn btn-outline-primary'>View Details</button>
                                    </Link>
                                    {/* Add more links as needed */}
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>


        </>
    )
}
export default PropertyCard;