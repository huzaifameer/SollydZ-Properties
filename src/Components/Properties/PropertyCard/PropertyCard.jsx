
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
                                    <h4 className="card-title">{property.type}</h4>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item"><h6>Price: ${property.price}</h6></li>
                                    <li className="list-group-item">{property.bedrooms} Bedrooms</li>
                                </ul>
                                <div className="card-body">
                                    <Link to={property.url} className="card-link">
                                        <button className='btn btn-outline-dark'>View Details</button>
                                    </Link>
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