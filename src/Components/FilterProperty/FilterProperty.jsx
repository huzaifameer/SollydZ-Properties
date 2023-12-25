// PropertySearch.jsx

import React, { useEffect, useState } from 'react';

function FilterProperty() {
    const [properties, setProperties] = useState([]);
    const [filteredProperties, setFilteredProperties] = useState([]);
    const [searchCriteria, setSearchCriteria] = useState({
        type: '',
        minPrice: '',
        maxPrice: '',
        minBedrooms: '',
        maxBedrooms: '',
        startDate: '',
        endDate: '',
        postcode: '',
    });

    useEffect(() => {
        // Fetch data when the component mounts
        fetch() // Assuming data.json is in the public directory
            .then(response => response.json())
            .then(data => {
                setProperties(data.properties);
                setFilteredProperties(data.properties);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []); // Empty dependency array means this effect runs once when the component mounts

    const handleSearch = () => {
        // Implement your filtering logic based on search criteria
        let filteredProperties = properties;

        if (searchCriteria.type) {
            filteredProperties = filteredProperties.filter(property => property.type === searchCriteria.type);
        }

        if (searchCriteria.minPrice) {
            filteredProperties = filteredProperties.filter(property => property.price >= parseInt(searchCriteria.minPrice));
        }

        if (searchCriteria.maxPrice) {
            filteredProperties = filteredProperties.filter(property => property.price <= parseInt(searchCriteria.maxPrice));
        }

        if (searchCriteria.minBedrooms) {
            filteredProperties = filteredProperties.filter(property => property.bedrooms >= parseInt(searchCriteria.minBedrooms));
        }

        if (searchCriteria.maxBedrooms) {
            filteredProperties = filteredProperties.filter(property => property.bedrooms <= parseInt(searchCriteria.maxBedrooms));
        }

        if (searchCriteria.startDate) {
            filteredProperties = filteredProperties.filter(property => new Date(property.dateAdded) >= new Date(searchCriteria.startDate));
        }

        if (searchCriteria.endDate) {
            filteredProperties = filteredProperties.filter(property => new Date(property.dateAdded) <= new Date(searchCriteria.endDate));
        }

        if (searchCriteria.postcode) {
            filteredProperties = filteredProperties.filter(property => property.postcode.startsWith(searchCriteria.postcode));
        }

        setFilteredProperties(filteredProperties);
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setSearchCriteria(prevSearchCriteria => ({ ...prevSearchCriteria, [name]: value }));
    };

    return (
        <div>
            <h2>Property Search</h2>
            <form>
                <label>
                    Type:
                    <input type="text" name="type" value={searchCriteria.type} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Min Price:
                    <input type="number" name="minPrice" value={searchCriteria.minPrice} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Max Price:
                    <input type="number" name="maxPrice" value={searchCriteria.maxPrice} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Min Bedrooms:
                    <input type="number" name="minBedrooms" value={searchCriteria.minBedrooms} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Max Bedrooms:
                    <input type="number" name="maxBedrooms" value={searchCriteria.maxBedrooms} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Start Date:
                    <input type="date" name="startDate" value={searchCriteria.startDate} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    End Date:
                    <input type="date" name="endDate" value={searchCriteria.endDate} onChange={handleInputChange} />
                </label>
                <br />
                <label>
                    Postcode:
                    <input type="text" name="postcode" value={searchCriteria.postcode} onChange={handleInputChange} />
                </label>
                <br />
                <button type="button" onClick={handleSearch}>Search</button>
            </form>

            <h2>Filtered Properties</h2>
            <ul>
                {filteredProperties.map(property => (
                    <li key={property.id}>
                        <p>Type: {property.type}</p>
                        <p>Price: {property.price}</p>
                        <p>Bedrooms: {property.bedrooms}</p>
                        <p>Postal Code: {property.postcode}</p>
                        <h4>Images:</h4>
                        <ul>
                            {property.images.map((image, index) => (
                                <li key={index}>
                                    <img src={image} alt={`Property ${property.id} - Image ${index + 1}`} />
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FilterProperty;
