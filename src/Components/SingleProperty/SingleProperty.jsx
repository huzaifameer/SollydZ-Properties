import React from "react";
import { Link } from "react-router-dom";

export default function SingleProperty({ property, onAddToFavorites, isInFavorites, onRemoveFromFavorites }) {
    const { id, type,title, picture, price, bedrooms, tenure } = property;

    const handleViewDetails = () => {
        // Pass the property id and add/remove to favorites callback
        if (isInFavorites) {
            onRemoveFromFavorites(id);
        } else {
            onAddToFavorites(id);
        }
    };

    return (
        <div className="card " style={{ width: "18rem" }}>
            <img src={picture} className="card-img-top" style={{ height: "200px" }} alt={type} />
            <div className="card-body card-body-spcl">
                <h5 className="card-title">{title}</h5>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Price : $ {price}</li>
                <li className="list-group-item">{bedrooms} Bedroom Residence</li>
            </ul>
            <div className="card-body card-body-spcl">
                <Link
                    to={`/properties/${tenure}`}
                    className="card-link btn btn-outline-dark">
                    View Details
                </Link>
            </div>
            <div className="favorite-btn" onClick={handleViewDetails}>
                {isInFavorites ? "Remove from Favorites" : "Add to Favorites"}
            </div>
        </div>
    );
}
