import { Link } from "react-router-dom";
import React, { useState } from "react";
import propertyData from '../properties.json';

function PropertyCard() {
    // creating the state to manage favorite properties and initializing it with an emty array
    const [favorites, setFavorites] = useState([]);
    const [showFavorites, setShowFavorites] = useState(false);

    const toggleFavorite = (property) => {
        const isFavorite = favorites.some((fav) => fav.id === property.id);

        if (isFavorite) {
            setFavorites(favorites.filter((fav) => fav.id !== property.id));
        } else {
            setFavorites([...favorites, property]);
        }
    };

    const toggleFavoritesView = () => {
        setShowFavorites(!showFavorites);
    };

    const propertiesToDisplay = showFavorites ? favorites : propertyData.properties;

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <button
                            className="banner-btn mb-3"
                            onClick={toggleFavoritesView}
                        >
                            {showFavorites ? "Show All Properties" : "Show Your Favorites"}
                        </button>
                    </div>
                    {propertiesToDisplay.map((property) => (
                        <div key={property.id} className='special-display'>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={property.picture} className="card-img-top" alt="Property" />
                                <div className="card-body">
                                    <h4 className="card-title">{property.type}</h4>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <h6>Price: ${property.price}</h6>
                                    </li>
                                    <li className="list-group-item">{property.bedrooms} Bedrooms</li>
                                </ul>
                                <div className="card-body">
                                    <Link to={property.url} className="card-link">
                                        <button  className='btn btn-outline-dark'>View Details</button>
                                    </Link>
                                </div>
                            </div>
                            <button
                                className={
                                    `favorite-btn 
                                ${favorites.some((fav) => fav.id === property.id) ? 'active' : ''}`
                                }
                                onClick={() => toggleFavorite(property)}
                            >
                                {
                                    favorites.some((fav) => fav.id === property.id) ? 'Remove from Favorites' : 'Add to Favorites'
                                }
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default PropertyCard;
