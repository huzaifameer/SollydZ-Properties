import React from "react";
import {Link} from 'react-router-dom'
export default function SingleProperty({property}){
    // eslint-disable-next-line react/prop-types
    const {type,picture,price,bedrooms,url} =property;
    return(
        <div className="card" style={{ width: "18rem" }}>
            <img src={picture} className="card-img-top" style={{height:"200px"}} alt={type} />
                <div className="card-body">
                    <h5 className="card-title">{type}</h5>
                </div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Price : $ {price}</li>
                    <li className="list-group-item">{bedrooms} Bedroom Residence</li>
                </ul>
                <div className="card-body">
                    <Link to={url} className="card-link btn btn-outline-dark">View Details</Link>
                </div>
            <div className="favorite-btn">
                Add to favorites
            </div>
        </div>
    )
}