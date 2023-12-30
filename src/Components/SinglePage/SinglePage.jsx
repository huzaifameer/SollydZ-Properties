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

    const { type, description, bedrooms, price, location, images, addedDate, addedYear, addedMonth } = property;

    return (
        <>
            <div className="container-fluid">
                {/* Render property details here */}
                <h2>{type}</h2>
                <p>Description: {description}</p>
                <p>Bedrooms: {bedrooms}</p>
                <p>Price: ${price}</p>
                <p>Location: {location}</p>
                <p>Added Date: {addedDate} {addedMonth} {addedYear}</p>

                {/* Add more details as needed */}

                {/* Example: Render images */}
                {images && Array.isArray(images) && (
                    <div>
                        {images.map((image, index) => (
                            <img key={index} src={image} alt={`Property ${index + 1}`} />
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}
