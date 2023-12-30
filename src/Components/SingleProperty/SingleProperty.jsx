import React from "react";
import {Link} from 'react-router-dom'
export default function SingleProperty({property}){
    const {id,type,picture,price,bedrooms,tenure} =property;
    const handleViewDetails = () => {
        history.push(`/properties/${tenure}`);
    };
    return(
        <div className="card " style={{ width: "18rem" }}>
            <img src={picture} className="card-img-top" style={{height:"200px"}} alt={type} />
                <div className="card-body card-body-spcl">
                    <h5 className="card-title">{type}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Price : $ {price}</li>
                    <li className="list-group-item">{bedrooms} Bedroom Residence</li>
                </ul>
                <div className="card-body card-body-spcl">
                    <Link to={`/properties/${tenure}`} className="card-link btn btn-outline-dark" key={id} onClick={handleViewDetails}>View Details</Link>
                </div>
            <div className="favorite-btn">
                Add to favorites
            </div>
        </div>
    )
}