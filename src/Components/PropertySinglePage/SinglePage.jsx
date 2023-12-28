// PropertyDetails.js

import React from "react";

function SinglePage({ property }) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h2>{property.type} Details</h2>
                    {/* Display other details, including images */}
                    <img src={property.picture} alt="Property" />
                    <p>Price: ${property.price}</p>
                    <p>{property.bedrooms} Bedrooms</p>
                    {/* Add more details as needed */}
                </div>
            </div>
        </div>
    );
}

export default SinglePage;
