import React from "react";
import { Link } from "react-router-dom";

export default function SingleProperty({ property, onAddToFavorites, isInFavorites, onRemoveFromFavorites }) {
    /*getting the data from the json file*/
    const { id, type,title, picture, price, bedrooms, tenure,day,month,year } = property;

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
                <h5 className="card-title">{title}</h5>{/*title for the card*/}
            </div>
            <ul className="list-group list-group-flush" style={{textAlign:'left',paddingLeft:'12px'}}>
                <p>Price : $ {price}</p>
                <p className="">{bedrooms} Bedrooms <b>|</b>  Added : {month}-{year}</p>{/*no of rooms and the added date*/}
            </ul>
            <div className="card-body card-body-spcl">
                <Link
                    to={`/properties/${tenure}`}
                    className="card-link btn btn-outline-dark">
                    View Details
                </Link>
            </div>
            <div className="favorite-btn" onClick={handleViewDetails}>{/*button for the favorite list*/}
                {isInFavorites ? "Remove from Favorites" : "Add to Favorites"}
            </div>
        </div>
    );
}
